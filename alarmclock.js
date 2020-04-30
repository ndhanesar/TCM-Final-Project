//sets initial variable value
var wakeuptime = 7;
var noon = 12;
var lunchtime = 12;
var naptime = lunchtime + 3;
var partytime;
var nighttime = 18;

// Shows the current time on the webpage
var showCurrentTime = function() {

//Shows the string on the webpage
  var clock = document.getElementById('clock');
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = "AM";

// Set hours
  if (hours >= noon) {
    meridian = "PM";
  }

  if (hours > noon) {
    hours = hours - 12;
  }

// Set Minutes
  if (minutes < 10) {
    minutes = "0" + minutes;
  }

// Set Seconds
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

//This puts together the string that will display the time
  var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian;

  clock.innerText = clockTime;
};

// This will update the clock with the corresponding gifs and messages
var updateClock = function() {
  var time = new Date().getHours();
  var messageText;
  var image = "https://media.giphy.com/media/jj7MFG6lyZ8UU/giphy.gif";

  var timeEventJS = document.getElementById("timeEvent");
  var alarmImageJS = document.getElementById('alarmImage');
//if party time button is pressed, then minions party gif will appear and say "Woo Let's Party!"
  if (time == partytime) {
    image = "https://media.giphy.com/media/3KC2jD2QcBOSc/giphy.gif";
    messageText = "Woo Let's party!";
//if the selected wake up time is equal to the current time, then wake up gif will appear and say "Time to Wake Up!"
  } else if (time == wakeuptime) {
    image = "https://media.giphy.com/media/5bdgsd3ChyajOVN0rl/giphy.gif";
    messageText = "Time to Wake Up!";
//if the selected lunch time is equal to the current time, then the simpsons lunch gif will appear and say "Ready to Eat?"
  } else if (time == lunchtime) {
    image = "https://media.giphy.com/media/eH3Ra3DUp3tMylXedo/giphy.gif";
    messageText = "Ready to Eat?";
//if the selected nap time is equal to the current time, then the nap gif will appear and say "Sleep Tight!"
  } else if (time == naptime) {
    image = "https://media.giphy.com/media/HwmDZaI4YEeZ2/giphy.gif";
    messageText = "Sleep Tight!";
//if the current time is before noon, then the morning gif will appear and say "Good Morning!"
  } else if (time < noon) {
    image = "https://media.giphy.com/media/ArGV73SzOI2eQ/giphy.gif";
    messageText = "Good Morning!";
//if the current time is after 6pm, then the night time gif will appear and say "Good Evening!"
  } else if (time >= nighttime) {
    image = "https://media.giphy.com/media/OjmrBW4ZQbWjkq6RkC/giphy.gif";
    messageText = "Good Evening!";
//if it is after 12pm, but before 6pm and the above conditions do not apply, then the afternoon gif will appear and say "Good Afternoon!"
  } else {
    image = "https://media.giphy.com/media/jj7MFG6lyZ8UU/giphy.gif";
    messageText = "Good Afternoon!";
  }

//displays the gif and message that correspond to the specific time
  console.log(messageText);
  timeEventJS.innerText = messageText;
  alarmImage.src = image;

  showCurrentTime();
};
updateClock();

// This makes the clock change every second
var oneSecond = 1000;
setInterval(updateClock, oneSecond);


// This makes the Party Time button work
var partyButton = document.getElementById("partyTimeButton");

var partyEvent = function() {
  if (partytime < 0) {
    partytime = new Date().getHours();
    partyTimeButton.innerText = "Party Over!";
    partyTimeButton.style.backgroundColor = "#0A8DAB";

  } else {
    partytime = -1;
    partyTimeButton.innerText = "Party Time!";
    partyTimeButton.style.backgroundColor = "#222";
  }
};
//activates party mode on the click
partyButton.addEventListener("click", partyEvent);
partyEvent();

// This makes the wake up time selector work
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");

var wakeUpEvent = function() {
  wakeuptime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener("change", wakeUpEvent);


// This makes the lunch time selector work
var lunchTimeSelector = document.getElementById("lunchTimeSelector");

var lunchEvent = function() {
  lunchtime = lunchTimeSelector.value;
};

lunchTimeSelector.addEventListener("change", lunchEvent);


// This makes the nap time selector work
var napTimeSelector = document.getElementById("napTimeSelector");

var napEvent = function() {
  naptime = napTimeSelector.value;
};

napTimeSelector.addEventListener("change", napEvent);
