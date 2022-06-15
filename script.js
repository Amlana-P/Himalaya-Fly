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
	x = Math.round((e.accelerationIncludingGravity.x*100)/100);
	y = Math.round((e.accelerationIncludingGravity.y*100)/100);
	z = Math.round((e.accelerationIncludingGravity.z*100)/100);

	document.getElementById('xAxis').innerHTML = x + ' m/s2';
	document.getElementById('yAxis').innerHTML = y + ' m/s2';
	document.getElementById('zAxis').innerHTML = z + ' m/s2';

 }