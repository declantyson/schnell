#!/usr/bin/env bash

grunt sass
grunt cssmin
grunt uglify
ttab grunt --force
ttab npm start