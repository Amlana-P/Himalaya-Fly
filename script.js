function runGame(){

	if (window.DeviceMotionEvent == undefined) {
		//No accelerometer is present. 
		alert("No accelerometer found. You can't play this game.");
	}
	else {
		// alert("Accelerometer found");
		window.addEventListener("devicemotion", accelerometerUpdate, true);
	}

	function accelerometerUpdate(e) {

		x = Math.round((e.accelerationIncludingGravity.x*100))/100;
		y = Math.round((e.accelerationIncludingGravity.y*100))/100;
		z = Math.round((e.accelerationIncludingGravity.z*100))/100;

		document.getElementById('xAxis').innerHTML = x + ' m/s2';
		document.getElementById('yAxis').innerHTML = y + ' m/s2';
		
		document.getElementById('zAxis').innerHTML = z + ' m/s2';

	}

}

async function runTimer(){

	count = 3;
	const timer = document.getElementById('timer');

	const updateTimer = setInterval(() =>{
		timer.innerHTML = count;
		count--;

		if(count == -1){
			clearInterval(updateTimer);
			timer.innerHTML = "Shoot!";
			runGame();
		}
	}, 1000);

}	