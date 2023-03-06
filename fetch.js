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
        
        var temp_rating = Math.round(10 - (Math.abs(data.temp_value-19))); /*Function for finding rating of the pressure */
        if (temp_rating < 0) temp_rating = 0;
        const press_rating_value = document.getElementById("press-rating");
        const press_warning = document.querySelectorAll('.press-warning');
        press_rating_value.textContent = temp_rating + "/10";
        document.documentElement.style /*Sets Css variable to the rating value so it can show in progress bar */
          .setProperty('--press_rating', String(temp_rating));
        
        var temp_rating = Math.round(10 - (Math.abs(data.temp_value-19))); /*Function for finding rating of the humidity */
        if (temp_rating < 0) temp_rating = 0;
        const humid_rating_value = document.getElementById("humid-rating");
        const humid_warning = document.querySelectorAll('.humid-warning'); 
        humid_rating_value.textContent = temp_rating + "/10";
        document.documentElement.style /*Sets Css variable to the rating value so it can show in progress bar */
          .setProperty('--humid_rating', String(temp_rating));

        if (temp_rating >= 5 && temp_rating < 8) {
          document.documentElement.style /*Sets Css bar color depending on rating */
            .setProperty('--bar-color', '#FFB833');
          temp_warning.forEach((temp_warning) => {
            temp_warning.style.visibility = "visible"; 
          });
        }
        else if (temp_rating >= 8){
          document.documentElement.style 
            .setProperty('--bar-color', '#247F36');
          temp_warning.forEach((temp_warning) => {
            temp_warning.style.visibility = "hidden"; 
          });
        }
        else {
          document.documentElement.style 
            .setProperty('--bar-color', '#AD1F2D');
          temp_warning.forEach((temp_warning) => {
            temp_warning.style.visibility = "visible"; 
          });
        }

        return data;
      });
  }
  window.addEventListener('load', function () {
    // Your document is loaded.
    fetchData();
    var fetchInterval = 4000; // 2 seconds.
    setInterval(fetchData, fetchInterval);
  });
