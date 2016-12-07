#!/usr/bin/env bash

cd app

ttab emulator -avd device1
while [ "`adb shell getprop sys.boot_completed | tr -d '\r' `" != "1" ] ; do sleep 1; done
react-native run-android