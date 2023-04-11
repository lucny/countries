// načtení dat ze služby Restcountries pomocí HTTP GET požadavku
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    // zde můžeme pracovat s daty a vytvořit seznam zemí
    console.log(data);
    // vytvoření seznamu zemí s jejich vlajkami a informacemi
    const countriesList = document.getElementById('countries-list');

    data.forEach(country => {
    const countryItem = document.createElement('div');
    const countryMapLink = document.createElement('a');
    const countryFlag = document.createElement('img');
    const countryName = document.createElement('h3');
    const countryPopulation = document.createElement('p');
    const countryCapital = document.createElement('p');

    list = countryItem.classList;
    list.add('col-6');
    list.add('col-sm-4');
    list.add('col-md-3');
    list.add('col-lg-2');
    list.add('col-xxl-1');
    list.add('mt-3');
    countryFlag.src = country.flags.png;
    countryFlag.setAttribute('class', 'img-fluid rounded');
    countryName.textContent = country.translations.ces.common;
    countryName.style.fontSize = '20px';
    countryPopulation.textContent = `Population: ${country.population}`;
    countryCapital.textContent = `Capital: ${country.capital}`;
    // countryMapLink.href = country.maps.openStreetMaps;
    countryMapLink.href = country.maps.googleMaps;
    countryMapLink.setAttribute('target', '_blank');
    countryMapLink.appendChild(countryName);    

    countryItem.appendChild(countryFlag);
    countryItem.appendChild(countryMapLink);
    countryItem.appendChild(countryPopulation);
    countryItem.appendChild(countryCapital);

    countriesList.appendChild(countryItem);
    });    
  })
  .catch(error => console.log(error));

