#!/usr/bin/env bash

projectdir=$1
recipedir=$2

cp $recipedir/android.sh $projectdir/android.sh
cp $recipedir/deploy-android.sh $projectdir/deploy-android.sh

cd $projectdir

ttab emulator -avd device1
react-native init app
cd app

cp $recipedir/index.android.js $projectdir/app/index.android.js
cp -r $recipedir/js $projectdir/app/js
cp -r $recipedir/android $projectdir/app

npm install --save-dev react-native-swiper

react-native run-android