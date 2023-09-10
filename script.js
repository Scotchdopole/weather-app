





const apiKey = "f6270d31b06c165592a4b2e433a2c4c1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiUrl2 = "https://api.open-meteo.com/v1/forecast?daily=weathercode,temperature_2m_max,uv_index_max&hourly=temperature_2m&timezone=Europe%2FBerlin&";



const searchbox = document.querySelector(".search-box input");
const searchbtn = document.querySelector(".search-box button");

const weatherIcon = document.querySelector(".weather-condition");


async function checkWeather(city) {

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);




    if (response.status == "404") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
        document.querySelector(".search-box").style.borderBottomRightRadius = "0px";
        document.querySelector(".search-box").style.borderBottomLeftRadius = "0px";
    } else {

        var data = await response.json();


        console.log(data);



        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

        var windSpeed = Math.round(data.wind.speed)

        document.querySelector(".wind-speed").innerHTML = Math.round(windSpeed * 3.6) + " km/h";
        document.querySelector(".pressure").innerHTML = data.main.pressure + " hPa";








        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/cloud.png";
        } else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        } else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        } else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        } else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        } else {
            console.log("negr")
        }

        document.querySelector(".weather").style.display = "flex";

        document.querySelector(".search-box").style.borderBottomRightRadius = "0px";
        document.querySelector(".search-box").style.borderBottomLeftRadius = "0px";






        const lon = data.coord.lon;
        const lat = data.coord.lat;

        document.querySelector(".lat").innerHTML = lat
        document.querySelector(".lon").innerHTML = lon

        const response2 = await fetch(apiUrl2 + "lat=" + lat + "&lon=" + lon + "&appid=" + apiKey);
        var data2 = await response2.json();

        console.log(data2);


        const response3 = await fetch(apiUrl2 + "latitude=" + lat + "&longitude=" + lon);
        var data3 = await response3.json();


        console.log(data3.hourly.temperature_2m[0])

        document.querySelector(".uvindex").innerHTML = data3.daily.uv_index_max[0];

        document.querySelector(".forecastCard1Temp").innerHTML = Math.round(data3.daily.temperature_2m_max[1]) + "°C";
        document.querySelector(".forecastCard2Temp").innerHTML = Math.round(data3.daily.temperature_2m_max[2]) + "°C";
        document.querySelector(".forecastCard3Temp").innerHTML = Math.round(data3.daily.temperature_2m_max[3]) + "°C";
        document.querySelector(".forecastCard4Temp").innerHTML = Math.round(data3.daily.temperature_2m_max[4]) + "°C";

        var time1 = data3.daily.time[1];
        document.querySelector(".forecast1Time").innerHTML = time1.replace("2023-", "")

        var time2 = data3.daily.time[2];
        document.querySelector(".forecast2Time").innerHTML = time2.replace("2023-", "")

        var time3 = data3.daily.time[3];
        document.querySelector(".forecast3Time").innerHTML = time3.replace("2023-", "")

        var time4 = data3.daily.time[4];
        document.querySelector(".forecast4Time").innerHTML = time4.replace("2023-", "")


        if (data3.daily.weathercode[1] == 1 || data3.daily.weathercode[1] == 2 || data3.daily.weathercode[1] == 3) {
            document.querySelector(".forecastCard1").style.backgroundImage = "url('images/cloud.png')";
        } else if (data3.daily.weathercode[1] == 0) {
            document.querySelector(".forecastCard1").style.backgroundImage = "url('images/clear.png')";
        } else if (data3.daily.weathercode[1] == 45 || data3.daily.weathercode[1] == 48 || data3.daily.weathercode[1] == 51 || data3.daily.weathercode[1] == 53 || data3.daily.weathercode[1] == 55 || data3.daily.weathercode[1] == 56 || data3.daily.weathercode[1] == 57) {
            document.querySelector(".forecastCard1").style.backgroundImage = "url('images/mist.png')";
        } else if (data3.daily.weathercode[1] == 71 || data3.daily.weathercode[1] == 73 || data3.daily.weathercode[1] == 75 || data3.daily.weathercode[1] == 77 || data3.daily.weathercode[1] == 85 || data3.daily.weathercode[1] == 86) {
            document.querySelector(".forecastCard1").style.backgroundImage = "url('images/snow.png')";
        } else if (data3.daily.weathercode[1] == 61 || data3.daily.weathercode[1] == 63 || data3.daily.weathercode[1] == 65 || data3.daily.weathercode[1] == 66 || data3.daily.weathercode[1] == 67 || data3.daily.weathercode[1] == 80 || data3.daily.weathercode[1] == 81 || data3.daily.weathercode[1] == 82 || data3.daily.weathercode[1] == 95 || data3.daily.weathercode[1] == 99) {
            document.querySelector(".forecastCard1").style.backgroundImage = "url('images/rain.png')";
        } else {
            console.log("negr")
        }


        if (data3.daily.weathercode[2] == 1 || data3.daily.weathercode[2] == 2 || data3.daily.weathercode[2] == 3) {
            document.querySelector(".forecastCard2").style.backgroundImage = "url('images/cloud.png')";
        } else if (data3.daily.weathercode[2] == 0) {
            document.querySelector(".forecastCard2").style.backgroundImage = "url('images/clear.png')";
        } else if (data3.daily.weathercode[2] == 45 || data3.daily.weathercode[2] == 48 || data3.daily.weathercode[2] == 51 || data3.daily.weathercode[2] == 53 || data3.daily.weathercode[2] == 55 || data3.daily.weathercode[2] == 56 || data3.daily.weathercode[2] == 57) {
            document.querySelector(".forecastCard2").style.backgroundImage = "url('images/mist.png')";
        } else if (data3.daily.weathercode[2] == 71 || data3.daily.weathercode[2] == 73 || data3.daily.weathercode[2] == 75 || data3.daily.weathercode[2] == 77 || data3.daily.weathercode[2] == 85 || data3.daily.weathercode[2] == 86) {
            document.querySelector(".forecastCard2").style.backgroundImage = "url('images/snow.png')";
        } else if (data3.daily.weathercode[2] == 61 || data3.daily.weathercode[2] == 63 || data3.daily.weathercode[2] == 65 || data3.daily.weathercode[2] == 66 || data3.daily.weathercode[2] == 67 || data3.daily.weathercode[2] == 80 || data3.daily.weathercode[2] == 81 || data3.daily.weathercode[2] == 82 || data3.daily.weathercode[2] == 95 || data3.daily.weathercode[2] == 99) {
            document.querySelector(".forecastCard2").style.backgroundImage = "url('images/rain.png')";
        } else {
            console.log("negr")
        }


        if (data3.daily.weathercode[3] == 1 || data3.daily.weathercode[3] == 2 || data3.daily.weathercode[3] == 3) {
            document.querySelector(".forecastCard3").style.backgroundImage = "url('images/cloud.png')";
        } else if (data3.daily.weathercode[3] == 0) {
            document.querySelector(".forecastCard3").style.backgroundImage = "url('images/clear.png')";
        } else if (data3.daily.weathercode[3] == 45 || data3.daily.weathercode[3] == 48 || data3.daily.weathercode[3] == 51 || data3.daily.weathercode[3] == 53 || data3.daily.weathercode[3] == 55 || data3.daily.weathercode[3] == 56 || data3.daily.weathercode[3] == 57) {
            document.querySelector(".forecastCard3").style.backgroundImage = "url('images/mist.png')";
        } else if (data3.daily.weathercode[3] == 71 || data3.daily.weathercode[3] == 73 || data3.daily.weathercode[3] == 75 || data3.daily.weathercode[3] == 77 || data3.daily.weathercode[3] == 85 || data3.daily.weathercode[3] == 86) {
            document.querySelector(".forecastCard3").style.backgroundImage = "url('images/snow.png')";
        } else if (data3.daily.weathercode[3] == 61 || data3.daily.weathercode[3] == 63 || data3.daily.weathercode[3] == 65 || data3.daily.weathercode[3] == 66 || data3.daily.weathercode[3] == 67 || data3.daily.weathercode[3] == 80 || data3.daily.weathercode[3] == 81 || data3.daily.weathercode[3] == 82 || data3.daily.weathercode[3] == 95 || data3.daily.weathercode[3] == 99) {
            document.querySelector(".forecastCard3").style.backgroundImage = "url('images/rain.png')";
        } else {
            console.log("negr")
        }


        if (data3.daily.weathercode[4] == 1 || data3.daily.weathercode[4] == 2 || data3.daily.weathercode[4] == 3) {
            document.querySelector(".forecastCard4").style.backgroundImage = "url('images/cloud.png')";
        } else if (data3.daily.weathercode[4] == 0) {
            document.querySelector(".forecastCard4").style.backgroundImage = "url('images/clear.png')";
        } else if (data3.daily.weathercode[4] == 45 || data3.daily.weathercode[4] == 48 || data3.daily.weathercode[4] == 51 || data3.daily.weathercode[4] == 53 || data3.daily.weathercode[4] == 55 || data3.daily.weathercode[4] == 56 || data3.daily.weathercode[4] == 57) {
            document.querySelector(".forecastCard4").style.backgroundImage = "url('images/mist.png')";
        } else if (data3.daily.weathercode[4] == 71 || data3.daily.weathercode[4] == 73 || data3.daily.weathercode[4] == 75 || data3.daily.weathercode[4] == 77 || data3.daily.weathercode[4] == 85 || data3.daily.weathercode[4] == 86) {
            document.querySelector(".forecastCard4").style.backgroundImage = "url('images/snow.png')";
        } else if (data3.daily.weathercode[4] == 61 || data3.daily.weathercode[4] == 63 || data3.daily.weathercode[4] == 65 || data3.daily.weathercode[4] == 66 || data3.daily.weathercode[4] == 67 || data3.daily.weathercode[4] == 80 || data3.daily.weathercode[4] == 81 || data3.daily.weathercode[4] == 82 || data3.daily.weathercode[4] == 95 || data3.daily.weathercode[4] == 99) {
            document.querySelector(".forecastCard4").style.backgroundImage = "url('images/rain.png')";
        } else {
            console.log("negr")
        }

        



