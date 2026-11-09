plugins {
    id("com.android.application")
    id("org.jetbrains.kotlin.android")
}

android {
    namespace = "app.futureself.mobile"
    compileSdk = 34

    defaultConfig {
        applicationId = "app.futureself.mobile"
        minSdk = 26
        targetSdk = 34
        versionCode = 1370
        versionName = "1.37.0"
    }

    // One fixed signing key, so every new APK can be installed over the old one (in-app updates need this).
    signingConfigs {
        create("fs") {
            storeFile = file("futureself-signing.p12")
            storeType = "pkcs12"
            storePassword = "futureself"
            keyAlias = "futureself"
            keyPassword = "futureself"
        }
        // Play Store upload key: only used when the Play workflow supplies it (never stored in the repo)
        if (System.getenv("PLAY_KEYSTORE_FILE") != null) {
            create("play") {
                storeFile = file(System.getenv("PLAY_KEYSTORE_FILE"))
                storePassword = System.getenv("PLAY_KEYSTORE_PASSWORD")
                keyAlias = System.getenv("PLAY_KEY_ALIAS")
                keyPassword = System.getenv("PLAY_KEY_PASSWORD")
            }
        }
    }

    buildTypes {
        debug {
            signingConfig = signingConfigs.getByName("fs")
        }
        release {
            isMinifyEnabled = false
            signingConfig = if (System.getenv("PLAY_KEYSTORE_FILE") != null) signingConfigs.getByName("play") else signingConfigs.getByName("fs")
        }
    }
    compileOptions {
        sourceCompatibility = JavaVersion.VERSION_17
        targetCompatibility = JavaVersion.VERSION_17
    }
    kotlinOptions {
        jvmTarget = "17"
    }
    // the web layer is built by `node mobile/build.js` into src/main/assets/www
    androidResources {
        noCompress += listOf("json")
    }
}

dependencies {
    implementation("androidx.core:core-ktx:1.13.1")
    implementation("androidx.appcompat:appcompat:1.7.0")
    implementation("androidx.webkit:webkit:1.11.0")
}
