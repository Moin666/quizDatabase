 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.6.3/firebase-auth.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyBhPbbuQsd3AKqyw0yX7hsdvL1mkyKHw9I",
   authDomain: "signupform-e146f.firebaseapp.com",
   projectId: "signupform-e146f",
   storageBucket: "signupform-e146f.appspot.com",
   messagingSenderId: "908862464429",
   appId: "1:908862464429:web:d09afd9f902f4045bc4124",
   measurementId: "G-MN88NJHZZN"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app); 
const auth = getAuth();


 var nameV = document.getElementById("nameV")
 var emailV = document.getElementById("emailV")
 var passwordV = document.getElementById("passwordV")

var btnSubmit = document.getElementById("btnSubmit")

var objData = {

}

btnSubmit.addEventListener('click',function(){
    objData.name = nameV.value;
    objData.email = emailV.value;
    objData.password = passwordV.value;
    createUserWithEmailAndPassword(auth,   objData.email, objData.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log("user Created Successfully")
      window.location.replace("quizapp.html")
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error)
      console.log("here is error")
      alert(error)
      // ..
    });
})






 ///////////************* Email link Authentication************////////////////////


