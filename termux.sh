#!/bin/bash
# This script sets up and runs the Cloud.ai client and server in Termux for Android.
apt install nodejs make python2 clang -y
npm install -g node-gyp
npm install
npm start
