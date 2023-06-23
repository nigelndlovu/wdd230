const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

    prophets.forEach((prophet) => {
        // Create elements to add to the document
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let portrait = document.createElement('img');
        let birthDate = document.createElement('birthdate');
        let birthPlace = document.createElement('birthplace');
        let deathDate = document.createElement('death');
        let age = document.createElement('age');

        // Change the textContent property of the h2 element to contain the prophet's full name
        h2.textContent = `${prophet.name} ${prophet.lastname}`;
        birthDate.textContent = `Date of birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of birth: ${prophet.birthplace}`;
        deathDate.textContent = `Date of death: ${prophet.death}`;

        // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order} Latter-day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Add/append the section(card) with the h2 element
        card.appendChild(h2);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(deathDate);
        card.appendChild(portrait);

        cards.appendChild(card);    
    });
}