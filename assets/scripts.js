// Display the current time on the jumbotron using moment.js
// Hook into the element that will hold the timer
const clock = $("#currentDay");

// Global arrays
var save9 = [];
var save10 = [];
var save11 = [];
var save12 = [];
var save13 = [];
var save14 = [];
var save15 = [];
var save16 = [];
var save17 = [];
// Create a function to update the clock
function updateTime() {
    const now = moment();
    const ourTime = now.format('MMMM Do YYYY, h:mm:ss a');
    // Print the time into the element that we set to clock
    clock.text(ourTime);
}
// The interval will make sure that the clock is always up to date!
setInterval(updateTime, 1000);
// Call the updateTime function
updateTime();

// Make click events to save information to local storage
// Compare local time with schedule time 
// Need to tap back into the API to get the time to put in the comparison function
moment().format('MMMM Do YYYY, h:mm:ss a');
var today = new Date();
var todayTime = today.getHours();


//  setting the fuction to occur on each row that has a class of time-block
$(".time-block").each(function () {
    // Setting a variable that holds the data-time given to each row, which is from 9 - 17
    // I set data times because I couldn't figure out how to compare the times just based off their am/pm
    // 9-17 represents military time and it worked
    var rowTime = $(".time-block").attr("id")
    // if the day time has past the time value given to the row, the row will show as red
    if (todayTime > rowTime) {
        $(".time-block").css("background-color", "red");
        // if the day time is a lower number than the time value given to the row, change color to green
    } else if (todayTime < rowTime) {
        $(".time-block").css("background-color", "yellowgreen");
        // if the day time is in the hour that is equal to the time value given to the row it should appear white
    } else {
        $(".time-block").css("background-color", "cornflowerblue");
    }
});

// Change the block color based on what time it is, what time has past, and what time is yet to come

// Make click events to save information to local storage
//click event should store the information (set)
$("#sb9").click(function () {
 var rowTime = $(".time-block").attr("9");
 var postIt = $(".time-block").find("#9t").val();
 localStorage.setItem("row 9", postIt);
});

$(".time-block").each(function() {
   var rowTime = $(".time-block").attr("9");
    var postIt = localStorage.getItem(rowTime);
    $(".time-block").find("#9t").val(postIt).print;
})

$("#sb10").click(function () {
    var rowTime = $(".time-block").attr("10");
    var postIt = $(".time-block").find("#10t").val();
    localStorage.setItem("row ten", postIt);
   });
   
   $(".time-block").each(function() {
      var rowTime = $(".time-block").attr("10");
       var postIt = localStorage.getItem(rowTime);
       $(".time-block").find("#10t").val(postIt).print;
   })
 
// Was getting the code to show in the storage, but couldnt get it to print to the page
// basically things were working, but I couldnt get it to show up
// the idea was to repeat that code for each save button on each box



// Need to (get) the information back
