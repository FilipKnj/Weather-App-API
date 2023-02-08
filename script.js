const key = '669107b656774fa6d3f4e460820a7877'
const searchBtn = document.querySelector('#searchBtn');
const result = document.querySelector('.result');

const getWeather = () => {
    let cityName = document.querySelector('#cityVal').value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric`;

    

    if(cityName.length === 0){
        result.innerHTML = `<h3>Please Enter City Name</h3>`
    }else{
        fetch(url).then(res => res.json()).then(data => {
            result.innerHTML = `
            <h3 id='name'>${data.name}</h3>
            <p>${data.weather[0].main}</p>
            <p>${data.weather[0].description}</p>
            <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" alt="${data.weather[0].icon}">
            <h1>${data.main.temp} &#176</h1>
            <div class="max-min">
                <div class="min">
                    <span>min</span>
                    <p>${data.main.temp_min} &#176</p>
                </div>
                <div class="max">
                    <span>max</span>
                    <p>${data.main.temp_max} &#176</p>
                </div>
            </div>
            `;
        }).catch(() => {
            result.innerHTML = `<h3>Enter Valid City Name</h3>`
        });
    };

};


searchBtn.addEventListener('click',getWeather)