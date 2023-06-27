// select HTML elements to edit
const currentTemp = document.querySelector('#current-temp');
const humidity = document.querySelector('#humid');
const windSpeed = document.querySelector('#speed');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = `https://api.openweathermap.org/data/2.5/weather?q=Bulawayo&units=metric&appid=1e17410c85c8f7a887d37b2820fbeb24`;

async function apiFetch() {
	try {
		const response = await fetch(url);
		if (response.ok) {
			const data = await response.json();
			console.log(data);
			displayResults(data);
		} else {
			throw Error(await response.text());
		}
	} catch (error) {
		console.log(error);
	}
}

apiFetch();

function displayResults(weatherData) {
	currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(1)}</strong>`;
	humidity.innerHTML = `<strong>${weatherData.main.humidity.toFixed(0)}</strong>`;
	windSpeed.innerHTML = `<strong>${weatherData.wind.speed.toFixed(1)}</strong>`;

	const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
	const desc = weatherData.weather[0].description;
	weatherIcon.setAttribute('src', iconsrc);
	weatherIcon.setAttribute('alt', desc);
	captionDesc.textContent = desc;
}