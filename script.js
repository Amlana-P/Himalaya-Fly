function runGame(){
	window.addEventListener("devicemotion", accelerometerUpdate, true);

	function calculateNetAcceleration(x, y, z){
		return Math.sqrt(x*x+y*y+z*z);
	}

	function accelerometerUpdate(e) {
		X = Math.round(e.accelerationIncludingGravity.x*100)/100;
		Y = Math.round(e.accelerationIncludingGravity.y*100)/100;
		Z = Math.round(e.accelerationIncludingGravity.z*100)/100;

		X = X>0 ? X-0.3 : X+0.2;
		Y = Y>0 ? Y-0.3 : Y;
		Z = Z>0 ? Z+0.3 : Z; 

		document.getElementById('xAxis').innerHTML = X + ' m/s2';
		document.getElementById('yAxis').innerHTML = Y + ' m/s2';
		document.getElementById('zAxis').innerHTML = Z + ' m/s2';

		// calculating distance
		dist = 0.125*calculateNetAcceleration(X, Y, Z);
		alert("You threw your phone an approx distance of {}", dist);
	}

};

async function runTimer(){

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