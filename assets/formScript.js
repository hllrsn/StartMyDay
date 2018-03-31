$(document).ready(function(){


    let hasConfiguration = 1;
    let userName = "Peter Anderson";
    let events = ["work","550 S 4th St",0755];
    let homeBase = "100 3rd Ave S, Minneapolis, MN 55401";

    let time1 = Math.round((new Date()).getTime() / 1000);
    console.log(time1+"is unix time for now")

    let time2 = new Date()
    console.log(time2+"is just Date")

    let time3 = ((new Date()).getTime())
    console.log(time3+"is date.getTime")

    console.log("test with own date")

    let time4 = (("Sat Mar 31 2018 19:37:52 GMT-0500 (Central Daylight Time)").getTime());
    console.log(time4+" is test wtih 7:30 PM");
    

    

    



    



});