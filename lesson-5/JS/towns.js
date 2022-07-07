const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const towns = jsonObject['towns'];

        for (let i = 0; i < towns.length; i++ ) {
            if (towns[i].name == 'Preston' || towns[i].name == 'Soda Springs' || towns[i].name == 'Fish Haven') {
                let card = document.createElement('section');
                let h2 = document.createElement('h2');
                let mottoP = document.createElement('p');
                let yearP = document.createElement('p');
                let popP = document.createElement('p');
                let rainP = document.createElement('p');
                let image = document.createElement('img');
                h2.textContent = towns[i].name;
                card.appendChild(h2);
              
                mottoP.textContent = towns[i].motto;
                card.appendChild(mottoP);
              
                yearP.textContent = 'Year Founded: ' + towns[i].yearFounded;
                card.appendChild(yearP);
      
                popP.textContent = 'Population: ' + towns[i].currentPopulation;
                card.appendChild(popP);
              
                rainP.textContent = 'Annual Rain Fall' + towns[i].averageRainfall;
                card.appendChild(yearP);
              
                image.setAttribute('src', towns[i].photo);
                card.appendChild(image);
              
                document.querySelector('div.towns').appendChild(card);
            }
        }
        
      });