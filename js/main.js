let newsWeather;
let newsWeatherc;
let newsWeathera;
let newsWeathers;
let searchCountri=document.getElementById('searchCountri');

 async function getNewWeather( category = 'cairo')
 {
    let response =await fetch(`https://api.weatherapi.com/v1/forecast.json?key=3398f7fbf7274337b8914631220306&days=3&q=${category}`);
    finaleResult = await response.json();
    
    newsWeather = finaleResult.location;
    newsWeatherc = finaleResult.forecast.forecastday;
     displayWeather1();
 
 }
 getNewWeather();

 function displayWeather1()
 {
    let cartona1=``;
   
        cartona1 += ` 
        <div class="col-lg-4 g-0 ">
            <div class="card h-100 rounded-3 bg-back-div">
                <div class="bg-back d-flex justify-content-between  px-3 py-2">
                    <div class="colore-he-crud">${newsWeatherc[0].date}</div>
                    <div class="colore-he-crud"></div>
                </div>
                <div class="card-body">
                    <h5 class="card-title my-4 colore-he-crud">${newsWeather.name}</h5>
                    <div class="d-flex justify-content-around">

                    <div class="card-text fs-1 fw-bolder d-inline-block text-white ">${newsWeatherc[0].day.maxtemp_c}<Sub>o</Sub>C</div>
                    <div class=""><img src="https:${newsWeatherc[0].day.condition.icon}" alt="" width="48"></div>
                    </div>
                    <div class=" fs-6 my-3 color-sum">${newsWeatherc[0].day.condition.text}</div>
                    <span class="px-1 colore-he-crud"> <img class="pe-1" src="images/icon-umberella.png" alt="">20%</span>
                    <span class="px-2 colore-he-crud"> <img class="pe-1" src="images/icon-wind.png" alt="">18km/h</span>
                    <span class="px-1 colore-he-crud"> <img class="pe-1" src="images/icon-compass.png" alt="">East</span>
                </div>
            </div>
        </div>
        
        
        <div class="col-lg-4 g-0">
                 <div class="card h-100 rounded-3 text-center bg-he-crud">
                     <div class=" bg-back d-flex justify-content-center align-items-center px-3 py-2 mb-2">
                         <div class="colore-he-crud">${newsWeatherc[1].date}</div>
                 </div>
                <div class="card-body pb-5">
                    <div class=" my-4"><img src="https:${newsWeatherc[1].day.condition.icon}" alt="" width="48"></div>
                        <div class="card-text fs-4 fw-bolder d-block text-white ">${newsWeatherc[2].day.maxtemp_c}<Sub>o</Sub>C</div>
                        <small class="colore-he-crud">${newsWeatherc[1].day.mintemp_c}
                             <sub>o</sub>
                        </small>
                        <div class="fs-6 my-3 color-sum mb-5">${newsWeatherc[1].day.condition.text}</div>
                    </div>
                </div>
        </div>

             <div class="col-lg-4 g-0 rounded-3 ">
        <div class="card h-100 rounded- text-center bg-back-div">
            <div class="bg-back d-flex justify-content-center align-items-center px-3 py-2 mb-2">
                <div class="colore-he-crud">${newsWeatherc[2].date}</div>
            </div>
            <div class="card-body pb-5">
                <div class="my-4"><img src="https:${newsWeatherc[2].day.condition.icon}" alt="" width="48"></div>
                <div class="card-text fs-4 fw-bolder d-block text-white ">${newsWeatherc[2].day.maxtemp_c}<Sub>o</Sub>C</div>
                <small class="colore-he-crud">${newsWeatherc[2].day.mintemp_c}
                    <sub>o</sub>
                </small>
                    <div class="fs-6 my-3 color-sum">${newsWeatherc[2].day.condition.text}</div>
                </div>
            </div>
        </div>
    </div>`

        document.getElementById('weatherNew').innerHTML=cartona1;
}
