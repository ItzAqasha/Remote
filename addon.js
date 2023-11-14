//This is all the extra function
//that'll make my life easier

//Local Storage category
//Check Support
function storageSupport() {
	return typeof Storage !== "undefined";
}

//Save data
function saveData(key, indexOrValue, value) {
	if (value) {
		localStorage.setItem(key + indexOrValue, value);
	} else {
		localStorage.setItem(key, indexOrValue);
	}
}

//Load data
function loadData(key, index) {
	return localStorage.getItem(key + index);
}

//Delete data
function delData(key, index) {
	localStorage.removeItem(key + index);
}

//Math category
//Random
function Random(min, max) {
	return Math.random() * (max - min) + min;
}

//Http Category
//Without callback
//Get
function httpGET(url) {
	var http = new XMLHttpRequest();
	http.open("GET", url, true);
	http.send();
}

//Post
function httpPOST(url, object = {}) {
	var http = new XMLHttpRequest();
	http.open("POST", url, true);

	var json = JSON.stringify(dataObject);

	http.send(json)
}

//With callback
//Get
function httpGETCallback(url, callback) {
	var http = new XMLHttpRequest();
	http.open("GET", url, true);

	http.onreadystatechange = function () {
		if (http.readyState === XMLHttpRequest.DONE) {
			if (http.status >= 200 && http.status < 300) {
				callback(null, http.responseText);
			} else {
				callback("Error: " + http.status, null);
			}
		}
	};

	http.send();
}

//Post
function httpPOSTCallback(url, object = {}, callback) {
	var http = new XMLHttpRequest();
	http.open("POST", url, true);

	http.setRequestHeader("Content-Type", "application/json");
	var json = JSON.stringify(object);

	http.onreadystatechange = function () {
		if (http.readyState === XMLHttpRequest.DONE) {
			if (http.status >= 200 && http.status < 300) {
				callback(null, http.responseText);
			} else {
				callback("Error: " + http.status, null);
			}
		}
	};

	http.send(json);
}

//Handle API respone
function handleApiResponse(error, response) {
	if (error) {
		console.error("Error:", error);
	} else {
		console.log("Response:", response);
	}
}

//String Category
//Reverse
String.prototype.reverse = function() {
	let reversedString = "";
	for (let i = this.length - 1; i >= 0; i--) {
		reversedString += this[i];
	}
	return reversedString;
}

//Create Random String
function randomString(length) {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let randomString = '';
	for (let i = 0; i < length; i++) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		randomString += characters.charAt(randomIndex);
	}
	return randomString;
}

// Date and Time Category (ChatGPT)
// Get current date and time as a string
function getCurrentDateTime() {
	const currentDate = new Date();
	return currentDate.toString();
}

// Format a given date
function formatDate(date) {
	const formattedDate = new Date(date);
	return formattedDate.toLocaleDateString();
}

// Calculate the difference between two dates in days
function dateDiffInDays(date1, date2) {
	const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
	const firstDate = new Date(date1);
	const secondDate = new Date(date2);

	const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay));
	return diffDays;
}

// Array Category (ChatGPT)
// Double each element in the array
function doubleArrayElements(arr) {
	return arr.map(element => element * 2);
}

// Filter positive numbers from the array
function filterPositiveNumbers(arr) {
	return arr.filter(element => element > 0);
}

// Sum all elements in the array
function sumArrayElements(arr) {
	return arr.reduce((total, element) => total + element, 0);
}


// Function load successful 'teller'
console.log("All of the add-on function loaded succesfully. System can now use these function");