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
                h2.setAttribute('class', towns[i].name);
                card.appendChild(h2);
              
                mottoP.textContent = towns[i].motto;
                mottoP.setAttribute('class', towns[i].name);
                mottoP.setAttribute('id', 'mottoT');
                card.appendChild(mottoP);
              
                yearP.textContent = 'Year Founded: ' + towns[i].yearFounded;
                yearP.setAttribute('class', towns[i].name);
                card.appendChild(yearP);
      
                popP.textContent = 'Population: ' + towns[i].currentPopulation;
                popP.setAttribute('class', towns[i].name);
                card.appendChild(popP);
              
                rainP.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                rainP.setAttribute('class', towns[i].name);
                card.appendChild(rainP);
              
                image.setAttribute('src', towns[i].photo);
                image.setAttribute('class', towns[i].name + 'img');
                card.appendChild(image);
              
                document.querySelector('div.towns').appendChild(card);
            }
        }
        
      });