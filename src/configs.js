// Imports e autenticação com firebase
require("dotenv").config();
let { initializeApp } = require("firebase/app");
let { getDatabase } = require("firebase/database");
let { getAuth, signInWithEmailAndPassword } = require("firebase/auth");

const email = process.env.EMAIL;
const senha = process.env.SENHA_FIREBASE;
const uid = process.env.UID;

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DATABASE_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSAGING_SENDER_ID,
  appId: process.env.APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth();

signInWithEmailAndPassword(auth, email, senha)
  .then((userCredential) => {
    let user = userCredential.user;
    console.log(user.uid);
  })
  .catch((error) => {
    let errorCode = error.code;
    let errorMessage = error.message;
  });

module.exports = { uid };
