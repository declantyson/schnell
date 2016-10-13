#!/usr/bin/env bash

grunt sass
grunt reactify
ttab grunt --force
ttab npm start