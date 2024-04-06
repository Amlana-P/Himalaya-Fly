function callAlert(msg) {
  alert(msg);
}

function displayResult(dist) {
  var msg =
    "You threw your phone an approx distance of " +
    Math.round(dist * 100) / 100 +
    " m";
  callAlert(msg);
}

function runGame() {
  if (window.DeviceMotionEvent == null) {
    alert("No accelerometer found. You can't play this game.");
    return;
  }

  let listenerAdded = false;

  function calculateNetAcceleration(x, y, z) {
    return Math.sqrt(x * x + y * y + z * z);
  }

  function accelerometerUpdate(e) {
    const X = Math.round(e.accelerationIncludingGravity.x * 100) / 100;
    const Y = Math.round(e.accelerationIncludingGravity.y * 100) / 100;
    const Z = Math.round(e.accelerationIncludingGravity.z * 100) / 100;

    document.getElementById("xAxis").textContent = X + " m/s2";
    document.getElementById("yAxis").textContent = Y + " m/s2";
    document.getElementById("zAxis").textContent = Z + " m/s2";

    if (Math.abs(X) >= 6 || Math.abs(Y) >= 6) {
      callAlert(
        "Please hold your device oriented horizontally and facing upwards."
      );
    }

    const dist = calculateNetAcceleration(X-0.5, Y-0.8, Z-9.6);

    // Consider removing the listener after getting a significant motion
    // to avoid multiple alerts and calculations
    if (!listenerAdded) {
      displayResult(dist);
      window.removeEventListener("devicemotion", accelerometerUpdate, true);
      listenerAdded = true; // Ensure we don't try to remove the listener again unnecessarily
    }
  }

  window.addEventListener("devicemotion", accelerometerUpdate, true);
}

function runTimer() {
  if (window.DeviceMotionEvent == null) {
    alert("No accelerometer found. You can't play this game.");
    return;
  }

  let count = -4;
  const updateTimer = setInterval(() => {
    count++;

    switch (count) {
      case -3:
        alert("Get Ready...");
        break;
      case -2:
        alert("Set...");
        break;
      case -1:
        alert("Throw!");
        break;
      case 0:
        clearInterval(updateTimer);
        runGame();
        break;
      default:
        // No default action needed
        break;
    }
  }, 1500);
}
