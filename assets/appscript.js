$(document).ready(function () {
  // Initialize Firebase
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
  
  // document.getElementById("myBtn").addEventListener("click", function () {

    $("#submit").on("click", function (event) {
      event.preventDefault();

      let returningUser = 0;
      let userName = ["mustafa"];
      let userAddress = "UoM Campus";
      let event = ["#eventTitle", "#eventLocation", "#eventTime"];
      let gifTerms = ["IDK"];
      console.log("username works?");

    });

    db.ref('users/' + userName).set({
      userName: userName,
      userAddress: userAddress,
      returningUser: returningUser,
      event: event,
      gifTerms: gifTerms
    });

    function save(user) {
      var isAlreadyInserted = false;
      //loop through your username array to check
      for (var i = 0; i < username.length; i++) {
        if (userName[i] === currentUserName) {
          isAlreadyInserted = true;
        }
      }
      // Get the username array from localStorage if available, or create an empty array
      if (username.indexOf(user.value) === -1) {
        username.push(user.value);
      }

      // Convert the array into string and then store in the localStorage
      localStorage.setItem('userName', userName.toString());
    }
    Console.log("saving stuff to local storage")




  // });







});