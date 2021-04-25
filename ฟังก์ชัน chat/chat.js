var firebaseConfig = {
    apiKey: "AIzaSyCl6i7HH8Nozvqkiu9SIaH6U__VcmC1ExU",
    authDomain: "chatproject-ad8a8.firebaseapp.com",
    databaseURL: "https://chatproject-ad8a8-default-rtdb.firebaseio.com",
    projectId: "chatproject-ad8a8",
    storageBucket: "chatproject-ad8a8.appspot.com",
    messagingSenderId: "489011945974",
    appId: "1:489011945974:web:296e31d883fbda2c8c67d7",
    measurementId: "G-J01FC3N495"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  var name = localStorage.getItem("name");

  function send(){
      var msg = document.getElementById('msg_text').value;
      if(msg != ""){
        firebase.database().ref("messages").push({
            msg : msg,
            sender : name

        }).then(function(){
            document.getElementById('msg_text').value = "";
        })
      }
  }

  firebase.database().ref("messages").on("child_added" , function(snapshot){
      var username = snapshot.val().sender;
      var msg = snapshot.val().msg;
      var html = "";
      if(username == name){
          html += "<div class='message_me' align='right'><p class='user'>" +username + "</p><p class='msg_me'>"+ msg +"</p></div>";
          document.getElementById("box_messages").innerHTML += html;

      }else{
        html += "<div class='message_user' align='left'><p class='user'>" +username + "</p><p class='msg_user'>"+ msg +"</p></div>";
        document.getElementById("box_messages").innerHTML += html;
      }

      var div_obj = document.getElementById("box_messages");
      div_obj.scrollTop = div_obj.scrollHeight;
  }); 







  