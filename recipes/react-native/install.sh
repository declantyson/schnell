#!/usr/bin/env bash

projectdir=$1
recipedir=$2

cd $projectdir

ttab emulator -avd device1
react-native init app
cd app
react-native run-android
