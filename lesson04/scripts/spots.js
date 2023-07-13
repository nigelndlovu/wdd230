const url = 'json/data.json';

async function getBusinessData() {
  let directoryList = []
  const response = await fetch(url);
  const data = await response.json();
 
  directoryList = (data.directory).filter(item => item.member == "Gold" || item.member == "Silver")
  
  let spotlightarray = []
  for(let i = 0; i < 3; i++) {
    let random = Math.floor(Math.random()*directoryList.length)
    spotlightarray.push(directoryList.splice(random,1))
  }
  console.log(spotlightarray)
  displayDirectory(spotlightarray);
}

getBusinessData();
   
  function displayDirectory (businesses) {
    
  const spotlightContainer = document.querySelector('div#spotlights');

  
  businesses.forEach((business) => {
    spotlightContainer.innerHTML += `
      <section>
      <img src = "${business[0].imageurl}" alt = "${business[0].name} logo"/>
      <h2>${business[0].name}</h2>
      <p>${business[0].phone}</p>
      <p>${business[0].member}</p>
      </section>
      `  
  }) 
} 