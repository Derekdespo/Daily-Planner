// Display the current time on the jumbotron using moment.js
// Hook into the element that will hold the timer
const clock = $("#currentDay");
// Create a function to update the clock
function updateTime () {
    const now = moment();
    const ourTime = now.format('MMMM Do YYYY, h:mm:ss a');
    // Print the time into the element that we set to clock
    clock.text(ourTime);
}
// The interval will make sure that the clock is always up to date!
setInterval(updateTime, 1000);
// Call the updateTime function
updateTime();



// Create rows and columns for the html container elements
// For Loop to get the amount of rows we need for the alotted time
// Make click events to save information to local storage
// Compare local time with schedule time 
// Change the block color based on what time it is, what time has past, and what time is yet to come
