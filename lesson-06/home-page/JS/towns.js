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
                mottoP.setAttribute('class', 'mottoT');
                card.appendChild(mottoP);
              
                yearP.textContent = 'Year Founded: ' + towns[i].yearFounded;
                yearP.setAttribute('class', towns[i].name);
                yearP.setAttribute('id', towns[i].name + 'year');
                card.appendChild(yearP);
      
                popP.textContent = 'Population: ' + towns[i].currentPopulation;
                popP.setAttribute('class', towns[i].name);
                popP.setAttribute('id', towns[i].name + 'pop');
                card.appendChild(popP);
              
                rainP.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
                rainP.setAttribute('class', towns[i].name);
                rainP.setAttribute('id', towns[i].name + 'rainfall');
                card.appendChild(rainP);
              
                if (towns[i].name == 'Preston') {
                  image.setAttribute('src', 'home-page/images/pioneer-historic-byway-colors-from-grace-to-preston-0296da.jpg');
                }else if (towns[i].name == 'Fish Haven') {
                  image.setAttribute('src', 'home-page/images/rsz_fish_haven.jpg');
                } else {
                  image.setAttribute('src', 'home-page/images/1132021048_31110188a8_w.jpg');
                }
                image.setAttribute('class', towns[i].name + 'img');
                image.setAttribute('alt', towns[i].name);
                card.appendChild(image);
                document.querySelector('div.towns').appendChild(card);
            }
        }
        
      });