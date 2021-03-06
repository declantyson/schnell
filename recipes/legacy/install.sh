#!/usr/bin/env bash

projectdir=$1
recipedir=$2

mkdir $projectdir/app
mkdir $projectdir/app/_css
mkdir $projectdir/app/_scripts
mkdir $projectdir/app/_libs
mkdir $projectdir/app/_data
mkdir $projectdir/app/_tests
mkdir $projectdir/app/_images

cp $recipedir/run.sh $projectdir/run.sh
cp $recipedir/Gruntfile.js $projectdir/Gruntfile.js
cp $recipedir/index.ejs $projectdir/app/index.ejs
cp $recipedir/server.js $projectdir/server.js
cp $recipedir/test-spec.js $projectdir/app/_tests/test-spec.js
cp -r $recipedir/_scripts/ $projectdir/app/_scripts/
cp -r $recipedir/_css/ $projectdir/app/_css/

cd $projectdir
npm init --yes
npm install grunt --save-dev
npm install grunt-contrib-sass --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-contrib-cssmin --save-dev
npm install grunt-contrib-watch --save-dev
npm install grunt-contrib-connect --save-dev
npm install grunt-contrib-jasmine --save-dev
npm install grunt-contrib-jshint --save-dev
npm install grunt-notify --save-dev

npm install body-parser --save-dev
npm install ejs --save-dev
npm install express --save-dev
npm install fs --save-dev