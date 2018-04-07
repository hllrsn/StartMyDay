$(document).ready(function(){

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


    let hasConfiguration = 1;
    let userName = "Peter Anderson";
    let events = ["work","550 S 4th St Minneapolis","07:55"];
    let destinationTitle = events[0];
    let destinationAddress = events[1];
    let arrivalTime = events[2];
    let homeBase = "1845 Aglen St Roseville";
    let queryURL = "https://maps.googleapis.com/maps/api/directions/json?";
    let embedKey = "AIzaSyDSCagDC4_ojyUv1k-8GuSelE_67iLSj3w"
    // var directionsService = new google.maps.DirectionsService();

    let homeBasePlus = homeBase.split(" ").join("+")
    let destinationPlus = destinationAddress.split(" ").join("+");

    database.ref().on("value",function(snapshot){
        snap = snapshot.val();
        $("#trainsTable").html("<tr><th>Train Name</th><th>Destination</th>        <th>Frequency (Minutes)</th>        <th>Next Arrival</th>        <th>Minutes Away</th>    </tr>");
        snapshot.forEach(function(childSnap){
            console.log(childSnap.val());

        })
    })

    let injectMap = '<iframe  width="100%"  height="100%"  frameborder="0" style="border:0"  src="https://www.google.com/maps/embed/v1/directions?key='+embedKey+'&origin='+homeBasePlus+'&destination='+destinationPlus+'" allowfullscreen></iframe>'
    $("#map").html(injectMap)
    // let arrivalArray = arrivalTime.split(":");
    // let nowTime = moment().format("HH:mm");

    // let nowUnix = moment().unix();
    // let nowTimeArray = nowTime.split(":");

    // let n = parseInt(nowTimeArray[0]);
    // let a = parseInt(arrivalArray[0]);

    


    
    // if (n<a){
    //    doTodayMathThenCall();

       
    // } else {
    //     if (n===a) {
            
    //         let nm = parseInt(nowTimeArray[1])
    //         let am = parseInt(arrivalArray[1])
    //         if (nm<am) {
    //             doTodayMathThenCall();
    //         } else {
    //             doTomorrowMathThenCall();
    //         }
    //     }   
    //     doTomorrowMathThenCall();
    // }

    // function doTodayMathThenCall(){
        
    //     let nh = parseInt(nowTimeArray[0]);
    //     let nm = parseInt(nowTimeArray[1]);
    //     let ah = parseInt(arrivalArray[0]);
    //     let am = parseInt(arrivalArray[1]);
    //     console.log(nh,nm,ah,am)
    //     let arrivalUnix = nowUnix;

    //     let hDiff = ah-nh;
    //     arrivalUnix = arrivalUnix + (60*hDiff);

    //     while (nm < 59) {
    //         arrivalUnix = arrivalUnix + 60;
    //         nm++;

    //     }
    //     let x = 0;
    //     while (x<=am) {
    //         arrivalUnix = arrivalUnix + 60;
    //         x++;

    //     }
    //     doCallNow(arrivalUnix);
        
    // }

    // function doTomorrowMathThenCall(){
        
    //     let nh = parseInt(nowTimeArray[0]);
    //     let nm = parseInt(nowTimeArray[1]);
    //     let ah = parseInt(arrivalArray[0]);
    //     let am = parseInt(arrivalArray[1]);
        
    //     let arrivalUnix = nowUnix;

    //     while (nh < 23) {
    //         arrivalUnix = arrivalUnix + 3600;
    //         nh++;

            
    //     }

    //     while (nm < 59) {
    //         arrivalUnix = arrivalUnix + 60;
    //         nm++;

    //     }
    //     let i = 0;
    //     while (i<ah) {
    //         arrivalUnix = arrivalUnix + 3600;
    //         i++;            
            
    //     }
    //     let x = 0;
    //     while (x<=am) {
    //         arrivalUnix = arrivalUnix + 60;
    //         x++;

    //     }

    //     doCallNow(arrivalUnix);
    // }

    // function doCallNow(arrive) {
    //     let originString = "origin="+homeBasePlus;
    //     let destinationString = "destination="+destinationPlus;
    //     let arrivalString = "arrival_time="+arrive;
    //     let apiKey = "key=AIzaSyCzwsje2Kj1pj97lj81UmrEOmPci7988XU";

    //     queryURL = queryURL.concat(originString);
    //     queryURL = queryURL.concat("&"+destinationString);
    //     queryURL = queryURL.concat("&"+arrivalString);
    //     queryURL = queryURL.concat("&"+apiKey);
    //     console.log(queryURL)




        // var xhttp = new XMLHttpRequest();
        // xhttp.open("POST", queryURL, true);
        // xhttp.setRequestHeader("Content-Type","application/json");
        // xhttp.send();
        // var response = JSON.parse(xhttp.responseText);
//***************************************************************************** */
        // let request = {
        //     origin: homeBasePlus,
        //     destination: destinationPlus,
        //     // arrival_time: arrive
        //     travelMode: 'DRIVING'
        // }

        // directionsService.route(request, function(response, status) {
        //     if (status == 'OK') {
        //       console.log(response);
        //     }
        //   });

//****************************************************************************** */



        // fetch(queryURL, {method: 'GET', mode: 'no-cors'}).then(function(response){
        //     console.log('status',response.status)
        //     console.log(response);
            
        // })





        // var xhr = new XMLHttpRequest();
        // xhr.open('GET', queryURL);

        // console.log(xhr)


        // $.getJSON(queryURL, function() {
        //     console.log(data)
        // })
        


    //     $.ajax({
    //         url: queryURL,
    //         method: "GET",
    //         dataType: 'json'
    //     }).then(function(response) {
    //         console.log(this)
    //     })
    // }

    

     $.ajax({
            url: "http://api.wunderground.com/api/31f7570bfbcd751b/hourly10day/q/MN/minneapolis.json",
            method: "GET"
        }).then(function(response) {
            console.log(response.hourly_forecast[0].feelslike.english)
            $("#weatherZone").html('<h4>Right now it feels like '+response.hourly_forecast[0].feelslike.english+'° F outside')
        })
    


    // <div style="width: 100%"><iframe width="100%" height="500" src="https://maps.google.com/maps?width=100%&amp;height=500&amp;hl=en&amp;q=1845%20Aglen%20St&amp;ie=UTF8&amp;t=p&amp;z=13&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="https://www.maps.ie/create-google-map/">Embed Google Map</a></iframe></div><br />

    








    // let time1 = Math.round((new Date()).getTime() / 1000);
    // console.log(time1+"is unix time for now")

    // let time2 = new Date()
    // console.log(time2+"is just Date")

    // let time3 = ((new Date()).getTime())
    // console.log(time3+"is date.getTime")

    // console.log("test with own date")

    // let time4 = (("Sat Mar 31 2018 19:37:52 GMT-0500 (Central Daylight Time)").getTime());
    // console.log(time4+" is test wtih 7:30 PM");





    

    

    //https://maps.googleapis.com/maps/api/directions/json?origin=500+s+4th+st+minneapolis&destination=1845+aglen+st&key=AIzaSyDcyfK1TBzMPg3vSfH13tfFEdmX1imKe4Q

    //geolocation = AIzaSyDily5OeCJQzyEUkBoXCaYbu9CQ5HauYXU
    //directions = AIzaSyCzwsje2Kj1pj97lj81UmrEOmPci7988XU
    //maps = AIzaSyDhNrKK89X09tx7PxILd7CKgxLzbrQZRjs
    //embed = AIzaSyDSCagDC4_ojyUv1k-8GuSelE_67iLSj3w



    



});