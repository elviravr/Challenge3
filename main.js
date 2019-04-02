window.onload = function(){
document.getElementById("toggle2").style.visibility= "hidden";
}



//tweenmax
TweenMax.from("form", 1, {ease:Expo.easeOut, right:1600});

function getWeather() {

	var url = "https://api.openweathermap.org/data/2.5/weather"; //url van de api openweathermap
	var apiKey ="8625c7a66def9592d2b2f04bcda00a8d"; //api key
	var city = document.getElementById("city").value; //haalt de waarde op van het id city
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city; //vormt de request

// fetch weer
	fetch(request)

// in JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
// render weer
	.then(function(response) {
		onAPISucces(response);	
	})
	
// catch error
	.catch(function (error) {
		onAPIError(error);
	});
}
//als de API werkt
function onAPISucces(response) { 

	var celsius = Math.floor(response.main.temp - 273.15); //haalt temp op en zorgt voor temp in celsius
	var wind = Math.round(response.wind.speed * 3.6); //haalt windkracht op en zorgt voor juist aantal
	var name = response.name; //haalt naam van de stad op
	var type = response.weather[0].description; //haalt de info op van het weer
	var press = response.main.pressure;//haalt de luchtdruk op 
	
	var degrees = document.getElementById('temperature'); //plaatst de temperatuur in id temperature
	var windD = document.getElementById('windspeed'); //plaatst de windkracht in id windspeed
	var nameD = document.getElementById('cityName'); //plaatst de stadnaam in id cityName
	var weatherD = document.getElementById('weatherInfo'); //plaatst de weersomschrijving in id weatherInfo
	var pressureD = document.getElementById('pressure'); //plaatst de weersomschrijving in id

	degrees.innerHTML = celsius + "&#176;C"; //zet de info in de innerHTML en zorgt voor 'graden celsius' achter de temperatuur
	windD.innerHTML = wind + " km/h"; //zet de info in de innerHTML en zorgt voor km/h achter de windsnelheid
	nameD.innerHTML = name; //zet de info in de innerHTML en zorgt voor 'graden celsius' achter de temperatuur
	weatherD.innerHTML = type; //zet de info in de innerHTML
	pressureD.innerHTML = press; //zet de info in de innerHTML

	document.getElementById("toggle2").style.visibility= "visible"; //als het is gelukt, dan dit id laten zien
	document.getElementById("toggle").style.visibility= "hidden"; //als het niet is gelukt, dit id laten zien
	document.getElementById("toggle").style.margin= "-20px 0px 0px 0px"; //als het is gelukt, dan tekst verplaatsen zodat info op de juiste plek staat

//verkrijg icoon door cases van het weer
	switch (response.weather[0].icon) {
		case "01d":
		return weatherIcon.src =  'http:openweathermap.org/img/w/01d.png';
		break;

		case "01n":
		return weatherIcon.src =  'http:openweathermap.org/img/w/01n.png';
		break;

		case "02d":
		return weatherIcon.src =  'http:openweathermap.org/img/w/02d.png';
		break;

		case "02n":
		return weatherIcon.src =  'http:openweathermap.org/img/w/02n.png';
		break;

		case "03d":
		return weatherIcon.src =  'http:openweathermap.org/img/w/03d.png';
		break;

		case "03n":
		return weatherIcon.src =  'http:openweathermap.org/img/w/03n.png';
		break;

		case "04d":
		return weatherIcon.src =  'http:openweathermap.org/img/w/04d.png';
		break;

		case "04n":
		return weatherIcon.src =  'http:openweathermap.org/img/w/04n.png';
		break;

		case "09d":
		return weatherIcon.src =  'http:openweathermap.org/img/w/09d.png';
		break;

		case "09n":
		return weatherIcon.src =  'http:openweathermap.org/img/w/09n.png';
		break;

		case "10d":
		return weatherIcon.src =  'http:openweathermap.org/img/w/10d.png';
		break;

		case "10n":
		return weatherIcon.src =  'http:openweathermap.org/img/w/10n.png';
		break;

		case "11d":
		return weatherIcon.src =  'http:openweathermap.org/img/w/11d.png';
		break;

		case "11n":
		return weatherIcon.src =  'http:openweathermap.org/img/w/11n.png';
		break;

		case "13d":
		return weatherIcon.src =  'http:openweathermap.org/img/w/13d.png';
		break;

		case "13n":
		return weatherIcon.src =  'http:openweathermap.org/img/w/13n.png';
		break;

		case "50d":
		return weatherIcon.src =  'http:openweathermap.org/img/w/50d.png';
		break;

		case "50n":
		return weatherIcon.src =  'http:openweathermap.org/img/w/50n.png';
		break;

		default:
		console.log('No image found for this type of weather.');
	}
}

