'use strict';
/* Libraries for the coding platform.
   The app reads the student's code and fetches any library it needs, so "import" / "#include a package" just works.
     Java   -> Maven Central (repo1.maven.org): the .jar and every jar it needs, put on the classpath
     Python -> pip install --target into a per-language folder, added to PYTHONPATH
     Node   -> npm install into a per-language folder, found through NODE_PATH
   Auto-detected from the code, or named by the student with a one-line marker, e.g.
     // @dep com.mysql:mysql-connector-j        (Java, Maven groupId:artifactId[:version])
     # @dep pandas                               (Python)
     // @dep lodash                              (Node)
   A common set is mapped automatically (e.g. MySQL): see KNOWN below. */
const fs = require('fs');
const path = require('path');
const cp = require('child_process');
const { spawnAny } = require('./toolchain');

const WIN = process.platform === 'win32';
const MAVEN_CENTRAL = 'https://repo1.maven.org/maven2';

/* import/use seen in code  ->  the package to fetch (the longest matching prefix wins).
   Anything not listed can still be named with a one-line  @dep  marker. */
const KNOWN = {
  java: {
    'java.sql.': null, 'javax.sql.': null, 'java.': null, 'javax.swing': null, 'javax.': null,   // built into the JDK
    // databases (JDBC drivers and friends)
    'com.mysql.': 'com.mysql:mysql-connector-j', 'org.mariadb.jdbc': 'org.mariadb.jdbc:mariadb-java-client',
    'org.postgresql': 'org.postgresql:postgresql', 'org.sqlite': 'org.xerial:sqlite-jdbc', 'org.h2': 'com.h2database:h2',
    'oracle.jdbc': 'com.oracle.database.jdbc:ojdbc11', 'com.microsoft.sqlserver': 'com.microsoft.sqlserver:mssql-jdbc',
    'org.apache.derby': 'org.apache.derby:derby', 'com.zaxxer.hikari': 'com.zaxxer:HikariCP',
    'com.mongodb': 'org.mongodb:mongodb-driver-sync', 'redis.clients.jedis': 'redis.clients:jedis',
    'org.hibernate': 'org.hibernate.orm:hibernate-core', 'jakarta.persistence': 'jakarta.persistence:jakarta.persistence-api',
    'javax.persistence': 'javax.persistence:javax.persistence-api', 'org.apache.ibatis': 'org.mybatis:mybatis',
    // JSON, XML, CSV, documents
    'com.google.gson': 'com.google.code.gson:gson', 'org.json': 'org.json:json', 'com.fasterxml.jackson': 'com.fasterxml.jackson.core:jackson-databind',
    'com.fasterxml.jackson.dataformat.yaml': 'com.fasterxml.jackson.dataformat:jackson-dataformat-yaml', 'org.yaml.snakeyaml': 'org.yaml:snakeyaml',
    'com.squareup.moshi': 'com.squareup.moshi:moshi', 'com.opencsv': 'com.opencsv:opencsv', 'org.apache.commons.csv': 'org.apache.commons:commons-csv',
    'org.apache.poi': 'org.apache.poi:poi-ooxml', 'org.apache.pdfbox': 'org.apache.pdfbox:pdfbox', 'com.itextpdf': 'com.itextpdf:itextpdf',
    'com.itextpdf.kernel': 'com.itextpdf:kernel', 'com.itextpdf.layout': 'com.itextpdf:layout', 'org.jsoup': 'org.jsoup:jsoup',
    // utilities
    'com.google.common': 'com.google.guava:guava', 'org.apache.commons.lang3': 'org.apache.commons:commons-lang3', 'org.apache.commons.lang': 'commons-lang:commons-lang',
    'org.apache.commons.io': 'commons-io:commons-io', 'org.apache.commons.math3': 'org.apache.commons:commons-math3', 'org.apache.commons.collections4': 'org.apache.commons:commons-collections4',
    'org.apache.commons.text': 'org.apache.commons:commons-text', 'org.apache.commons.codec': 'commons-codec:commons-codec', 'org.joda.time': 'joda-time:joda-time',
    'lombok': 'org.projectlombok:lombok', 'org.jetbrains.annotations': 'org.jetbrains:annotations', 'com.github.javafaker': 'com.github.javafaker:javafaker', 'net.datafaker': 'net.datafaker:datafaker',
    'org.bouncycastle': 'org.bouncycastle:bcprov-jdk18on', 'org.mindrot.jbcrypt': 'org.mindrot:jbcrypt', 'com.google.zxing': 'com.google.zxing:core', 'com.google.zxing.client.j2se': 'com.google.zxing:javase',
    // logging
    'org.apache.logging.log4j': 'org.apache.logging.log4j:log4j-core', 'org.slf4j': 'org.slf4j:slf4j-simple', 'ch.qos.logback': 'ch.qos.logback:logback-classic',
    // networking, web, async
    'okhttp3': 'com.squareup.okhttp3:okhttp', 'retrofit2': 'com.squareup.retrofit2:retrofit', 'retrofit2.converter.gson': 'com.squareup.retrofit2:converter-gson',
    'org.apache.http': 'org.apache.httpcomponents:httpclient', 'org.apache.hc.client5': 'org.apache.httpcomponents.client5:httpclient5',
    'io.netty': 'io.netty:netty-all', 'reactor.core': 'io.projectreactor:reactor-core', 'io.reactivex.rxjava3': 'io.reactivex.rxjava3:rxjava',
    'io.javalin': 'io.javalin:javalin', 'spark.': 'com.sparkjava:spark-core', 'org.eclipse.jetty': 'org.eclipse.jetty:jetty-server',
    'jakarta.servlet': 'jakarta.servlet:jakarta.servlet-api', 'javax.servlet': 'javax.servlet:javax.servlet-api', 'jakarta.mail': 'org.eclipse.angus:jakarta.mail',
    'javax.mail': 'com.sun.mail:javax.mail', 'io.jsonwebtoken': 'io.jsonwebtoken:jjwt-api', 'org.apache.kafka': 'org.apache.kafka:kafka-clients',
    'org.openqa.selenium': 'org.seleniumhq.selenium:selenium-java', 'com.rabbitmq': 'com.rabbitmq:amqp-client',
    // Spring (Spring Boot gets the web starter when the code has web annotations)
    'org.springframework.context': 'org.springframework:spring-context', 'org.springframework.beans': 'org.springframework:spring-context',
    'org.springframework.stereotype': 'org.springframework:spring-context', 'org.springframework.jdbc': 'org.springframework:spring-jdbc',
    // charts, UI look and feel, science
    'org.jfree': 'org.jfree:jfreechart', 'org.knowm.xchart': 'org.knowm.xchart:xchart', 'com.formdev.flatlaf': 'com.formdev:flatlaf',
    'weka': 'nz.ac.waikato.cms.weka:weka-stable', 'org.apache.lucene': 'org.apache.lucene:lucene-core',
    // tests (run with the JUnit runner)
    'org.mockito': 'org.mockito:mockito-core', 'org.assertj': 'org.assertj:assertj-core', 'org.hamcrest': 'org.hamcrest:hamcrest',
    // Kotlin
    'kotlinx.coroutines': 'org.jetbrains.kotlinx:kotlinx-coroutines-core-jvm', 'io.ktor.server': 'io.ktor:ktor-server-core-jvm', 'io.ktor.server.netty': 'io.ktor:ktor-server-netty-jvm',
    'io.ktor.server.engine': 'io.ktor:ktor-server-netty-jvm', 'io.ktor.client': 'io.ktor:ktor-client-cio-jvm', 'org.springframework.web.reactive': null
  },
  python: {
    'mysql.connector': 'mysql-connector-python', 'mysqlx': 'mysql-connector-python', 'MySQLdb': 'mysqlclient', 'pymysql': 'PyMySQL',
    'psycopg2': 'psycopg2-binary', 'sqlalchemy': 'SQLAlchemy', 'PIL': 'Pillow', 'cv2': 'opencv-python', 'bs4': 'beautifulsoup4',
    'dotenv': 'python-dotenv', 'yaml': 'PyYAML', 'sklearn': 'scikit-learn', 'skimage': 'scikit-image', 'docx': 'python-docx', 'pptx': 'python-pptx',
    'fitz': 'PyMuPDF', 'Crypto': 'pycryptodome', 'jwt': 'PyJWT', 'dateutil': 'python-dateutil', 'serial': 'pyserial', 'usb': 'pyusb',
    'telegram': 'python-telegram-bot', 'telebot': 'pyTelegramBotAPI', 'discord': 'discord.py', 'win32api': 'pywin32', 'win32com': 'pywin32', 'win32gui': 'pywin32',
    'attr': 'attrs', 'OpenGL': 'PyOpenGL', 'google.generativeai': 'google-generativeai', 'google.genai': 'google-genai', 'googleapiclient': 'google-api-python-client',
    'google.cloud.storage': 'google-cloud-storage', 'firebase_admin': 'firebase-admin', 'speech_recognition': 'SpeechRecognition', 'magic': 'python-magic',
    'Levenshtein': 'python-Levenshtein', 'mpl_toolkits': 'matplotlib', 'dns': 'dnspython', 'jose': 'python-jose', 'nacl': 'PyNaCl', 'Bio': 'biopython',
    'faiss': 'faiss-cpu', 'fpdf': 'fpdf2', 'xlsxwriter': 'XlsxWriter', 'socketio': 'python-socketio', 'paho': 'paho-mqtt', 'faker': 'Faker',
    'gtts': 'gTTS', 'pyaudio': 'PyAudio', 'imblearn': 'imbalanced-learn', 'tensorflow_hub': 'tensorflow-hub', 'jinja2': 'Jinja2', 'markdown': 'Markdown',
    'sentence_transformers': 'sentence-transformers', 'langchain_openai': 'langchain-openai', 'langchain_community': 'langchain-community', 'langchain_core': 'langchain-core',
    'huggingface_hub': 'huggingface-hub', 'pyrebase': 'pyrebase4', 'tortoise': 'tortoise-orm', 'ttkbootstrap': 'ttkbootstrap', 'customtkinter': 'customtkinter',
    'PyQt5': 'PyQt5', 'PyQt6': 'PyQt6', 'PySide6': 'PySide6', 'pypdf': 'pypdf', 'PyPDF2': 'PyPDF2', 'websocket': 'websocket-client', 'kafka': 'kafka-python',
    'zmq': 'pyzmq', 'git': 'GitPython', 'github': 'PyGithub', 'slugify': 'python-slugify', 'multipart': 'python-multipart', 'ldap': 'python-ldap',
    'cairo': 'pycairo', 'usb.core': 'pyusb', 'pkg_resources': 'setuptools', 'setuptools': 'setuptools', 'gi': 'PyGObject'
  },
  node: {
    'mysql2': 'mysql2', 'mysql': 'mysql', 'pg': 'pg', 'sqlite3': 'sqlite3', 'better-sqlite3': 'better-sqlite3', 'mongodb': 'mongodb', 'mongoose': 'mongoose',
    'express': 'express', 'axios': 'axios', 'lodash': 'lodash', 'dayjs': 'dayjs', 'node-fetch': 'node-fetch', 'dotenv': 'dotenv', 'cheerio': 'cheerio'
  }
};
/* C / C++: header -> MSYS2 package (Windows) and pkg-config modules / link flags. */
const C_LIBS = [
  [/^curl\//, 'curl', ['libcurl']], [/^openssl\//, 'openssl', ['openssl']], [/^sqlite3\.h$/, 'sqlite3', ['sqlite3']], [/^zlib\.h$/, 'zlib', ['zlib']],
  [/^SDL2\/SDL_image\.h$/, 'SDL2_image', ['SDL2_image']], [/^SDL2\/SDL_ttf\.h$/, 'SDL2_ttf', ['SDL2_ttf']], [/^SDL2\/SDL_mixer\.h$/, 'SDL2_mixer', ['SDL2_mixer']],
  [/^SDL2\/|^SDL\.h$/, 'SDL2', ['sdl2']], [/^SDL3\//, 'sdl3', ['sdl3']], [/^png\.h$/, 'libpng', ['libpng']], [/^jpeglib\.h$/, 'libjpeg-turbo', ['libjpeg']],
  [/^uv\.h$/, 'libuv', ['libuv']], [/^gtk\/gtk\.h$/, 'gtk3', ['gtk+-3.0']], [/^gtk-4\.0\/|^gtk4\//, 'gtk4', ['gtk4']],
  [/^Eigen\/|^eigen3\//, 'eigen3', ['eigen3']], [/^fmt\//, 'fmt', ['fmt']], [/^spdlog\//, 'spdlog', ['spdlog']], [/^nlohmann\//, 'nlohmann-json', ['nlohmann_json']],
  [/^SFML\//, 'sfml', ['sfml-graphics', 'sfml-window', 'sfml-system', 'sfml-audio', 'sfml-network']], [/^opencv2\//, 'opencv', ['opencv4']],
  [/^gtest\//, 'gtest', ['gtest']], [/^gmock\//, 'gtest', ['gmock']], [/^google\/protobuf\//, 'protobuf', ['protobuf']], [/^grpcpp?\//, 'grpc', ['grpc++']],
  [/^Poco\//, 'poco', [], ['-lPocoNet', '-lPocoUtil', '-lPocoJSON', '-lPocoXML', '-lPocoFoundation', '-lws2_32', '-liphlpapi']],
  [/^boost\//, 'boost', [], []], [/^GLFW\//, 'glfw', ['glfw3'], ['-lopengl32']], [/^GL\/glew\.h$/, 'glew', ['glew']],
  [/^GL\/(glut|freeglut)\.h$/, 'freeglut', ['freeglut'], ['-lopengl32', '-lglu32']], [/^GL\/glu?\.h$/, null, [], ['-lopengl32', '-lglu32']],
  [/^raylib\.h$/, 'raylib', ['raylib']], [/^yaml-cpp\//, 'yaml-cpp', ['yaml-cpp']], [/^tinyxml2\.h$/, 'tinyxml2', ['tinyxml2']],
  [/^libxml\//, 'libxml2', ['libxml-2.0']], [/^jansson\.h$/, 'jansson', ['jansson']], [/^cjson\/|^cJSON\.h$/, 'cjson', ['libcjson']],
  [/^(mysql\/)?mysql\.h$/, 'libmariadbclient', ['libmariadb']], [/^libpq-fe\.h$/, 'postgresql', ['libpq']], [/^(n)?curses\.h$/, 'pdcurses', [], ['-lpdcurses']],
  [/^Q[A-Z]\w*$|^Qt(Core|Gui|Widgets|Network|Sql)\//, 'qt6-base', [], []], [/^gmp(xx)?\.h$/, 'gmp', ['gmp']], [/^mpfr\.h$/, 'mpfr', ['mpfr']],
  [/^cairo\.h$|^cairo\//, 'cairo', ['cairo']], [/^portaudio\.h$/, 'portaudio', ['portaudio-2.0']], [/^sndfile\.h$/, 'libsndfile', ['sndfile']],
  [/^armadillo$/, 'armadillo', ['armadillo']], [/^lua\.hpp?$|^lauxlib\.h$/, 'lua', ['lua']], [/^ft2build\.h$/, 'freetype', ['freetype2']],
  [/^windows\.h$/, null, [], ['-lgdi32', '-lcomdlg32', '-lcomctl32', '-lole32', '-luuid']], [/^winsock2?\.h$|^ws2tcpip\.h$/, null, [], ['-lws2_32']],
  [/^pthread\.h$|^thread$|^future$/, null, [], ['-pthread']], [/^math\.h$|^cmath$/, null, [], ['-lm']]
];
const BOOST_LIBS = { filesystem: 'boost_filesystem', thread: 'boost_thread', program_options: 'boost_program_options', regex: 'boost_regex', serialization: 'boost_serialization', date_time: 'boost_date_time', chrono: 'boost_chrono', random: 'boost_random', iostreams: 'boost_iostreams', log: 'boost_log', locale: 'boost_locale', json: 'boost_json', url: 'boost_url', asio: null };
/* PHP:  use Vendor\X  ->  composer package */
const PHP_KNOWN = { 'Monolog': 'monolog/monolog', 'GuzzleHttp': 'guzzlehttp/guzzle', 'Carbon': 'nesbot/carbon', 'PHPMailer': 'phpmailer/phpmailer', 'Dotenv': 'vlucas/phpdotenv',
  'Ramsey\\Uuid': 'ramsey/uuid', 'Faker': 'fakerphp/faker', 'Twig': 'twig/twig', 'PhpOffice\\PhpSpreadsheet': 'phpoffice/phpspreadsheet', 'PhpOffice\\PhpWord': 'phpoffice/phpword',
  'Dompdf': 'dompdf/dompdf', 'League\\Csv': 'league/csv', 'Illuminate\\Database': 'illuminate/database', 'Illuminate\\Support': 'illuminate/support', 'Firebase\\JWT': 'firebase/php-jwt',
  'Intervention\\Image': 'intervention/image', 'Stripe': 'stripe/stripe-php', 'Predis': 'predis/predis', 'MongoDB': 'mongodb/mongodb', 'Slim': 'slim/slim', 'Psr\\Log': 'psr/log',
  'Endroid\\QrCode': 'endroid/qr-code', 'TCPDF': 'tecnickcom/tcpdf', 'Mpdf': 'mpdf/mpdf', 'Smarty': 'smarty/smarty', 'PHPUnit': 'phpunit/phpunit', 'Doctrine\\DBAL': 'doctrine/dbal' };
/* Ruby:  require 'x'  ->  gem (when different) */
const RUBY_KNOWN = { 'active_record': 'activerecord', 'active_support': 'activesupport', 'rest-client': 'rest-client', 'rest_client': 'rest-client', 'sinatra/base': 'sinatra',
  'sinatra': 'sinatra', 'colorize': 'colorize', 'tty-prompt': 'tty-prompt', 'mysql2': 'mysql2', 'sqlite3': 'sqlite3', 'pg': 'pg', 'nokogiri': 'nokogiri', 'httparty': 'httparty',
  'faker': 'faker', 'rspec': 'rspec', 'minitest/autorun': 'minitest', 'json/pure': 'json_pure', 'dotenv': 'dotenv', 'puma': 'puma', 'rack': 'rack', 'redis': 'redis', 'prawn': 'prawn' };
/* Rust:  use x::  ->  Cargo dependency (with the features students need) */
const RUST_KNOWN = { tokio: '{ version = "1", features = ["full"] }', serde: '{ version = "1", features = ["derive"] }', reqwest: '{ version = "0", features = ["blocking", "json"] }',
  clap: '{ version = "4", features = ["derive"] }', uuid: '{ version = "1", features = ["v4"] }', chrono: '"0.4"', rand: '"0.8"', regex: '"*"', serde_json: '"*"', anyhow: '"*"',
  thiserror: '"*"', itertools: '"*"', rayon: '"*"', mysql: '"*"', rusqlite: '{ version = "*", features = ["bundled"] }', axum: '"*"', actix_web: '"*"', warp: '"*"',
  crossterm: '"*"', ratatui: '"*"', colored: '"*"', image: '"*"', csv: '"*"', log: '"*"', env_logger: '"*"', lazy_static: '"*"', once_cell: '"*"', num: '"*"', nalgebra: '"*"', ndarray: '"*"' };
/* C#:  using X;  ->  NuGet package */
const NUGET_KNOWN = { 'Newtonsoft.Json': 'Newtonsoft.Json', 'MySql.Data': 'MySql.Data', 'MySqlConnector': 'MySqlConnector', 'Dapper': 'Dapper', 'Microsoft.Data.Sqlite': 'Microsoft.Data.Sqlite',
  'System.Data.SQLite': 'System.Data.SQLite', 'Microsoft.EntityFrameworkCore': 'Microsoft.EntityFrameworkCore', 'Npgsql': 'Npgsql', 'MongoDB.Driver': 'MongoDB.Driver', 'StackExchange.Redis': 'StackExchange.Redis',
  'RestSharp': 'RestSharp', 'HtmlAgilityPack': 'HtmlAgilityPack', 'Serilog': 'Serilog', 'AutoMapper': 'AutoMapper', 'FluentValidation': 'FluentValidation', 'CsvHelper': 'CsvHelper',
  'Spectre.Console': 'Spectre.Console', 'Humanizer': 'Humanizer', 'Polly': 'Polly', 'MediatR': 'MediatR', 'ClosedXML': 'ClosedXML', 'QuestPDF': 'QuestPDF', 'Bogus': 'Bogus', 'BCrypt.Net': 'BCrypt.Net-Next',
  'Microsoft.Data.SqlClient': 'Microsoft.Data.SqlClient', 'System.Data.SqlClient': 'System.Data.SqlClient', 'Microsoft.Extensions.Configuration': 'Microsoft.Extensions.Configuration.Json', 'Xunit': 'xunit', 'NUnit.Framework': 'NUnit' };
/* Scala (scala-cli):  import x  ->  dependency */
const SCALA_KNOWN = { 'os': 'com.lihaoyi::os-lib', 'upickle': 'com.lihaoyi::upickle', 'ujson': 'com.lihaoyi::upickle', 'requests': 'com.lihaoyi::requests', 'cats': 'org.typelevel::cats-core',
  'cats.effect': 'org.typelevel::cats-effect', 'zio': 'dev.zio::zio', 'fansi': 'com.lihaoyi::fansi', 'scalatags': 'com.lihaoyi::scalatags', 'io.circe': 'io.circe::circe-core', 'sttp': 'com.softwaremill.sttp.client4::core' };
/* modules that are built in — never fetch these */
const STD = {
  python: new Set(['os', 'sys', 'math', 're', 'json', 'random', 'time', 'datetime', 'collections', 'itertools', 'functools', 'string', 'io', 'typing', 'decimal', 'fractions', 'statistics', 'heapq', 'bisect', 'sqlite3', 'csv', 'hashlib', 'threading', 'subprocess', 'socket', 'struct', 'copy', 'abc', 'enum', 'queue', 'urllib', 'http', 'argparse', 'pathlib', 'unittest', 'asyncio']),
  node: new Set(['fs', 'path', 'os', 'http', 'https', 'crypto', 'util', 'events', 'stream', 'child_process', 'url', 'querystring', 'assert', 'buffer', 'zlib', 'readline', 'net', 'dns', 'process', 'timers', 'string_decoder'])
};

/* Python: every module the program imports (one line at a time; "import a.b as c, d" and "from x.y import z") */
function pyModules(src) {
  const mods = [], re = /^[ \t]*(?:from[ \t]+([\w.]+)[ \t]+import\b|import[ \t]+([^\r\n#;]+))/gm; let m;
  while ((m = re.exec(String(src || '')))) {
    const names = m[1] ? [m[1]] : m[2].split(',').map((x) => x.trim().split(/\s+as\s+/)[0].trim());
    names.forEach((n) => { if (n && !n.startsWith('.') && /^[A-Za-z_][\w.]*$/.test(n)) mods.push(n); });
  }
  return [...new Set(mods)];
}
/* the pip package for a module: the longest known dotted prefix, else the top-level name */
function pyPackage(mod) {
  const parts = mod.split('.');
  for (let i = parts.length; i > 0; i--) { const k = parts.slice(0, i).join('.'); if (KNOWN.python[k]) return KNOWN.python[k]; }
  return parts[0];
}
const atDeps = (src) => { const out = [], re = /@dep\s+([^\s*/#'"\r\n]+)/g; let m; while ((m = re.exec(String(src || '')))) out.push(m[1]); return out; };

/* ---- read a program and work out which libraries it wants ---- */
const strip = (src) => String(src || '');
function javaCoord(pkg) {
  let best = null;
  for (const k in KNOWN.java) if (pkg.indexOf(k) === 0 && (!best || k.length > best.length)) best = k;
  return best ? KNOWN.java[best] : undefined;
}
/* Java/Kotlin: what the program needs, plus how it must be run (JavaFX, JUnit, Lombok, Spring Boot) */
function javaNeeds(code) {
  const src = strip(code), coords = new Set(), unknown = [];
  let m; const im = /^\s*import\s+(?:static\s+)?([a-zA-Z0-9_.]+)/gm;
  while ((m = im.exec(src))) { const c = javaCoord(m[1]); if (c) coords.add(c); else if (c === undefined && !/^(javafx|org\.junit|org\.springframework\.boot|org\.springframework\.web|org\.springframework\.data)/.test(m[1])) unknown.push(m[1]); }
  if (/jdbc:mysql/i.test(src) || /com\.mysql\./.test(src)) coords.add('com.mysql:mysql-connector-j');
  if (/jdbc:mariadb/i.test(src)) coords.add('org.mariadb.jdbc:mariadb-java-client');
  if (/jdbc:postgresql/i.test(src)) coords.add('org.postgresql:postgresql');
  if (/jdbc:sqlite/i.test(src)) coords.add('org.xerial:sqlite-jdbc');
  if (/jdbc:h2/i.test(src)) coords.add('com.h2database:h2');
  if (coords.has('io.jsonwebtoken:jjwt-api')) { coords.add('io.jsonwebtoken:jjwt-impl'); coords.add('io.jsonwebtoken:jjwt-jackson'); }
  if (coords.has('io.javalin:javalin') || coords.has('io.ktor:ktor-server-netty-jvm')) coords.add('org.slf4j:slf4j-simple');
  if (coords.has('io.ktor:ktor-server-netty-jvm')) coords.add('io.ktor:ktor-server-core-jvm');
  const boot = /org\.springframework\.boot/.test(src);
  if (boot) {
    const reactive = /org\.springframework\.web\.reactive|reactor\.core|Mono<|Flux</.test(src);
    const web = /@(Rest)?Controller|@(Get|Post|Put|Delete|Request)Mapping|org\.springframework\.web/.test(src);
    coords.add(reactive ? 'org.springframework.boot:spring-boot-starter-webflux' : web ? 'org.springframework.boot:spring-boot-starter-web' : 'org.springframework.boot:spring-boot-starter');
    if (reactive) coords.delete('io.projectreactor:reactor-core');
    if (/org\.springframework\.data\.jpa|jakarta\.persistence/.test(src)) coords.add('org.springframework.boot:spring-boot-starter-data-jpa');
    if (/org\.springframework\.jdbc/.test(src)) coords.add('org.springframework.boot:spring-boot-starter-jdbc');
    if (/org\.springframework\.boot\.autoconfigure\.security|org\.springframework\.security/.test(src)) coords.add('org.springframework.boot:spring-boot-starter-security');
    ['org.springframework:spring-context', 'org.springframework:spring-jdbc'].forEach((c) => coords.delete(c));
  }
  const junit5 = /org\.junit\.jupiter/.test(src), junit4 = /import\s+(static\s+)?org\.junit\.(Test|Assert|Before|After|\*)/.test(src);
  if (junit4) coords.add('junit:junit');
  const test = (junit5 || junit4) && /@Test\b/.test(src) && !/static\s+void\s+main\s*\(/.test(src);
  const fx = [];
  if (/import\s+javafx\./.test(src)) {
    fx.push('controls');
    if (/javafx\.fxml/.test(src)) fx.push('fxml');
    if (/javafx\.scene\.media/.test(src)) fx.push('media');
    if (/javafx\.scene\.web/.test(src)) fx.push('web');
    if (/javafx\.embed\.swing/.test(src)) fx.push('swing');
  }
  atDeps(src).filter((d) => /^[\w.-]+:[\w.-]+(:[\w.+-]+)?$/.test(d)).forEach((d) => coords.add(d));
  return { coords: [...coords], test, junit5, junit4, fx, lombok: coords.has('org.projectlombok:lombok'), springBoot: boot, unknown: [...new Set(unknown)] };
}
/* C/C++: packages and compiler flags from the #include lines (and  // @dep <msys package>  lines) */
function cNeeds(code) {
  const src = strip(code), pk = new Set(), pc = new Set(), flags = new Set(), headers = [];
  let m; const re = /^\s*#\s*include\s*[<"]([^>"]+)[>"]/gm;
  while ((m = re.exec(src))) headers.push(m[1]);
  for (const h of headers) {
    for (const [rx, pkg, mods, extra] of C_LIBS) {
      if (!rx.test(h)) continue;
      if (pkg) pk.add(pkg);
      (mods || []).forEach((x) => pc.add(x)); (extra || []).forEach((x) => flags.add(x));
      if (pkg === 'boost') { const sub = (/^boost\/([a-z_0-9]+)/.exec(h) || [])[1]; if (sub && BOOST_LIBS[sub]) flags.add('-l' + BOOST_LIBS[sub] + '-mt'); if (sub === 'asio') { flags.add('-lws2_32'); flags.add('-lmswsock'); } }
      if (pkg === 'qt6-base') { ['Qt6Widgets', 'Qt6Gui', 'Qt6Core'].forEach((x) => pc.add(x)); if (/QtNetwork|QTcp|QNetwork/.test(h)) pc.add('Qt6Network'); if (/QtSql|QSql/.test(h)) pc.add('Qt6Sql'); }
      break;
    }
  }
  if (pc.has('gtest') && !/\bint\s+main\s*\(/.test(src)) pc.add('gtest_main');
  atDeps(src).forEach((d) => pk.add(d.replace(/^mingw-w64-ucrt-x86_64-/, '')));
  return { packages: [...pk], pc: [...pc], flags: [...flags], headers };
}
function phpNeeds(code) {
  const src = strip(code), out = new Set(); let m; const re = /^\s*use\s+\\?([A-Za-z_][\w\\]*)/gm;
  while ((m = re.exec(src))) { const ns = m[1]; let best = null; for (const k in PHP_KNOWN) if ((ns === k || ns.startsWith(k + '\\')) && (!best || k.length > best.length)) best = k; if (best) out.add(PHP_KNOWN[best]); }
  if (/new\s+\\?PHPMailer\b/.test(src)) out.add('phpmailer/phpmailer');
  atDeps(src).filter((d) => /^[\w.-]+\/[\w.-]+(:.+)?$/.test(d)).forEach((d) => out.add(d));
  return [...out];
}
function rubyNeeds(code) {
  const src = strip(code), out = []; let m; const re = /^\s*require\s*\(?\s*['"]([^'"]+)['"]/gm;
  while ((m = re.exec(src))) out.push(m[1]);
  if (/\bRSpec\.describe\b/.test(src)) out.push('rspec');
  return { requires: [...new Set(out)], explicit: atDeps(src) };
}
const rubyGem = (req) => RUBY_KNOWN[req] || req.split('/')[0];
function rNeeds(code) {
  const src = strip(code), out = new Set(); let m;
  const re1 = /\b(?:library|require|requireNamespace)\s*\(\s*['"]?([A-Za-z][\w.]*)['"]?/g; while ((m = re1.exec(src))) out.add(m[1]);
  const re2 = /\b([A-Za-z][\w.]*)::/g; while ((m = re2.exec(src))) out.add(m[1]);
  atDeps(src).forEach((d) => out.add(d));
  return [...out].filter((x) => !/^(base|stats|utils|graphics|grDevices|methods|datasets|tools|parallel|grid|splines|stats4|tcltk|compiler)$/.test(x));
}
function rustNeeds(code) {
  const src = strip(code), out = {}; let m;
  const re = /^\s*(?:pub\s+)?(?:use|extern\s+crate)\s+([a-zA-Z_][\w]*)/gm;
  while ((m = re.exec(src))) { const c = m[1]; if (/^(std|core|alloc|crate|self|super|proc_macro)$/.test(c)) continue; out[c] = RUST_KNOWN[c] || '"*"'; }
  const re2 = /\b([a-z_][a-z0-9_]*)::[a-zA-Z_]/g;
  while ((m = re2.exec(src))) { const c = m[1]; if (RUST_KNOWN[c] && !out[c]) out[c] = RUST_KNOWN[c]; }
  if (/#\[derive\([^)]*(Serialize|Deserialize)/.test(src)) out.serde = RUST_KNOWN.serde;
  if (/#\[tokio::main\]/.test(src)) out.tokio = RUST_KNOWN.tokio;
  atDeps(src).forEach((d) => { const [n, v] = d.split('@'); out[n.replace(/-/g, '_')] = v ? JSON.stringify(v) : '"*"'; });
  return out;                                    // crate name (as written in code) -> Cargo.toml value
}
function nugetNeeds(code) {
  const src = strip(code), out = new Set(); let m; const re = /^\s*using\s+(?:static\s+)?([A-Za-z_][\w.]*)\s*;/gm;
  while ((m = re.exec(src))) { const ns = m[1]; let best = null; for (const k in NUGET_KNOWN) if ((ns === k || ns.startsWith(k + '.')) && (!best || k.length > best.length)) best = k; if (best) out.add(NUGET_KNOWN[best]); }
  atDeps(src).forEach((d) => out.add(d));
  // Entity Framework Core needs the provider for the database the code uses
  if (out.has('Microsoft.EntityFrameworkCore')) { if (/UseMySql\b/.test(src)) out.add('Pomelo.EntityFrameworkCore.MySql'); if (/UseSqlite\b/.test(src)) out.add('Microsoft.EntityFrameworkCore.Sqlite'); if (/UseSqlServer\b/.test(src)) out.add('Microsoft.EntityFrameworkCore.SqlServer'); if (/UseNpgsql\b/.test(src)) out.add('Npgsql.EntityFrameworkCore.PostgreSQL'); if (/UseInMemoryDatabase\b/.test(src)) out.add('Microsoft.EntityFrameworkCore.InMemory'); }
  const winforms = /using\s+System\.Windows\.Forms\s*;/.test(src), wpf = /using\s+System\.Windows(\.Controls)?\s*;/.test(src) && !winforms;
  const web = /WebApplication\.Create(Builder|SlimBuilder)?\s*\(|Microsoft\.AspNetCore/.test(src);   // ASP.NET Core
  return { packages: [...out], winforms, wpf, web };
}
function dartNeeds(code) {
  const src = strip(code), out = new Set(); let m; const re = /^\s*import\s+['"]package:([a-z_][a-z0-9_]*)\//gm;
  while ((m = re.exec(src))) out.add(m[1]);
  atDeps(src).forEach((d) => out.add(d));
  return [...out];
}
function scalaNeeds(code) {
  const src = strip(code), out = new Set(); let m; const re = /^\s*import\s+([a-zA-Z_][\w.]*)/gm;
  while ((m = re.exec(src))) {
    const ns = m[1]; let best = null;
    for (const k in SCALA_KNOWN) if ((ns === k || ns.startsWith(k + '.')) && (!best || k.length > best.length)) best = k;
    if (best) out.add(SCALA_KNOWN[best] + ':latest.release');
    else { const c = javaCoord(ns); if (c) out.add(c + ':latest.release'); }
  }
  if (/jdbc:mysql/i.test(src)) out.add('com.mysql:mysql-connector-j:latest.release');
  atDeps(src).forEach((d) => out.add(d.split(':').length >= 3 ? d : d + ':latest.release'));
  return [...out];
}
function detect(lang, code) {
  const out = new Set();
  const src = strip(code);
  let m;
  if (lang === 'java' || lang === 'kotlin') javaNeeds(src).coords.forEach((c) => out.add(c));
  else if (lang === 'python') { atDeps(src).forEach((d) => out.add(d)); pyModules(src).forEach((mod) => { if (!STD.python.has(mod.split('.')[0])) out.add(pyPackage(mod)); }); }
  else if (lang === 'node' || lang === 'javascript' || lang === 'typescript') {
    atDeps(src).forEach((d) => out.add(d));
    const im = /(?:require\(\s*['"]([^'"]+)['"]\s*\)|import\s*\(\s*['"]([^'"]+)['"]\s*\)|^\s*import[^'"\n]*?from\s*['"]([^'"]+)['"]|^\s*import\s*['"]([^'"]+)['"]|^\s*export[^'"\n]*?from\s*['"]([^'"]+)['"])/gm;
    while ((m = im.exec(src))) {
      const name = m[1] || m[2] || m[3] || m[4] || m[5]; if (!name || name.startsWith('.') || name.startsWith('/') || name.startsWith('node:') || /^https?:/.test(name)) continue;
      const top = name.startsWith('@') ? name.split('/').slice(0, 2).join('/') : name.split('/')[0];
      if (STD.node.has(top)) continue;
      out.add(KNOWN.node[top] || top);
    }
  } else if (lang === 'c' || lang === 'cpp') cNeeds(src).packages.forEach((p) => out.add(p));
  else if (lang === 'php') phpNeeds(src).forEach((p) => out.add(p));
  else if (lang === 'ruby') { const r = rubyNeeds(src); r.explicit.forEach((p) => out.add(p)); r.requires.forEach((q) => out.add(rubyGem(q))); }
  else if (lang === 'r') rNeeds(src).forEach((p) => out.add(p));
  else if (lang === 'rust') Object.keys(rustNeeds(src)).forEach((p) => out.add(p));
  else if (lang === 'csharp') nugetNeeds(src).packages.forEach((p) => out.add(p));
  else if (lang === 'dart') dartNeeds(src).forEach((p) => out.add(p));
  else if (lang === 'scala') scalaNeeds(src).forEach((p) => out.add(p));
  else atDeps(src).forEach((d) => out.add(d));
  return [...out];
}

function create(opts) {
  const root = path.join(opts.dir, 'libs');
  const log = opts.log || (() => { });
  const fetchFn = opts.fetch || ((u) => fetch(u, { redirect: 'follow' }));
  const tc = opts.toolchain;                 // toolchain.create(): gives tool() and env()
  const MAVEN = opts.maven || MAVEN_CENTRAL;
  fs.mkdirSync(root, { recursive: true });
  const installed = {};                       // "lang:name" -> true, this session (plus on-disk check)
  const dir = (lang) => { const d = path.join(root, lang); fs.mkdirSync(d, { recursive: true }); return d; };

  /* ---------------- Maven: fetch a jar and everything it needs ---------------- */
  async function mavenMeta(g, a) {
    const base = `${MAVEN}/${g.replace(/\./g, '/')}/${a}`;
    const r = await fetchFn(base + '/maven-metadata.xml');
    if (!r || !r.ok) throw new Error('could not find ' + g + ':' + a + ' on Maven Central');
    const xml = await r.text();
    const rel = /<release>([^<]+)<\/release>/.exec(xml) || /<latest>([^<]+)<\/latest>/.exec(xml);
    const vers = [...xml.matchAll(/<version>([^<]+)<\/version>/g)].map((m) => m[1]).filter((v) => !/-(alpha|beta|rc|snapshot|m\d)/i.test(v));
    return rel ? rel[1] : vers[vers.length - 1];
  }
  async function getText(url) { const r = await fetchFn(url); return r && r.ok ? r.text() : null; }
  async function getFile(url, dest) {
    const r = await fetchFn(url); if (!r || !r.ok) throw new Error('download failed for ' + path.basename(url));
    const tmp = dest + '.part', out = fs.createWriteStream(tmp);
    for await (const c of r.body) { if (!out.write(Buffer.from(c))) await new Promise((x) => out.once('drain', x)); }
    await new Promise((x) => out.end(x)); fs.renameSync(tmp, dest); return dest;
  }
  /* --- a small, careful Maven resolver: properties, parent POMs, dependencyManagement and BOM imports --- */
  const tag = (xml, t) => { const x = new RegExp('<' + t + '>\\s*([^<]*?)\\s*</' + t + '>').exec(xml || ''); return x ? x[1] : ''; };
  const strip = (xml) => String(xml || '').replace(/<!--[\s\S]*?-->/g, '');
  const pomCache = {};
  async function loadPom(g, a, v) {
    const k = g + ':' + a + ':' + v; if (k in pomCache) return pomCache[k];
    const xml = await getText(`${MAVEN}/${g.replace(/\./g, '/')}/${a}/${v}/${a}-${v}.pom`).catch(() => null);
    if (!xml) return (pomCache[k] = null);
    const x = strip(xml);
    const parentBlock = /<parent>([\s\S]*?)<\/parent>/.exec(x);
    const parent = parentBlock ? { g: tag(parentBlock[1], 'groupId'), a: tag(parentBlock[1], 'artifactId'), v: tag(parentBlock[1], 'version') } : null;
    const head = x.replace(/<parent>[\s\S]*?<\/parent>/, '').replace(/<dependencies>[\s\S]*<\/dependencies>/, '').replace(/<build>[\s\S]*<\/build>/, '').replace(/<profiles>[\s\S]*<\/profiles>/, '');
    const own = {};
    const pb = /<properties>([\s\S]*?)<\/properties>/.exec(x);
    if (pb) [...pb[1].matchAll(/<([\w.-]+)>\s*([^<]*?)\s*<\/\1>/g)].forEach((m) => (own[m[1]] = m[2]));
    // inherit from parent first, so this POM's own values win
    const par = parent ? await loadPom(parent.g, parent.a, parent.v) : null;
    const props = Object.assign({}, par ? par.props : {}, own);
    const gid = tag(head, 'groupId') || (parent && parent.g) || g, ver = tag(head, 'version') || (parent && parent.v) || v;
    Object.assign(props, { 'project.groupId': gid, 'project.version': ver, 'project.artifactId': a, version: ver, 'pom.version': ver, 'project.parent.version': parent ? parent.v : ver, 'project.parent.groupId': parent ? parent.g : gid });
    const sub = (s) => { let t = String(s || ''); for (let i = 0; i < 5 && /\$\{/.test(t); i++) t = t.replace(/\$\{([\w.-]+)\}/g, (m0, k2) => (k2 in props ? props[k2] : m0)); return /\$\{/.test(t) ? '' : t; };
    const depsOf = (block) => [...String(block || '').matchAll(/<dependency>([\s\S]*?)<\/dependency>/g)].map((m) => {
      const d = m[1];
      const excl = [...d.matchAll(/<exclusion>([\s\S]*?)<\/exclusion>/g)].map((e) => tag(e[1], 'groupId') + ':' + tag(e[1], 'artifactId'));
      return { g: sub(tag(d, 'groupId')), a: sub(tag(d, 'artifactId')), v: sub(tag(d, 'version')), scope: tag(d, 'scope') || '', type: tag(d, 'type') || 'jar', classifier: tag(d, 'classifier'), optional: /<optional>\s*true/.test(d), excl };
    });
    // dependencyManagement (managed versions), including <scope>import</scope> BOMs
    const managed = Object.assign({}, par ? par.managed : {});
    const dmb = /<dependencyManagement>([\s\S]*?)<\/dependencyManagement>/.exec(x);
    if (dmb) {
      for (const d of depsOf(dmb[1])) {
        if (d.scope === 'import' && d.type === 'pom' && d.g && d.a && d.v) { const bom = await loadPom(d.g, d.a, d.v); if (bom) Object.keys(bom.managed).forEach((k2) => { if (!(k2 in managed)) managed[k2] = bom.managed[k2]; }); }
        else if (d.g && d.a && d.v) managed[d.g + ':' + d.a] = d.v;
      }
    }
    const depBlock = /<dependencies>([\s\S]*)<\/dependencies>/.exec(x.replace(/<dependencyManagement>[\s\S]*?<\/dependencyManagement>/g, '').replace(/<build>[\s\S]*<\/build>/, '').replace(/<profiles>[\s\S]*<\/profiles>/, ''));
    const deps = depsOf(depBlock && depBlock[1]).map((d) => Object.assign(d, { v: d.v || managed[d.g + ':' + d.a] || '' }));
    const packaging = tag(head, 'packaging') || 'jar';
    return (pomCache[k] = { props, managed, deps, packaging });
  }
  async function sha1Ok(url, file) {
    const want = await getText(url + '.sha1').catch(() => null);
    if (!want) return true;                                    // no checksum published: accept
    const h = require('crypto').createHash('sha1').update(fs.readFileSync(file)).digest('hex');
    return want.trim().split(/\s+/)[0].toLowerCase() === h;
  }
  /* breadth-first, "nearest wins" like Maven; returns jar paths */
  async function resolveTree(coords, onProgress) {
    const queue = coords.map((c) => { const [g, a, v] = String(c).split(':'); return { g, a, v: v || '', depth: 0, excl: [] }; });
    const chosen = {}, jars = [];
    while (queue.length) {
      const n = queue.shift();
      if (!n.g || !n.a) throw new Error('a Java library is written as groupId:artifactId, e.g. com.mysql:mysql-connector-j');
      const key = n.g + ':' + n.a; if (chosen[key]) continue;
      let v = n.v;
      if (!v || /^[[(]/.test(v)) v = await mavenMeta(n.g, n.a);   // no version, or a version range: newest release
      chosen[key] = v;
      const p = await loadPom(n.g, n.a, v);
      if (!p && n.depth === 0) throw new Error('could not find ' + key + ':' + v + ' on Maven Central');
      if (!p || p.packaging !== 'pom') {
        const jarName = `${n.a}-${v}.jar`, jar = path.join(dir('java'), n.g + '__' + jarName), url = `${MAVEN}/${n.g.replace(/\./g, '/')}/${n.a}/${v}/${jarName}`;
        if (!fs.existsSync(jar)) {
          if (onProgress) onProgress({ label: n.a + ' ' + v, text: 'Getting Java library ' + n.a + ' ' + v + ' …' });
          try { await getFile(url, jar); } catch (e) { if (n.depth === 0) throw new Error('could not download ' + key + ' ' + v); log('[libs] skip ' + key + ': ' + e.message); continue; }
          if (!(await sha1Ok(url, jar))) { fs.unlinkSync(jar); throw new Error('the download of ' + n.a + ' was damaged (checksum mismatch); try again'); }
        }
        jars.push({ jar, key });
      }
      if (p && n.depth < 8) {
        for (const d of p.deps) {
          if (!d.g || !d.a || d.optional || d.classifier || (d.type && d.type !== 'jar')) continue;
          if (d.scope && !/^(compile|runtime)$/.test(d.scope)) continue;
          const dk = d.g + ':' + d.a; if (chosen[dk] || n.excl.indexOf(dk) >= 0 || n.excl.indexOf(d.g + ':*') >= 0) continue;
          queue.push({ g: d.g, a: d.a, v: d.v, depth: n.depth + 1, excl: n.excl.concat(d.excl) });
        }
      }
    }
    return jars;
  }
  /* cache: which jars each requested library needs, so later runs work offline */
  const resFile = () => path.join(dir('java'), 'resolved.json');
  const addFile = () => path.join(dir('java'), 'added.json');
  const readJ = (f, d) => { try { return JSON.parse(fs.readFileSync(f, 'utf8')); } catch (e) { return d; } };
  async function installJava(coords, onProgress) {
    const cache = readJ(resFile(), {});
    const out = [];
    for (const c of coords) {
      const hit = cache[c];
      if (hit && hit.length && hit.every((j) => j && j.file && fs.existsSync(path.join(dir('java'), j.file)))) { hit.forEach((j) => out.push({ jar: path.join(dir('java'), j.file), key: j.key })); continue; }
      const jars = await resolveTree([c], onProgress);
      cache[c] = jars.map((j) => ({ file: path.basename(j.jar), key: j.key }));
      try { fs.writeFileSync(resFile(), JSON.stringify(cache, null, 1)); } catch (e) { }
      jars.forEach((j) => out.push(j));
    }
    // one jar per groupId:artifactId — the first one wins (the library the program asked for comes first)
    const seenA = {}, uniq = [];
    out.forEach((j) => { if (!seenA[j.key]) { seenA[j.key] = 1; uniq.push(j.jar); } });
    return uniq;
  }
  function addedJava() { return readJ(addFile(), []); }
  function allJavaJars() { const d = dir('java'); try { return fs.readdirSync(d).filter((f) => f.endsWith('.jar')).map((f) => path.join(d, f)); } catch (e) { return []; } }

  /* ---------------- pip ---------------- */
  function pipRun(args, onProgress, label) {
    return new Promise((resolve, reject) => {
      const py = tc.tool('python') || tc.tool('python3'); if (!py) return reject(new Error('Python is not ready yet.'));
      if (onProgress) onProgress({ label, text: 'Getting Python library ' + label + ' …' });
      const ch = spawnAny(py, ['-m', 'pip'].concat(args), { windowsHide: true, env: tc.env() });
      let err = '';
      ch.stdout.on('data', () => { }); ch.stderr.on('data', (d) => { err += d; if (err.length > 20000) err = err.slice(-20000); });
      ch.on('error', reject);
      ch.on('close', (c) => (c === 0 ? resolve() : reject(new Error('pip could not install ' + label + ': ' + err.trim().split(/\r?\n/).slice(-2).join(' ')))));
    });
  }
  async function installPython(pkgs, onProgress) {
    const target = dir('python');
    for (const p of pkgs) { if (installed['python:' + p] || pyHas(p)) continue; await pipRun(['install', '--disable-pip-version-check', '--no-input', '--target', target, '--upgrade', p], onProgress, p); installed['python:' + p] = true; }
    return target;
  }
  /* is a pip package already in our folder? (name normalised as pip does: case, - _ .) */
  function pyHas(pkg) {
    const norm = (x) => String(x).toLowerCase().replace(/[-_.]+/g, '_');
    const want = norm(String(pkg).split(/[<>=!~\[ ]/)[0]);
    try { return fs.readdirSync(dir('python')).some((f) => /\.dist-info$/.test(f) && norm(f.replace(/-[^-]+\.dist-info$/, '')) === want); } catch (e) { return false; }
  }
  /* which of these modules cannot be imported yet (asks Python itself, so built-in modules are never fetched) */
  function pyMissing(mods) {
    if (!mods.length) return [];
    const py = tc.tool('python') || tc.tool('python3'); if (!py) return mods;
    const script = 'import sys,json,importlib.util\nmods=json.loads(sys.argv[1]);std=set(getattr(sys,"stdlib_module_names",()))|set(sys.builtin_module_names)\nout=[]\nfor m in mods:\n t=m.split(".")[0]\n if t in std: continue\n try:\n  ok=importlib.util.find_spec(t) is not None\n except Exception:\n  ok=False\n if not ok: out.append(m)\nprint(json.dumps(out))';
    const env = tc.env(); env.PYTHONPATH = [dir('python'), env.PYTHONPATH || ''].filter(Boolean).join(path.delimiter);
    const r = cp.spawnSync(py, ['-c', script, JSON.stringify(mods)], { encoding: 'utf8', env, windowsHide: true, timeout: 30000 });
    try { return JSON.parse(String(r.stdout).trim().split(/\r?\n/).pop()); } catch (e) { return mods; }
  }

  /* ---------------- npm ---------------- */
  function npmRun(args, onProgress, label) {
    return new Promise((resolve, reject) => {
      const npm = tc.tool('npm'); if (!npm) return reject(new Error('Node.js is not ready yet.'));
      if (onProgress) onProgress({ label, text: 'Getting Node library ' + label + ' …' });
      const d = dir('node');
      if (!fs.existsSync(path.join(d, 'package.json'))) fs.writeFileSync(path.join(d, 'package.json'), '{"name":"futureself-code","private":true}');
      const ch = spawnAny(npm, args, { cwd: d, windowsHide: true, env: tc.env() });
      let err = '';
      ch.stdout.on('data', () => { }); ch.stderr.on('data', (dd) => { err += dd; if (err.length > 20000) err = err.slice(-20000); });
      ch.on('error', reject);
      ch.on('close', (c) => (c === 0 ? resolve() : reject(new Error('npm could not install ' + label + ': ' + err.trim().split(/\r?\n/).slice(-2).join(' ')))));
    });
  }
  async function installNode(pkgs, onProgress) {
    const d = dir('node');
    for (const p of pkgs) { if (installed['node:' + p] || nodeHas(p)) continue; await npmRun(['install', '--no-audit', '--no-fund', '--silent', p], onProgress, p); installed['node:' + p] = true; }
    return path.join(d, 'node_modules');
  }
  function nodeHas(spec) {
    const name = spec.startsWith('@') ? spec.split('@').slice(0, 2).join('@') : spec.split('@')[0];
    return fs.existsSync(path.join(dir('node'), 'node_modules', name, 'package.json'));
  }

  /* ---------------- Java extras: JavaFX, JUnit, newest version matching a pattern ---------------- */
  async function mavenVersions(g, a) {
    const r = await fetchFn(`${MAVEN}/${g.replace(/\./g, '/')}/${a}/maven-metadata.xml`);
    if (!r || !r.ok) throw new Error('could not find ' + g + ':' + a + ' on Maven Central');
    const xml = await r.text();
    return [...xml.matchAll(/<version>([^<]+)<\/version>/g)].map((x) => x[1]).filter((v) => !/-(alpha|beta|rc|snapshot|m\d|ea)/i.test(v));
  }
  const vk = (v) => String(v).split(/[.+-]/).map((n) => ('00000' + (parseInt(n, 10) || 0)).slice(-5)).join('.');
  /* JavaFX: the jars for this Windows/Mac/Linux, version 21 (works with Java 21 and newer) */
  async function javafx(mods, onProgress) {
    const cls = WIN ? 'win' : process.platform === 'darwin' ? (process.arch === 'arm64' ? 'mac-aarch64' : 'mac') : 'linux';
    const cacheF = path.join(dir('java'), 'javafx.json'); const cache = readJ(cacheF, {});
    let v = cache.v;
    if (!v) { const vs = (await mavenVersions('org.openjfx', 'javafx-controls')).filter((x) => /^21\.0\.\d+$/.test(x)).sort((a, b) => (vk(a) < vk(b) ? -1 : 1)); v = vs[vs.length - 1] || '21.0.5'; cache.v = v; fs.writeFileSync(cacheF, JSON.stringify(cache)); }
    const need = new Set(['base', 'graphics'].concat(mods)); if (need.has('fxml') || need.has('web') || need.has('swing')) need.add('controls'); if (need.has('web')) need.add('media');
    const jars = [];
    for (const m of need) {
      const a = 'javafx-' + m, f = path.join(dir('java'), 'org.openjfx__' + a + '-' + v + '-' + cls + '.jar');
      if (!fs.existsSync(f)) { if (onProgress) onProgress({ label: a, text: 'Getting JavaFX ' + m + ' ' + v + ' …' }); await getFile(`${MAVEN}/org/openjfx/${a}/${v}/${a}-${v}-${cls}.jar`, f); }
      jars.push(f);
    }
    return { modulePath: jars, modules: [...need].filter((x) => x !== 'base' && x !== 'graphics').map((x) => 'javafx.' + x).concat(['javafx.graphics', 'javafx.base']) };
  }
  /* the JUnit console runner (runs JUnit 5 and, with junit:junit on the classpath, JUnit 4 tests) */
  async function junitRunner(onProgress) { const jars = await installJava(['org.junit.platform:junit-platform-console-standalone'], onProgress); return jars[0]; }
  async function prepareJava(code, onProgress, kotlin) {
    const n = javaNeeds(code);
    const coords = [...new Set(n.coords.concat(addedJava()))];
    const out = { classpath: coords.length ? await installJava(coords, onProgress) : [], test: n.test, springBoot: n.springBoot, warnings: [] };
    if (n.fx.length) Object.assign(out, await javafx(n.fx, onProgress));
    if (n.test) out.junit = await junitRunner(onProgress);
    if (n.lombok) out.processorpath = out.classpath.filter((j) => /lombok/.test(path.basename(j)));
    if (n.unknown.length) out.warnings.push('If Java cannot find ' + n.unknown.slice(0, 3).join(', ') + ', add a line  // @dep groupId:artifactId  (from search.maven.org) to your code.');
    return out;
  }

  /* ---------------- Python extras ---------------- */
  function pyRun(args, label, onProgress) {
    return new Promise((resolve, reject) => {
      const py = tc.tool('python') || tc.tool('python3'); if (!py) return reject(new Error('Python is not ready yet.'));
      if (onProgress) onProgress({ label, text: label + ' …' });
      const env = tc.env(); env.PYTHONPATH = [dir('python'), env.PYTHONPATH || ''].filter(Boolean).join(path.delimiter);
      const ch = spawnAny(py, args, { windowsHide: true, env }); let err = '';
      ch.stdout.on('data', () => { }); ch.stderr.on('data', (d) => { err += d; if (err.length > 20000) err = err.slice(-20000); });
      ch.on('error', reject); ch.on('close', (c) => (c === 0 ? resolve() : reject(new Error(label + ' failed: ' + err.trim().split(/\r?\n/).slice(-2).join(' ')))));
    });
  }
  async function pythonExtras(code, onProgress, warnings) {
    const mods = pyModules(code);
    // Keras 3 needs a backend
    if (mods.some((m) => m.split('.')[0] === 'keras') && !mods.some((m) => /^(tensorflow|torch|jax)$/.test(m.split('.')[0])) && pyMissing(['tensorflow']).length) {
      try { await installPython(['tensorflow'], onProgress); } catch (e) { warnings.push('Keras needs TensorFlow, which could not be installed: ' + e.message); }
    }
    // spaCy language models named in spacy.load("...")
    let m; const re = /spacy\.load\(\s*['"]([a-z]{2}_[\w]+)['"]/g;
    while ((m = re.exec(code))) { const model = m[1]; if (!pyMissing([model]).length) continue; try { await pyRun(['-m', 'spacy', 'download', model, '--target', dir('python')], 'Getting spaCy model ' + model, onProgress); } catch (e) { warnings.push('The spaCy model ' + model + ' could not be downloaded: ' + e.message); } }
    // Playwright needs its browser once
    if (mods.some((x) => x.split('.')[0] === 'playwright')) { const flag = path.join(dir('python'), '.playwright-chromium'); if (!fs.existsSync(flag)) { try { await pyRun(['-m', 'playwright', 'install', 'chromium'], 'Getting the Playwright browser', onProgress); fs.writeFileSync(flag, '1'); } catch (e) { warnings.push(e.message); } } }
  }

  /* ---------------- Node tools (TypeScript runner, Jest) ---------------- */
  async function nodeTool(pkg, rel, onProgress) {
    if (!nodeHas(pkg)) await installNode([pkg], onProgress);
    return path.join(dir('node'), 'node_modules', pkg, rel);
  }

  /* ---------------- C / C++ (MSYS2 on Windows; pkg-config on the PC elsewhere) ---------------- */
  async function prepareC(code, onProgress) {
    const n = cNeeds(code), warnings = [], flags = n.flags.slice();
    if (WIN && tc.msys && n.packages.length) {
      try { await tc.msys.install(n.packages, (p) => onProgress && onProgress(Object.assign({ phase: 'libs' }, p))); }
      catch (e) { throw new Error('C/C++ library could not be installed: ' + e.message); }
      // a package named with @dep (not in the table) brings all of its pkg-config modules
      n.packages.forEach((p) => { if (!C_LIBS.some((row) => row[1] === p)) tc.msys.pcModules(p).forEach((x) => n.pc.push(x)); });
    }
    const pcs = [...new Set(n.pc)];
    if (pcs.length) {
      const pkgc = tc.tool('pkg-config') || tc.tool('pkgconf');
      if (pkgc) {
        const env = tc.env(); if (WIN && tc.msys) env.PKG_CONFIG_PATH = path.join(tc.msys.root, 'ucrt64', 'lib', 'pkgconfig');
        const ok = pcs.filter((x) => cp.spawnSync(pkgc, ['--exists', x], { env, windowsHide: true }).status === 0);
        if (ok.length) { const r = cp.spawnSync(pkgc, ['--cflags', '--libs'].concat(ok), { env, encoding: 'utf8', windowsHide: true }); if (r.status === 0) String(r.stdout).trim().split(/\s+/).filter(Boolean).forEach((f) => flags.push(f)); }
        pcs.filter((x) => ok.indexOf(x) < 0).forEach((x) => log('[libs] pkg-config has no ' + x));
      } else if (pcs.length) warnings.push('pkg-config is not available, so library flags were guessed.');
    }
    return { cflags: [...new Set(flags)], warnings, packages: n.packages };
  }

  /* ---------------- PHP (Composer) ---------------- */
  async function preparePhp(code, onProgress) {
    const want = phpNeeds(code), d = dir('php'), auto = path.join(d, 'vendor', 'autoload.php');
    if (!fs.existsSync(path.join(d, 'composer.json'))) fs.writeFileSync(path.join(d, 'composer.json'), '{ "require": {} }\n');
    const req = (readJ(path.join(d, 'composer.json'), {}).require) || {};
    const todo = want.filter((p) => !req[p.split(':')[0]]);
    if (todo.length) {
      const php = tc.tool('php'), composer = tc.tool('composer');
      if (!php) throw new Error('PHP is not ready yet.');
      const phar = composer && /\.bat$/i.test(composer) ? path.join(path.dirname(composer), 'composer.phar') : null;
      for (const p of todo) {
        if (onProgress) onProgress({ label: p, text: 'Getting PHP library ' + p + ' …' });
        await new Promise((resolve, reject) => {
          const cmd = phar ? php : (composer || php), args = (phar ? [phar] : []).concat(['require', p, '--no-interaction', '--no-progress', '--working-dir', d]);
          const ch = spawnAny(cmd, args, { windowsHide: true, env: tc.env(), cwd: d }); let err = '';
          ch.stdout.on('data', () => { }); ch.stderr.on('data', (x) => { err += x; if (err.length > 20000) err = err.slice(-20000); });
          ch.on('error', reject); ch.on('close', (c) => (c === 0 ? resolve() : reject(new Error('Composer could not install ' + p + ': ' + err.trim().split(/\r?\n/).filter((l) => !/^\s*$/.test(l)).slice(-2).join(' ')))));
        });
      }
    }
    return { autoload: fs.existsSync(auto) ? auto : null };
  }

  /* ---------------- Ruby (gems) ---------------- */
  function gemEnv() { const e = tc.env(); const g = dir('ruby'); e.GEM_PATH = [g, e.GEM_PATH || ''].filter(Boolean).join(path.delimiter); e.GEM_HOME = g; const k = Object.keys(e).find((x) => x.toUpperCase() === 'PATH') || 'PATH'; e[k] = path.join(g, 'bin') + path.delimiter + e[k]; return e; }
  async function prepareRuby(code, onProgress) {
    const n = rubyNeeds(code), ruby = tc.tool('ruby'), gem = tc.tool('gem'); const warnings = [];
    if (!ruby || !gem) throw new Error('Ruby is not ready yet.');
    const reqs = n.requires.filter((q) => !/^\./.test(q));
    let missing = [];
    if (reqs.length) {
      const probe = 'r=ARGV.select{|x| begin; require x; false; rescue LoadError; true; rescue Exception; false; end}; puts r.join("\\n")';
      const r = cp.spawnSync(ruby, ['-e', probe].concat(reqs), { encoding: 'utf8', env: gemEnv(), windowsHide: true, timeout: 60000 });
      missing = String(r.stdout || '').split(/\r?\n/).filter(Boolean);
    }
    const gems = [...new Set(n.explicit.concat(missing.map(rubyGem)))];
    for (const g of gems) {
      if (onProgress) onProgress({ label: g, text: 'Getting Ruby gem ' + g + ' …' });
      try { await new Promise((resolve, reject) => { const ch = spawnAny(gem, ['install', g, '--no-document', '--install-dir', dir('ruby')], { windowsHide: true, env: gemEnv() }); let err = ''; ch.stdout.on('data', () => { }); ch.stderr.on('data', (x) => { err += x; }); ch.on('error', reject); ch.on('close', (c) => (c === 0 ? resolve() : reject(new Error(err.trim().split(/\r?\n/).slice(-2).join(' '))))); }); }
      catch (e) { if (n.explicit.indexOf(g) >= 0) throw new Error('gem ' + g + ': ' + e.message); warnings.push('Ruby could not find a gem for "require \'' + g + '\'". If its gem name is different, add a line  # @dep <gem-name>  to your code.'); }
    }
    return { env: gemEnv(), warnings };
  }

  /* ---------------- R (CRAN) ---------------- */
  async function prepareR(code, onProgress) {
    const pk = rNeeds(code), rs = tc.tool('Rscript'), lib = dir('r'); const warnings = [];
    if (!rs) throw new Error('R is not ready yet.');
    const env = tc.env(); env.R_LIBS_USER = lib;
    if (pk.length) {
      const probe = `x <- commandArgs(TRUE); cat(x[!sapply(x, requireNamespace, quietly=TRUE)], sep="\\n")`;
      const r = cp.spawnSync(rs, ['-e', probe].concat(pk), { encoding: 'utf8', env, windowsHide: true, timeout: 120000 });
      const missing = String(r.stdout || '').split(/\r?\n/).filter(Boolean);
      if (missing.length) {
        if (onProgress) onProgress({ label: 'R', text: 'Getting R packages ' + missing.join(', ') + ' …' });
        const inst = `install.packages(commandArgs(TRUE), lib=Sys.getenv("R_LIBS_USER"), repos="https://cloud.r-project.org", quiet=TRUE)`;
        const r2 = cp.spawnSync(rs, ['-e', inst].concat(missing), { encoding: 'utf8', env, windowsHide: true, timeout: 900000 });
        if (r2.status !== 0) warnings.push('Some R packages could not be installed: ' + missing.join(', '));
      }
    }
    return { env, warnings };
  }

  /* resolve everything a program needs; returns extras to pass to the runner */
  async function prepare(lang, code, onProgress) {
    if (lang === 'java' || lang === 'kotlin') return prepareJava(code, onProgress, lang === 'kotlin');
    if (lang === 'c' || lang === 'cpp') return prepareC(code, onProgress);
    if (lang === 'php') return preparePhp(code, onProgress);
    if (lang === 'ruby') return prepareRuby(code, onProgress);
    if (lang === 'r') return prepareR(code, onProgress);
    const want = detect(lang, code);
    const warnings = [];
    if (lang === 'python') {
      const explicit = atDeps(code);
      for (const p of explicit) await installPython([p], onProgress);            // the student named it: a failure is a real error
      const missing = pyMissing(pyModules(code));
      for (const mod of missing) {
        const pkg = pyPackage(mod);
        if (explicit.indexOf(pkg) >= 0) continue;
        try { await installPython([pkg], onProgress); } catch (e) { warnings.push('Python could not find the library for "import ' + mod + '". If its pip name is different, add a line  # @dep <pip-name>  to your code.'); log('[libs] ' + e.message); }
      }
      await pythonExtras(code, onProgress, warnings);
      return { pythonpath: dir('python'), warnings };
    }
    if (lang === 'node' || lang === 'javascript' || lang === 'typescript') {
      const builtin = new Set(require('module').builtinModules || []);
      const explicit = atDeps(code);
      for (const p of explicit) await installNode([p], onProgress);
      for (const p of want) {
        if (explicit.indexOf(p) >= 0 || builtin.has(p) || nodeHas(p)) continue;
        try { await installNode([p], onProgress); } catch (e) { warnings.push('npm could not find a package called "' + p + '". Check the name, or add a line  // @dep <npm-name>  to your code.'); log('[libs] ' + e.message); }
      }
      return { nodepath: path.join(dir('node'), 'node_modules'), nodeRoot: dir('node'), warnings };
    }
    return {};
  }
  /* add a library by hand (from the Libraries panel) */
  async function add(lang, name, onProgress) {
    name = String(name || '').trim(); if (!name) throw new Error('Type a library name first.');
    if (lang === 'java') {
      if (!/^[\w.-]+:[\w.-]+(:[\w.+-]+)?$/.test(name)) throw new Error('Write a Java library as groupId:artifactId, for example com.mysql:mysql-connector-j');
      await installJava([name], onProgress);
      const a = addedJava(); if (a.indexOf(name) < 0) { a.push(name); fs.writeFileSync(addFile(), JSON.stringify(a)); }
      return allJavaJars();
    }
    if (lang === 'python') { await installPython([name], onProgress); return dir('python'); }
    if (lang === 'node') { await installNode([name], onProgress); return path.join(dir('node'), 'node_modules'); }
    if (lang === 'c') { if (!tc.msys) throw new Error('C/C++ libraries are installed through MSYS2 on Windows.'); await tc.msys.install([name], onProgress); return tc.msys.list(); }
    if (lang === 'php') { await preparePhp('// @dep ' + name, onProgress); return true; }
    if (lang === 'ruby') { await prepareRuby('# @dep ' + name, onProgress); return true; }
    if (lang === 'r') { await prepareR('library(' + name + ')', onProgress); return true; }
    throw new Error('Libraries for this language are added from your code (see the hint in the editor).');
  }
  function list(lang) {
    try {
      if (lang === 'java') return allJavaJars().map((j) => path.basename(j).replace(/^[\w.-]+__/, ''));
      if (lang === 'python') return fs.readdirSync(dir('python')).filter((f) => !/\.dist-info$|^__|^\.|\.(py[cod])$/.test(f) && fs.statSync(path.join(dir('python'), f)).isDirectory());
      if (lang === 'node') { const nm = path.join(dir('node'), 'node_modules'); return fs.existsSync(nm) ? fs.readdirSync(nm).filter((f) => f[0] !== '.') : []; }
      if (lang === 'c') return tc.msys ? tc.msys.list() : [];
      if (lang === 'php') return Object.keys((readJ(path.join(dir('php'), 'composer.json'), {}).require) || {});
      if (lang === 'ruby') { const g = path.join(dir('ruby'), 'gems'); return fs.existsSync(g) ? fs.readdirSync(g) : []; }
      if (lang === 'r') return fs.readdirSync(dir('r')).filter((f) => !/^\./.test(f));
    } catch (e) { }
    return [];
  }
  return { detect, prepare, add, list, dir, root, nodeTool, installNode, installPython, pyMissing, junitRunner, installJava };
}
module.exports = { create, detect, pyModules, pyPackage, javaNeeds, cNeeds, phpNeeds, rubyNeeds, rubyGem, rNeeds, rustNeeds, nugetNeeds, dartNeeds, scalaNeeds, KNOWN, C_LIBS };
