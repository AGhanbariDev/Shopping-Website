import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCwb4ZoPCMC8hrRVsANXcfN_xmEcNgnKQQ",
    authDomain: "shopping-website-registering.firebaseapp.com",
    databaseURL: "https://shopping-website-registering-default-rtdb.firebaseio.com",
    projectId: "shopping-website-registering",
    storageBucket: "shopping-website-registering.appspot.com",
    messagingSenderId: "989652284566",
    appId: "1:989652284566:web:29d78358b9c991a0aa7eb7",
    measurementId: "G-G4E2G2HZPF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

const submit = document.getElementById('sign-up');
submit.addEventListener("click", function(event){
    event.preventDefault();
    
    const username = document.getElementById("signupUsername").value;
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;

    createUserWithEmailAndPassword(auth, email, password, username)
    .then((userCredential) => {
        // Signed up 
        var user = userCredential.user;
        alert("Creating Account...")
        window.location.href = "grand.html";
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ..
    });
});

const login = document.getElementById('signin');
login.addEventListener("click", function(event){
    event.preventDefault();
    
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed up 
        var user = userCredential.user;
        alert("Logging in...")
        window.location.href = "grand.html";
        // ...
    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
        // ..
    });
});