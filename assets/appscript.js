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
  let PlusButton = 0;

  $("#addButton0").on("click", function (event) {
    event.preventDefault();
    addFromRow(i);
  });

  function addFromRow(iter) {
    iter++;
    let rowID = "eventRow" + iter;
    let eventID = "event" + iter;
    let addressID = "address" + iter;
    let arrivalID = "arrivalTime" + iter;
    let addButtonID = "addButton" + iter;

    let newRow = '<div class="input-field col s4"id= ""' + rowID + '> <input placeholder="Event" id=""' + eventID + ' type="text" class="validate"> <label for="event">Where are you going today?</label> </div> <div class="input-field col s4"> <input id=""' + addressID + ' type="text" class="validate"> <label for="address">Address</label> </div> <div class="col s2"> <input id=""' + arrivalID + ' class="timepicker"><i class="material-icons">access_time</i> <label for="arrivalTime">Arrival Time</label> </div> <a class="btn-floating btn-medium waves-effect waves-light blue" id="addButton0"><i class="material-icons">add</i></a> <a class="btn-floating btn-medium waves-effect waves-light blue" id="removeButton0"><i class="material-icons">remove</i></a>'

    $("#events").append(newRow);
    
    //click listener for the new button
    let addButtonID = "#" + addButtonID;
    $(addButtonID).on("click", function () {
      addFormRow(foobar);
    })

  }
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


});