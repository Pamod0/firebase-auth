// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/10.12.1/firebase-auth.js';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: 'AIzaSyAIvpqxF_DKgdNz4EY-3VAdIMkRO1z4_9Q',
    authDomain: 'fir-login-59c0b.firebaseapp.com',
    databaseURL: 'https://fir-login-59c0b-default-rtdb.firebaseio.com',
    projectId: 'fir-login-59c0b',
    storageBucket: 'fir-login-59c0b.appspot.com',
    messagingSenderId: '718897726601',
    appId: '1:718897726601:web:fa7f3aa07f70f739f57258'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Register
const register = document.getElementById('register');

register.addEventListener('click', function (event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            alert('Creating account...');
            window.location.href = 'home.html';
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});
