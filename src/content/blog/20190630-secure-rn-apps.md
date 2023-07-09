---
title: "Secure your React Native Apps before production!"
subtitle: "Give security a chance ✌🏼"
location: "Madrid"
date: '2019-06-30'
readingMins: 7
categories:
  - Dev
tags:
  - React Native
  - Security
  - API Keys
  - Obfuscation
  - iOS
  - Android
---

We all know that the weeks before launching an app into production are stressful enough, but do not forget about the vulnerabilities while you finish all the features for the MVP product.

![stessed monkey](https://media.giphy.com/media/T8Dhl1KPyzRqU/giphy.gif)

In this post I'll talk about three common vulnerabilities when it comes to React Native Apps. Code Obfuscation, disabling logs in production and what happens with the API keys of our app, how can we store them safety?
## Code Obfuscation 🉐 ️

When deploying your React Native app all the java code is compiled into a DEX file. This file is readable unless you obfuscate your code. Fortunately this can be done quite easily adding a few parameters to our app gradle file!

First things first, we need to activate the obfuscation from the app gradle file of your app. So navigate to **[app_name]/android/app/build.gradle** and inside the **_buildTypes_** section add the following lines:

```gradle
android {
    // ... other config
    buildTypes {
        release {
            debuggable false
            shrinkResources true
            zipAlignEnabled true
            minifyEnabled true
            useProguard true
            setProguardFiles([getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'])
        }
    }
    // ... other config
}
```

With the lines **_minifyEnabled_** and **_useProguard_**, we will activate the minification and obfuscation of the code, but we need to indicate the location of the proguard configuration file so that's why we have added the **_setProguardFiles_** directive.

Then we'll need to setup our proguard configuration (`proguard-rules.pro`) file, in this file we're going to add al the exceptions and rules that proguard will use when obfuscating our code.

```proguard
# Copyright (c) Facebook, Inc. and its affiliates.
#
# This source code is licensed under the MIT license found in the
# LICENSE file in the root directory of this source tree.

# Add project specific ProGuard rules here.
# By default, the flags in this file are appended to flags specified
# in /usr/local/Cellar/android-sdk/24.3.3/tools/proguard/proguard-android.txt
# You can edit the include path and order by changing the proguardFiles
# directive in build.gradle.
#
# For more details, see
#   https://developer.android.com/guide/developing/tools/proguard.html

# Add any project specific keep options here:

# Disabling obfuscation is useful if you collect stack traces from production crashes
# (unless you are using a system that supports de-obfuscate the stack traces).
# -dontobfuscate

# React Native

# Keep our interfaces so they can be used by other ProGuard rules.
# See https://sourceforge.net/p/proguard/bugs/466/
-keep,allowobfuscation @interface com.facebook.proguard.annotations.DoNotStrip
-keep,allowobfuscation @interface com.facebook.proguard.annotations.KeepGettersAndSetters
-keep,allowobfuscation @interface com.facebook.common.internal.DoNotStrip

# Do not strip any method/class that is annotated with @DoNotStrip
-keep @com.facebook.proguard.annotations.DoNotStrip class *
-keep @com.facebook.common.internal.DoNotStrip class *
-keepclassmembers class * {
    @com.facebook.proguard.annotations.DoNotStrip *;
    @com.facebook.common.internal.DoNotStrip *;
}

-keepclassmembers @com.facebook.proguard.annotations.KeepGettersAndSetters class * {
  void set*(***);
  *** get*();
}

-keep class * extends com.facebook.react.bridge.JavaScriptModule { *; }
-keep class * extends com.facebook.react.bridge.NativeModule { *; }
-keepclassmembers,includedescriptorclasses class * { native <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactProp <methods>; }
-keepclassmembers class *  { @com.facebook.react.uimanager.annotations.ReactPropGroup <methods>; }

-dontwarn com.facebook.react.**
-keep,includedescriptorclasses class com.facebook.react.bridge.** { *; }

# okhttp

-keepattributes Signature
-keepattributes *Annotation*
-keep class okhttp3.** { *; }
-keep interface okhttp3.** { *; }
-dontwarn okhttp3.**

# okio

-keep class sun.misc.Unsafe { *; }
-dontwarn java.nio.file.*
-dontwarn org.codehaus.mojo.animal_sniffer.IgnoreJRERequirement
-dontwarn okio.**
```

This are the [recommended rules](https://github.com/facebook/react-native/blob/master/ReactAndroid/proguard-rules.pro) by the react-native team, most of them are exceptions to core packages that the compiler needs to find during the compilation time, so they can't be obfuscated.

Now, some exceptions:

**_1.-_** If your using [`react-native-config`](https://github.com/luggit/react-native-config) in order to configure different environments in your app. You will need to add the following lines to the end of your `proguard-rules.pro` file.

```proguard
# react-native-config
-keep class com.mypackage.BuildConfig { *; }
```

Where **_mypackage_** should match the **package** value in your `AndroidManifest.xml` file.

**_2.-_** If your using [`react-native-firebase`](https://rnfirebase.io/) in your app. You will need to configure exceptions to the firebase packages in your `proguard-rules.pro` file. This depends on which firebase packages are you using, so please check the firebase documentation.

## Disable Logging in release 📋

We don't want any logs in our application in a release version, cause they may expose some sensible data as parameters sended to https requests, endpoints, etc...

In order to disable the logging, we only need to add a new package to the babel configuration. Babel is the compiler for react native code, with this package added, babel will remove all the logs in our code when compiling a release/production version.

So you can keep your logs when deploying a debug version but keeping the relase version secure!

Disable the logging can be done in two simple steps:

**_1.-_** Install the following plugin for babel [`babel-plugin-transform-no-console`](https://babeljs.io/docs/en/babel-plugin-transform-remove-console) by executing the following command:

```bash
npm install babel-plugin-transform-remove-console --save-dev
```

**_2.-_** Add the following configuration lines to your **_.babelrc_** file (In case that you didn't have one create the file in the root of your react native project).

```json
{
  "env": {
    "production": {
      "plugins": ["transform-remove-console"]
    }
  }
}
```

**_3.-_** If you are using [`redux-logger`](https://github.com/LogRocket/redux-logger) for logging the redux calls add the following code to your store in order to not apply this middleware when we are in a release version.

```javascript
function getMiddlewares() {
  if (DEV) {
    return applyMiddleware(/*...Middlewares...*/, Logger);
  }

  return applyMiddleware(/*...Middlewares...*/);
}

export const store = createStore(rootReducer, getMiddlewares());
```

## Managing API Keys 🔑 with environment files.

When it comes to production, we don't want to expose any sensible key in our code, that's why they must not be stored as plain text in our code. ¿How can they be managed then?

Well, here is when the magic of the continuous integration (CI) came into play. The best practice is to store the keys as _enviromental variables_ in our CI provider (For example: _CircleCI_, _TravisCI_ or _GitLabCI_ ), in most of this services these keys can be added as enviromental variables in the configuration pages.

For example, in the case of CircleCI, this means that all the variables we set from the configuration are availiable in the docker images runned for our project in CircleCI. Therefore, we'll only need to use an script that replaces all the enviromental variable references in our environment file for it's actual values. This is where we use **_envsubst_**.

**_envsubst_** it's command included in the _gettext_ package, that will do precisely that, it will replace all the references to environment variables of a file for it's actual values. Therefore we'll only need to commit our **_.env.tpl_** file to our repository and _envsubst_ will be in carge of creating the actual environmental file.

**_Example:_**

Imagine that we have the following environmental template file (.env.tpl).

```dotenv
KEYSTORE_ALIAS=$KEYSTORE_ALIAS
KEYSTORE_PASSWORD=$KEYSTORE_PASSWORD
GOOGLE_MAPS_API_KEY=$GMAPS_API_KEY
```

If in out CI config file we setup the following action...

```bash
envsubst < .env.tpl > .env
```

_envsubst_ will generate a .env file replacing all the references for it's actual values, so the CI will be in charge of managing all the API keys for us leaving our app secure.

**_EXTRA:_** As React Native doesn't have native support for managing environment variables We'll need to use the following package [react-native-config](https://github.com/luggit/react-native-config) if we want to do so. The package is a little outdated and the configuration can be a little bit messy but it's very useful to be able to use environmental files and managing diferent environments in the app.

---

So, keep all of this tips in mind when deploying a React Native app into production! Data exposure or API keys exposure can be serious things! And before you know it you may end up as the guy in the gif!
