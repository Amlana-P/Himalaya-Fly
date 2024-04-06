function displayResult(dist) {
	document.getElementById("timer").textContent =
	  "You simulated a throw of approximately " + Math.round(dist) + " m";
  }
  
  function runGame() {
	if (window.DeviceMotionEvent == null) {
	  alert("No accelerometer found. You can't play this game.");
	  return;
	}
  
	let hasResultBeenDisplayed = false;
  
	function accelerometerUpdate(e) {
	  let Z = Math.round(e.accelerationIncludingGravity.z) - 9.8;

	  document.getElementById("zAxis").textContent = "Z: " + Z + " m/s²";
  
	  if (!hasResultBeenDisplayed && (Math.abs(X) <= 3 && Math.abs(Y) <= 3)) {
		const dist = 0.125*Z*0.8;
		displayResult(dist);
		window.removeEventListener("devicemotion", accelerometerUpdate, true);
		hasResultBeenDisplayed = true;
	  } else {
		alert("Please hold your device in upright position.");
	  }
	}
  
	window.addEventListener("devicemotion", accelerometerUpdate, true);
  }
  
  function runTimer() {
	if (window.DeviceMotionEvent == null) {
	  alert("No accelerometer found. You can't play this game.");
	  return;
	}
  
	let count = -3;
	document.getElementById("timer").textContent = "Get Ready...";
	const updateTimer = setInterval(() => {
	  if (count === -2) {
		document.getElementById("timer").textContent = "Set...";
	  } else if (count === -1) {
		document.getElementById("timer").textContent = "Simulate a Throw!";
	  } else if (count === 0) {
		clearInterval(updateTimer);
		runGame();
	  }
	  count++;
	}, 1500);
  }  