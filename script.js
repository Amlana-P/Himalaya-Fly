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

		X = Math.round((e.accelerationIncludingGravity.x*100))/100;
		Y = Math.round((e.accelerationIncludingGravity.y*100))/100;
		Z = Math.round((e.accelerationIncludingGravity.z*100))/100;

		document.getElementById('xAxis').innerHTML = X + ' m/s2';
		document.getElementById('yAxis').innerHTML = Y + ' m/s2';
		document.getElementById('zAxis').innerHTML = Z + ' m/s2';

		xyz = [[]];
		i = 1;
		addElementFunction = setInterval((x, y, z) => {
			xyz.push([x, y, z]);
			// console.log(x, y, z);
		}, 50, X, Y, Z);

		setTimeout(() => {
			clearInterval(addElementFunction);
			// console.log("Stop add element");
		}, 1000);	
		

		myList = document.createElement('ul');
		listItem = document.createElement('li');
		myString = xyz[5].toString();
		listItem.textContent = myString;
		myList.appendChild(listItem);
		app = document.querySelector('#xyzVals');
		app.appendChild(myList);
		// Create an unordered list
		// var list = document.createElement('ul');

		// Create a list item for each wizard
		// and append it to the list
		// xyz.forEach(function (val) {
		// 	var li = document.createElement('li');
		// 	li.textContent = val.join();
		// 	list.appendChild(li);
		// });

		// var app = document.querySelector('#xyzVals');
		// app.appendChild(list);

		// console.table(xyz);
	}

};

async function runTimer(){

	count = 1;
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

};