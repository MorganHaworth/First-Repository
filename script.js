function checkInput() {
    let inputElement = document.getElementById("greeting");
    alert(inputElement.value);

    if (inputElement.value === "red") {
        inputElement.style.border = "2px solid red";
    } 
    /* if they type "carrot", the border turns orange */
    else if (inputElement.value == "orange") {
        inputElement.style.border = "2px solid orange";
    }
    else {
        inputElement.style.border = "2px solid gray";
    }
}

function loadPage() {
    getWeather();
    generateListItems();
}

async function getWeather() {
    // fetch() function defaults to GET Method
    let response = await fetch("https://api.weather.gov/gridpoints/TOP/31,80/forecast");
    let JSONData = await response.json();
    console.log(JSONData);
    //JSONData.properties.periods[i].shortForecast;

    /* After - Class Additions START */ 
    // We want this function just to get the forecast periods information
    generateWeatherElements(JSONData.properties.periods);
    /* After - Class Additions END */
}

/* After - Class Additions START */ 
// we receive the forecast information as 'weather' or whatever we want
function generateWeatherElements(weather) {
    //we grab the element that's going to contain the forecast cards
    let forecast = document.getElementById("forecast");
    console.log(forecast);
    //we loop through each forecast item from the API call with for loop
    for (let i = 0; i < weather.length; i++) {
        //create a div that contains information for each card
        let forecastCard = document.createElement("div");

        // the div will have a paragraph with 'detailedForecast' value
        let forecastParagraph = document.createElement("p");
        forecastParagraph.innerHTML = weather[i].detailedForecast;

        // the div will have an image for an icon representing the forecast
        let forecastImage = document.createElement("img");
        forecastImage.src = weather[i].icon;

        // add the paragraph and image to the div
        forecastCard.appendChild(forecastImage);
        forecastCard.appendChild(forecastParagraph);

        // add the div to our forecast element
        forecast.appendChild(forecastCard);
    }
}
/* After - Class Additions END */

function generateListItems() {
    let items = ["HTML", "CSS", "JavaScript"];
    //             0       1          2     
    let bulletList = document.getElementById("generatedList");
    for(let i = 0; i < items.length; i++) {
        /* Generate a <li></li> for each value */
        let newBullet = document.createElement("li");
        /* Code to add text to newBullet element */
        newBullet.innerHTML = "Learn " + items[i];
        /* Add that <li></li> to our bulletList*/
        bulletList.appendChild(newBullet);
    }
}