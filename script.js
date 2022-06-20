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

		xyz = [[]];
		
		const addElementFunction = setInterval(() => {
			xyz.push([x, y, z]);
		}, 50);

		const stopAddElementFunction = setInterval(() => {
			clearInterval(addElementFunction);
		}, 1000);	

		clearInterval(stopAddElementFunction);
		
		// Create an unordered list
		var list = document.createElement('ul');

		// Create a list item for each wizard
		// and append it to the list
		xyz.forEach(function (val) {
			var li = document.createElement('li');
			li.textContent = val.join();
			list.appendChild(li);
		});

		var app = document.querySelector('#xyzVals');
		app.appendChild(list);

		console.log(xyz);
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