//         TESTER = document.getElementById('graph');



// var trace1 = {



//             x: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00",],

//             y: [data3.hourly.temperature_2m[0], data3.hourly.temperature_2m[1], data3.hourly.temperature_2m[2],
//             data3.hourly.temperature_2m[3], data3.hourly.temperature_2m[4], data3.hourly.temperature_2m[5],
//             data3.hourly.temperature_2m[6], data3.hourly.temperature_2m[7], data3.hourly.temperature_2m[8],
//             data3.hourly.temperature_2m[9], data3.hourly.temperature_2m[10], data3.hourly.temperature_2m[11],
//             data3.hourly.temperature_2m[12], data3.hourly.temperature_2m[13], data3.hourly.temperature_2m[14],
//             data3.hourly.temperature_2m[15], data3.hourly.temperature_2m[16], data3.hourly.temperature_2m[17],
//             data3.hourly.temperature_2m[18], data3.hourly.temperature_2m[19], data3.hourly.temperature_2m[20],
//             data3.hourly.temperature_2m[21], data3.hourly.temperature_2m[22], data3.hourly.temperature_2m[23],
//             data3.hourly.temperature_2m[24]],

//             type: 'bar',
//         } 

//         ],

//             {
//                 paper_bgcolor: "#00000000",
//                 margin: { t: 0, l: 20, r: 10 },
//                 padding: 0,
//             });
           
           

            var trace1 = {
                x: ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"],
                y: [data3.hourly.temperature_2m[0], data3.hourly.temperature_2m[1], data3.hourly.temperature_2m[2],
                data3.hourly.temperature_2m[3], data3.hourly.temperature_2m[4], data3.hourly.temperature_2m[5],
                data3.hourly.temperature_2m[6], data3.hourly.temperature_2m[7], data3.hourly.temperature_2m[8],
                data3.hourly.temperature_2m[9], data3.hourly.temperature_2m[10], data3.hourly.temperature_2m[11],
                data3.hourly.temperature_2m[12], data3.hourly.temperature_2m[13], data3.hourly.temperature_2m[14],
                data3.hourly.temperature_2m[15], data3.hourly.temperature_2m[16], data3.hourly.temperature_2m[17],
                data3.hourly.temperature_2m[18], data3.hourly.temperature_2m[19], data3.hourly.temperature_2m[20],
                data3.hourly.temperature_2m[21], data3.hourly.temperature_2m[22], data3.hourly.temperature_2m[23],
                data3.hourly.temperature_2m[24]],
                type: "bar"
                
            };
            
            var data = [trace1];
            
            var layout = {
                paper_bgcolor: "#00000000",
                margin: { t: 0, l: 20, r: 10 },
                padding: 0,
                showlegend: false,
                
            };
            
            Plotly.newPlot(document.querySelector("#graph"), data, layout, {staticPlot: true});












        console.log(lat + "lat");
        console.log(lon + "lon");












    }
}









