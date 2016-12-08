#!/usr/bin/env bash

cd app/android/app
if [ ! -f my-release-key.keystore ]; then
    keytool -genkey -v -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000
else
    echo "Key already exists. Assembling."
fi
cd .. && ./gradlew assembleRelease

echo "Please enter application name: "
read app

echo "Please enter a version number: "
read version

cp app/build/outputs/apk/app-release.apk ../../$app-$version.apk

echo "Deployed."