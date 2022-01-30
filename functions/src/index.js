// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
// Tutorial: https://www.youtube.com/watch?v=T8SZv6h2WbY&t=7s

const addEntry = require('./entryController')
const functions = require("firebase-functions");
const express = require ('express');

const app = express()

app.get('/', (req, res) => res.status(200).send('Hey there!'))
app.post('/entries', (req, res) => res.send(addEntry()));


exports.app = functions.https.onRequest(app);