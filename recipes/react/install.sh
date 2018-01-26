#!/usr/bin/env bash

projectdir=$1
recipedir=$2

cp -r $recipedir/ $projectdir/

cd $projectdir
npm init --yes
npm install babel-core babel-loader babel-preset-es2015 babel-preset-react react react-dom node-sass sass-loader css-loader style-loader webpack webpack-dev-middleware webpack-hot-middleware --save-dev

npm install body-parser  ejs  express  fs  fs-extra  fs-path  mocha  chai  request --save