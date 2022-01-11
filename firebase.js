// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmOrzkaPFzhkEmKHZMPt7ZS5BEB1UGWrY",
  authDomain: "receptapp-ab3d9.firebaseapp.com",
  projectId: "receptapp-ab3d9",
  storageBucket: "receptapp-ab3d9.appspot.com",
  messagingSenderId: "978858497027",
  appId: "1:978858497027:web:da530930dce6a336df2a36"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app =  firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
}
const auth = firebase.auth()
export {auth};