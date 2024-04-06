function callAlert(msg){
	alert(msg);
}

function displayResult(dist){
	var msg = "You threw your phone an approx distance of " + Math.round(dist*100)/100 + " m";
	callAlert(msg);
}

function runGame(){
	var dist = 0;

	window.addEventListener("devicemotion", accelerometerUpdate, true);

	function calculateNetAcceleration(x, y, z){
		return Math.sqrt(x*x+y*y+z*z);
	}

	function accelerometerUpdate(e) {
		X = Math.round(e.accelerationIncludingGravity.x*100)/100;
		Y = Math.round(e.accelerationIncludingGravity.y*100)/100;
		Z = Math.round(e.accelerationIncludingGravity.z*100)/100;

		document.getElementById('xAxis').innerHTML = X + ' m/s2';
		document.getElementById('yAxis').innerHTML = Y + ' m/s2';
		document.getElementById('zAxis').innerHTML = Z + ' m/s2';

		if(Math.abs(X)>=6 || Math.abs(Y)>=6)
			alert("Please hold your device oriented horizontally and facing upwards.")

		dist = calculateNetAcceleration(X, Y, Z-9.7);

		displayResult(dist);
	}
};

function runTimer(){

	if (window.DeviceMotionEvent == null) {
		//No accelerometer is present. 
		alert("No accelerometer found. You can't play this game.");
	}

	count = -4;
	const updateTimer = setInterval(() =>{
		count++;

		switch(count){
			case -3:
				alert("Get Ready...");
				break;
			case -2:
				alert("Set...");
				break;
			case -1:
				alert("Throw!");
				break;
		}

		if(count == 0){
			clearInterval(updateTimer);
			runGame();
		}
	}, 1500);

};