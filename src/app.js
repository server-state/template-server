// Module dependencies
const express = require('express');
const baseServer = require('@server-state/server-base');

// server modules
const rawModule = require('@server-state/raw-module');

// Create a new express app
const app = express();

// create a new server-base with your config
const myServer = new baseServer({
    logToConsole: true, // Log error messages to console, ...
    logToFile: false,   // ... but not to a file
});

// add modules to the created server base
myServer.addModule('raw', rawModule, null, ['who', 'pwd', 'uname -a']);

// give server base instance an express app to attach modules
myServer.init(app);

// export app
module.exports = app;
