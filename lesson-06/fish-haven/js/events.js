const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        const towns = jsonObject['towns'];
        
        towns.forEach(town => {
            if (town.name == 'Preston') {
                const events = town.events;
                let section = document.getElementById('events');

                events.forEach(event =>{
                    let p = document.createElement('p');
                    p.textContent = event;
                    p.setAttribute('class', 'event-p')
                    section.appendChild(p);
                })
            }
        });     
      });