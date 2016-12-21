#!/usr/bin/env bash

projectdir=$1
recipedir=$2

mkdir $projectdir/app
mkdir $projectdir/app/_css
mkdir $projectdir/app/_scripts
mkdir $projectdir/app/_libs
mkdir $projectdir/app/_data
mkdir $projectdir/app/_images

cp $recipedir/package.json $projectdir/package.json
cp $recipedir/run.sh $projectdir/run.sh
cp $recipedir/Gruntfile.js $projectdir/Gruntfile.js
cp $recipedir/index.ejs $projectdir/app/index.ejs
cp $recipedir/server.js $projectdir/server.js
cp -r $recipedir/_scripts/ $projectdir/app/_scripts/
cp -r $recipedir/_css/ $projectdir/app/_css/

cd $projectdir
npm install