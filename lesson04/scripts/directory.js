const url = 'json/data.json';

async function getDirectoryData() {
  const response = await fetch(url);
  const data = await response.json();
  //console.table(data.details);
  displayDetails(data.details);
}

getDirectoryData();

const displayDetails = (details) => {
  const cards = document.querySelector('div.cards');

  details.forEach((detail) => {
    // Create elements to add to the document
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let member = document.createElement('p');
    let weburl = document.createElement('a');

    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent = `${detail.name}`;
    address.textContent = `${detail.address}`;
    phone.textContent = `${detail.phone}`;
    member.textContent = `${detail.member}`;
    weburl.textContent = `${detail.weburl}`;
    weburl.setAttribute('href', detail.weburl);

    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', detail.imageurl);
    portrait.setAttribute('alt', `Logo icon for ${detail.name}`);
    portrait.setAttribute('loading', 'lazy');
    //portrait.setAttribute('width', '340');
    //portrait.setAttribute('height', '440');

    // Add/append the section(card) with the h2 element
    card.appendChild(portrait);
    card.appendChild(h2);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(member);
    card.appendChild(weburl);
    
    cards.appendChild(card);    
  });
}

const maingrid = document.querySelector('.cards')
const gridbutton = document.querySelector('#gridbtn');
const listbutton = document.querySelector('#listbtn');


gridbutton.addEventListener('click', () => {maingrid.classList.add('cards')}, false);
listbutton.addEventListener('click', () => {maingrid.classList.remove('cards')}, false);