function getMap() {

	var url = "https://api.openweathermap.org/data/2.5/weather"; //url van de api openweathermap
	var apiKey ="8625c7a66def9592d2b2f04bcda00a8d"; //api key
	var city = document.getElementById("city").value; //haalt de waarde op van het id city
	var request = url + "?" + "appid=" + apiKey + "&" + "q=" + city; //vormt de request

// fetch map
	fetch(request)

// in JSON format
	.then(function(response) {
		if(!response.ok) throw Error(response.statusText);
		return response.json();
	})
	
// render map
	.then(function(response) {
		onAPISucces2(response);	
	})
	
// catch error
	.catch(function (error) {
		onAPIError2(error);
	});
}

//als de API werkt
function onAPISucces2(response) { 

		var lon = response.coord.lon; //haalt coordinaten op van openweathermap
		var lat = response.coord.lat; //haalt coordinaten op van openweathermap

//maak locaties aan
		function testObjectsEvents(map, logEvent) {

// image marker object aanmaken met coordinaten
		  var image1Marker = new H.map.Marker(new H.geo.Point(lat, lon), {
		    icon: new H.map.Icon('iconmap.png')
		  });

// object van container verkrijgen om marker te gebruiken
		  var container = new H.map.Group({
		    objects: [image1Marker]
		  });

// alle map objecten toevoegen aan object collectie zodat ze in de map te zien zijn
		  map.addObject(container);
		}

//communicatie krijgen met platform api
		var platform = new H.service.Platform({
		  app_id: 'WRRYJVfw5Eg7UbCo86o2',
		  app_code: 'J5S-2WaMGe2Qy68W6LnkpQ',
		  useHTTPS: true
		});
		var pixelRatio = window.devicePixelRatio || 1;
		var defaultLayers = platform.createDefaultLayers({
		  tileSize: pixelRatio === 1 ? 256 : 512,
		  ppi: pixelRatio === 1 ? undefined : 320
		});

// map initaliseren
		var map = new H.Map(document.getElementById('map'), defaultLayers.normal.map, {
		  // welke kant je van de map ziet en hoeveel ingezoomd
		  center: new H.geo.Point(lat, lon),
		  zoom: 2,
		  pixelRatio: pixelRatio
		});

// map interactief maken & MapEvents maakt het event systeem mogelijk, ook dmv zoom
		var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// default UI map aanmaken
		var ui = H.ui.UI.createDefault(map, defaultLayers, 'en-US');

// helper voor logging events
		function logEvent(evt) { 
		  var entry = document.createElement('li');
		  entry.className = 'log-entry';
		  entry.textContent = ['event "', evt.type, '" @ '+ evt.target.getData()].join('');
		  logContainer.insertBefore(entry, logContainer.firstChild);
		}

		testObjectsEvents(map, logEvent);
}

//als de API niet werkt
function onAPIError(error) { 
//zet error in console
	console.error('Fetch request failed WeatherINFO', error); 
//geef alert weer
	alert('Oh no, something went wrong! Did you enter a valid city?'); 
}

//als de 2e API niet werkt
function onAPIError2(error) {
//zet error in console
	console.error('Fetch request failed MAP', error); 
}

//geeft info bij klik op id search
document.getElementById("search").onclick = function(){ 
	getWeather();
	getMap();
};