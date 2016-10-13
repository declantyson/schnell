#!/usr/bin/env bash

projectdir=$1
recipedir=$2

cp -r $recipedir/ $projectdir/

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
npm install git+https://github.com/declantyson/grunt-reactify --save-dev

npm install body-parser --save-dev
npm install ejs --save-dev
npm install express --save-dev
npm install fs --save-dev