searchbtn.addEventListener("click", () => {
    checkWeather(searchbox.value);
})




var input = document.getElementById("location-search");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        document.getElementById("search").click();
    }
});





var errorButton = document.querySelector(".search");
errorButton.onclick = function () {

    document.querySelector(".error").style.display = "none"

};


// var themeSwitch = document.getElementById("themeSwitch");
// themeSwitch.onclick = function () {

//     if (document.querySelector(".weather").style.backgroundColor == "white"){
//         document.querySelector(".weather").style.backgroundColor = "#212121"
//         document.querySelector("body").style.backgroundColor = "black"
//         document.querySelector(".search-box").style.backgroundColor = "#212121"
//         document.querySelector("body").style.color = "white"
//         document.querySelector("input").style.backgroundColor = "#212121"
//         document.querySelector("input").style.color = "white"
//         document.querySelector("input").style: = "white"
//         document.querySelector(".search").style.backgroundColor = "#303030"
//     }
//     else{
//         document.querySelector(".weather").style.backgroundColor = "white"
//         document.querySelector("body").style.backgroundColor = "#212121"
//         document.querySelector(".search-box").style.backgroundColor = "white"
//         document.querySelector("body").style.color = "black"
//         document.querySelector("input").style.backgroundColor = "white"
//         document.querySelector("input").style.color = "black"
//         document.querySelector(".search").style.backgroundColor = "aliceblue"
//     }

// };


checkWeather();



