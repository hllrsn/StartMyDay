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

  let database = firebase.database();

  $("#submit").on("click", function(event) {
  event.preventDefault();

  let returningUser = 0;
  let userName = "mustafa";
  let userAddress = "UoM Campus";
  let event = ["#eventTitle", "#eventLocation", "#eventTime"];
  let gifTerms = ["IDK"];
  console.log("username works?");

  });
  
  database.ref('users/' + userName).set({
    userName: userName,
    userAddress: userAddress,
    returningUser: returningUser,
    event: event,
    gifTerms: gifTerms
  });

























});