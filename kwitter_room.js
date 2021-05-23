//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
  apiKey: "AIzaSyALxNT1jJedcoDwXX0bCVH7HFGYt6xwBU4",
  authDomain: "lets-chat-web-app-baf6f.firebaseapp.com",
  projectId: "lets-chat-web-app-baf6f",
  storageBucket: "lets-chat-web-app-baf6f.appspot.com",
  messagingSenderId: "327564530832",
  appId: "1:327564530832:web:4428eedb75ab1031b97415",
  measurementId: "G-F1FWZESQG3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
   
  function addUser()
  {
user_name= document.getElementById("user_name").value;
firebase.database().ref("/").child(user_name).update({
   purpose: "adding user" 
});
  }


  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_room.html";
}




getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "style.css";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}