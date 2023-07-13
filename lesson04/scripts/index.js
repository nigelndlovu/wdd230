const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
    "Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

const date = new Date();
const dayName = daynames[date.getDay()];
const monthName = months[date.getMonth()];
const year = date.getFullYear();
const fulldate = `${dayName}, ${date.getDate()} ${monthName} ${year}`;
document.querySelector(".headerdate").innerHTML= fulldate;

document.querySelector('#getyear').textContent = year;

document.querySelector('#lastmod').textContent = document.lastModified;

const bannerdate = document.querySelector(".banner");
if( date.getDay() === 1 || date.getDay() === 2) {
    bannerdate.style.display = "flex";
} else {
    bannerdate.style.display = "none";
}

const visitsDisplay = document.querySelector("#num-visits");

let numVisits = Number(window.localStorage.getItem("numVisits-ls")) || 0;

function displayNumVisits (visitsDisplay, numVisits) {
    if (!visitsDisplay) {
        return;
    } else {
        if (numVisits != 0) {
            visitsDisplay.textContent = numVisits;
        } else {
            visitsDisplay.textContent = `This is your first visit!`;
        }
    }
}

displayNumVisits(visitsDisplay, numVisits);

numVisits++;

localStorage.setItem("numVisits-ls", numVisits);

