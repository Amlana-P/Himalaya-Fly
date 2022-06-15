if (window.DeviceMotionEvent == undefined) {
	//No accelerometer is present. Use buttons. 
	alert("no accelerometer");
}
else {
	alert("accelerometer found");
	window.addEventListener("devicemotion", accelerometerUpdate, true);
}

function accelerometerUpdate(e) {
	DeviceMotionEvent.myInterval = 1000;

	document.getElementById('xAxis').innerHTML = e.accelerationIncludingGravity.x*1 + ' m/s2';
	document.getElementById('yAxis').innerHTML = e.accelerationIncludingGravity.y*1 + ' m/s2';
	document.getElementById('zAxis').innerHTML = e.accelerationIncludingGravity.z*1 + ' m/s2';

 }