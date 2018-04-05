
    var config = {
        apiKey: "AIzaSyDKxbhfLyIhZDvq7CpT7Ate8pLAyrSjFM8",
        authDomain: "startmyday-58618.firebaseapp.com",
        databaseURL: "https://startmyday-58618.firebaseio.com",
        projectId: "startmyday-58618",
        storageBucket: "startmyday-58618.appspot.com",
        messagingSenderId: "1033136648561"
      };
      firebase.initializeApp(config);
    
      let db = firebase.database();

      console.log("here");

      $("#submit").on("click", function (event) {
        console.log("clicked");
        event.preventDefault();
        console.log("sumbit was clicked");
        username = $("#username").val().trim();
        console.log(username);

        
        ref.child("users").equalTo(username).once("value",snapshot => {
            var userData = snapshot.val();
            if (userData){
              console.log("exists!");
            }
        });

      });

    
