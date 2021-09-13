const inputCityName = document.getElementById('input-city');
const displayWeather = document.getElementById('disply-weather');
const erroHandle =  document.getElementById('error-handle');
const errorName = document.getElementById('error-name');
const weather_Key = `df0f742848222a1288a3b4f7498b7506`;


const searchWeather = () =>{
    const inputSearchCity = inputCityName.value;

    //error handle for empty input
    if(inputSearchCity === ""){
        erroHandle.innerText ="Your search bar is empty!";
        displayWeather.style.display = ('none');
    }
    else{
        displayWeather.style.display = ('block');
        erroHandle.style.display = ('none')
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputSearchCity}&appid=${weather_Key}&units=metric`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayCity(data))
    
    
    //clear previous input value
    inputCityName.value = '';
    displayWeather.innerHTML ='';
}

const displayCity = city => {
    
//worng city name error handle
    if(city.cod === "404"){
        errorName.innerText = "Worng input, Please input a correct one!"
    }
    else{
        errorName.innerText ="";
    }
    
    const div = document.createElement('div');
    div.classList.add('text-center');
    div.innerHTML = `
                <img src="http://openweathermap.org/img/wn/${city.weather[0].icon}.png" width="100px" height="100px" alt="">
                <h1 class="fw-900">${city.name}</h1>
                <h3>${city.main.temp}°c</h3>
                <h4>${city.weather[0].main}</h4> 
                <h4>Humidity: ${city.main.humidity}%</h4> 
    `;
    displayWeather.appendChild(div);


}

