#!/usr/bin/env bash

projectdir=$1
recipedir=$2
project=$3

mkdir $projectdir/

cp $recipedir/run.sh $projectdir/run.sh
cp $recipedir/Gruntfile.js $projectdir/Gruntfile.js
cp $recipedir/.gitignore $projectdir/.gitignore
cp $recipedir/server.js $projectdir/server.js
cp -r $recipedir/views $projectdir/views

cd $projectdir
npm init --yes

# Grunt
npm install grunt grunt-cli grunt-contrib-uglify grunt-contrib-watch grunt-babel grunt-browserify grunt-notify babel-preset-es2015 --save-dev

# Server-side JS
npm install body-parser ejs express fs marked --save

# Setup
mkdir src
touch src/$project.js
touch README.md

# Run
chmod a+x run.sh
./run.sh