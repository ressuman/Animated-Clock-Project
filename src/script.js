"use strict";

// Wait for the DOM content to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select clock hands from the DOM
  const secondsHand = document.querySelector("#seconds");
  const minutesHand = document.querySelector("#minutes");
  const hoursHand = document.querySelector("#hours");

  // Function to update the clock hands
  function updateClock() {
    // Get the current date and time
    const currentDateTime = new Date();
    // Calculate seconds, minutes, and hours
    const seconds = currentDateTime.getSeconds();
    const minutes = currentDateTime.getMinutes() + seconds / 60; // Add seconds as fraction of a minute
    const hours = (currentDateTime.getHours() % 12) + minutes / 60; // Get 12-hour format, add minutes as fraction of an hour

    // Calculate the rotation angles for the clock hands
    const secondsAngle = seconds * 6; // Each second corresponds to 6 degrees of rotation. 6 degrees per second
    const minutesAngle = minutes * 6; // Each minute corresponds to 6 degrees of rotation. 6 degrees per minute
    const hoursAngle = hours * 30; // Each hour corresponds to 30 degrees of rotation. 30 degrees per hour (12 hours * 30 degrees)

    // Set the rotation for each clock hand using the transform attribute
    secondsHand.setAttribute(
      "transform",
      `rotate(${secondsAngle}, 243.5, 251)`
    );
    minutesHand.setAttribute(
      "transform",
      `rotate(${minutesAngle}, 243.5, 251)`
    );
    hoursHand.setAttribute("transform", `rotate(${hoursAngle}, 243.5, 251)`);

    // Play tick sound
    playTickSound();

    // Schedule the next update after 1 second
    setTimeout(updateClock, 1000);
  }

  // Function to play the tick sound
  function playTickSound() {
    // Create and play the tick sound
    const tick = new Audio("./media/tick.mp3");
    tick.currentTime = 0; // Reset the audio to the beginning
    tick.play(); // Play the audio
  }

  // Start updating the clock
  updateClock();
});

//style the clock hands to get animation
// secondsHand.style.transform= `rotate(${secondsAngle}deg)`
// minutesHand.style.transform = `rotate(${minutesAngle}deg)`
// hoursHand.style.transform =`rotate(${hoursAngle}deg)`

// secondsHand.style.transformOrigin = '243.5px 251px'
// minutesHand.style.transformOrigin = '243.5px 251px'
// hoursHand.style.transformOrigin = '243.5px 251px'
