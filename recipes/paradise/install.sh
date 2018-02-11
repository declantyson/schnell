#!/usr/bin/env bash

projectdir=$1
recipedir=$2

cp -r $recipedir/*   $projectdir

cd $projectdir
npm install
webpack