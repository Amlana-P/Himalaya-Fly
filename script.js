if (window.DeviceMotionEvent == undefined) {
	//No accelerometer is present. Use buttons. 
	alert("no accelerometer");
}
else {
	alert("accelerometer found");
	window.addEventListener("devicemotion", accelerometerUpdate, true);
}

function accelerometerUpdate(e) {
	milliseconds = 1000;
	myInterval = setInterval(getNewValues, milliseconds);
		
	function getNewValues(){
		document.getElementById('xAxis').innerHTML = e.accelerationIncludingGravity.x*1;
		document.getElementById('yAxis').innerHTML = e.accelerationIncludingGravity.y*1;
		document.getElementById('zAxis').innerHTML = e.accelerationIncludingGravity.z*1;
	}

	// clearInterval(myInterval);
 }