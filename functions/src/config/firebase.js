// have to run this command: https://firebase.google.com/docs/functions/config-env

const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp({
    credential: admin.credential.cert({
        privateKey: functions.config().private.key.replace(/\\n/g, '\n'),
        projectId: functions.config().project.id,
        clientEmail: functions.config().client.email
    }),
    databaseURL: 'https://hack-diversity---tech-dive.firebaseio.com'
})

const db = admin.firestore();

module.exports = { admin, db}
