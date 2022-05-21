const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);

window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};

let date = new Date();
let year = date.getFullYear();
document.querySelector('#getyear').textContent = year;

document.querySelector('#lastmod').textContent = document.lastModified;

//const daynames = [
//	"Sunday",
//	"Monday",
//	"Tuesday",
//	"Wednesday",
//	"Thursday",
//	"Friday",
//	"Saturday"
//];
//const months = [
//	"January",
//	"February",
//	"March",
//	"April",
//	"May",
//	"June",
//	"July",
//	"August",
//	"September",
//	"October",
//	"November",
//	"December"
//];
//const d = new Date();
//const dayName = daynames[d.getDay()];
//const monthName = months[d.getMonth()];
//const year = d.getFullYear();
//document.querySelector('#getyear').textContent = year;
//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
//const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year}`;
//document.getElementById("todaydate").textContent = fulldate;
//document.getElementById("currentdate").textContent = fulldate;
// *****************************