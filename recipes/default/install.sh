#!/usr/bin/env bash

projectdir=$1
recipedir=$2

mkdir $projectdir/
mkdir $projectdir/data
mkdir $projectdir/tests
mkdir $projectdir/assets

cp $recipedir/run.sh $projectdir/run.sh
cp $recipedir/Gruntfile.js $projectdir/Gruntfile.js
cp $recipedir/server.js $projectdir/server.js
cp -r $recipedir/views/ $projectdir/views/
cp -r $recipedir/scripts/ $projectdir/scripts/
cp -r $recipedir/css/ $projectdir/css/

cd $projectdir
npm init --yes

# Grunt
npm install grunt grunt-cli grunt-contrib-sass grunt-contrib-uglify grunt-contrib-cssmin grunt-contrib-watch grunt-contrib-jasmine grunt-contrib-jshint grunt-babel grunt-browserify grunt-notify  --save-dev

# Server-side JS
npm install body-parser ejs express fs --save

# Client-side JS
npm install ocelot-pjax --save