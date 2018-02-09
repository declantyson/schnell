#!/usr/bin/env bash

projectdir=$1
recipedir=$2

cp -r $recipedir/ $projectdir/

cd $projectdir
npm init --yes

npm install rollup rollup-plugin-auto-external rollup-plugin-node-resolve --save
npm install ejs  express  fs --save
npm install git+https://git@github.com/declantyson/paradise.git --save