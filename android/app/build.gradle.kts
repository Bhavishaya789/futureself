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
        versionCode = 1160
        versionName = "1.16.0"
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
    }

    buildTypes {
        debug {
            signingConfig = signingConfigs.getByName("fs")
        }
        release {
            isMinifyEnabled = false
            signingConfig = signingConfigs.getByName("fs")
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
