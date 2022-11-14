// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAMclTM8rCw7cOdF8wGn0wuMyYIGlo5reg",
    authDomain: "kwitter-cb365.firebaseapp.com",
    databaseURL: "https://kwitter-cb365-default-rtdb.firebaseio.com",
    projectId: "kwitter-cb365",
    storageBucket: "kwitter-cb365.appspot.com",
    messagingSenderId: "786499929309",
    appId: "1:786499929309:web:5447bbcb3e04c8460d8734"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update(
    {
        purpose : "Add User",
        flower : "Rose",
        color : "Sky Blue",
        fruit : "Orange",
        subject : "Coding"
    }    
    );
}