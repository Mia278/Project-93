
//ADD YOUR FIREBASE LINKS HERE

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCsHd-D6qsKdiohUCDdjDcXehKIu0-FxBg",
    authDomain: "class-test-27275.firebaseapp.com",
    projectId: "class-test-27275",
    storageBucket: "class-test-27275.appspot.com",
    messagingSenderId: "1018047318826",
    appId: "1:1018047318826:web:2ab3d03ed77dc0972eac53"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {
      firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
