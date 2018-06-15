import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
    apiKey: "AIzaSyA0E1cYzEkrzEC_eV_zyueSP4E7e-IIbQ8",
    authDomain: "erbium-61949.firebaseapp.com",
    databaseURL: "https://erbium-61949.firebaseio.com",
    projectId: "erbium-61949",
    storageBucket: "erbium-61949.appspot.com",
    messagingSenderId: "1048414895900"
});

ReactDOM.render(<h1>Erbium</h1>, document.getElementById('project-container'));
