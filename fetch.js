function fetchData() {
  // Retrieving json array from query.php
    fetch("http://og09ieq.ngrok.io/query.php") 
      .then((res) => res.json())
      .then((data) => {

        const temperature = document.getElementById("temperature_value");
        temperature.textContent = data.temp_value + " °C";
        const pressure = document.getElementById("pressure_value");
        pressure.textContent = data.pressure_value + " Pa";
        const humidity = document.getElementById("humidity_value");
        humidity.textContent = data.humid_value + " %";

        var temp_rating = Math.round(10 - (Math.abs(data.temp_value-19))); /*Function for finding rating of the temperature */
        if (temp_rating < 0) temp_rating = 0;
        const temp_rating_value = document.getElementById("temp-rating");
        const temp_warning = document.querySelectorAll('.temp-warning'); /*controls warning sign display*/
        temp_rating_value.textContent = temp_rating + "/10";
        document.documentElement.style /*Sets Css variable to the rating value so it can show in progress bar */
          .setProperty('--temp_rating', String(temp_rating));
        
        var press_rating = Math.round(10 - (10 / (1050 - 950)) * (data.pressure_value - 950));/*Function for finding rating of the pressure */
        if (press_rating < 0) press_rating = 0;
        if (data.pressure_value < 950) press_rating = 10;
        const press_rating_value = document.getElementById("press-rating");
        const press_warning = document.querySelectorAll('.press-warning');
        press_rating_value.textContent = press_rating + "/10";
        document.documentElement.style /*Sets Css variable to the rating value so it can show in progress bar */
          .setProperty('--press_rating', String(press_rating));
        
        var humid_rating = Math.round(Math.abs((10/Math.pow(40,2)) * data.humid_value * (data.humid_value - 80))); /*Function for finding rating of the humidity */
        if (humid_rating < 0) humid_rating = 0;
        const humid_rating_value = document.getElementById("humid-rating");
        const humid_warning = document.querySelectorAll('.humid-warning'); 
        humid_rating_value.textContent = humid_rating + "/10";
        document.documentElement.style /*Sets Css variable to the rating value so it can show in progress bar */
          .setProperty('--humid_rating', String(humid_rating));


        // Changing temp card properties based on rating
        const tempText = document.querySelector('#temp-text');
        if (temp_rating >= 5 && temp_rating < 8) {
          document.documentElement.style /*Sets Css bar color depending on rating */
            .setProperty('--tempbar-color', '#FFB833');
          temp_warning.forEach((temp_warning) => {
            temp_warning.style.visibility = "visible"; 
          });
          tempText.textContent = 'Room temperature is slightly out of range. Typical temperature range of a surgery room is 18-20 degrees';
        }
        else if (temp_rating >= 8){
          document.documentElement.style 
            .setProperty('--tempbar-color', '#247F36');
          temp_warning.forEach((temp_warning) => {
            temp_warning.style.visibility = "hidden"; 
          });
          tempText.textContent = 'Room temperature is within optimum range';
        }
        else {
          document.documentElement.style 
            .setProperty('--tempbar-color', '#AD1F2D');
          temp_warning.forEach((temp_warning) => {
            temp_warning.style.visibility = "visible"; 
          });
          tempText.textContent = 'Room temperature is greatly out of range. Typical temperature range of a surgery room is 18-20 degrees';
        }

        // Changing press card properties based on rating
        const pressText = document.querySelector('#press-text');
        if (press_rating >= 5 && press_rating < 8) {
          document.documentElement.style /*Sets Css bar color depending on rating */
            .setProperty('--pressbar-color', '#FFB833');
          press_warning.forEach((press_warning) => {
            press_warning.style.visibility = "visible"; 
          });
          pressText.textContent = 'Room pressure is slightly out of range. A low barometric pressure around 950 hPa is an indication of a higher Oxygen concentration and is thus preferable';
        }
        else if (press_rating >= 8){
          document.documentElement.style 
            .setProperty('--pressbar-color', '#247F36');
          press_warning.forEach((press_warning) => {
            press_warning.style.visibility = "hidden"; 
          });
          pressText.textContent = 'Room pressure is within optimum range';
        }
        else {
          document.documentElement.style 
            .setProperty('--pressbar-color', '#AD1F2D');
          press_warning.forEach((press_warning) => {
            press_warning.style.visibility = "visible"; 
          });
          pressText.textContent = 'Room temperature is greatly out of range. A low barometric pressure around 950 hPa is an indication of higher Oxygen concentration and is thus preferable';
        }

        // Changing humid card properties based on rating
        const humidText = document.querySelector('#humid-text');
        if (humid_rating >= 5 && humid_rating < 8) {
          document.documentElement.style /*Sets Css bar color depending on rating */
            .setProperty('--humidbar-color', '#FFB833');
          humid_warning.forEach((humid_warning) => {
            humid_warning.style.visibility = "visible"; 
          });
          humidText.textContent = 'Room humidity is slightly out of range. Typical humidity range of a surgery room is around 40%';
        }
        else if (humid_rating >= 8){
          document.documentElement.style 
            .setProperty('--humidbar-color', '#247F36');
          humid_warning.forEach((humid_warning) => {
            humid_warning.style.visibility = "hidden"; 
          });
          humidText.textContent = 'Room humidity is within optimum range';
        }
        else {
          document.documentElement.style 
            .setProperty('--humidbar-color', '#AD1F2D');
          humid_warning.forEach((humid_warning) => {
            humid_warning.style.visibility = "visible"; 
          });
          humidText.textContent = 'Room humidity is greatly out of range. Typical humidity range of a surgery room is around 40%';
        }

      });
  }
  window.addEventListener('load', function () {
    // Your document is loaded.
    fetchData();
    var fetchInterval = 4000; // 2 seconds.
    setInterval(fetchData, fetchInterval);
  });
