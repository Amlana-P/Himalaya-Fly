if (window.DeviceMotionEvent == undefined) {
	//No accelerometer is present. Use buttons. 
	alert("no accelerometer");
}
else {
	alert("accelerometer found");
	window.addEventListener("devicemotion", accelerometerUpdate, true);
}

function accelerometerUpdate(e) {
	DeviceMotionEvent.myInterval = 10000;

	document.getElementById('xAxis').innerHTML = Math.round(e.accelerationIncludingGravity.x*1) + ' m/s2';
	document.getElementById('yAxis').innerHTML = Math.round(e.accelerationIncludingGravity.y*1) + ' m/s2';
	document.getElementById('zAxis').innerHTML = Math.round(e.accelerationIncludingGravity.z*1) + ' m/s2';

 }