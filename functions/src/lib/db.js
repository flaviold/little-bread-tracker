const admin = require('firebase-admin');
const serviceAccount = require('../../firebase-credentials.json');

let db;


let dbFactory = () => {
  if (db) return db;

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
  });

  db = admin.firestore();

  return db;
}

module.exports = dbFactory();
