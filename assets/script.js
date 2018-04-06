
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

      $("#submit").on("click", function (event) {
        event.preventDefault();
        username = $("#username").val().trim();
        console.log(username);


        db.ref("users")
            .orderByChild("userName")
            .equalTo(username)
            .on("child_added", function(data)
            {
                var user = data.val();
                console.log(user);
                console.log(user.userName);
	            window.location.href = "main.html";
            });
        // db.ref(child("users").equalTo(username).once("value",snapshot => {
        //     var userData = snapshot.val();
        //     if (userData){
        //       console.log("exists!");
        //     }
        // });

      });

    
