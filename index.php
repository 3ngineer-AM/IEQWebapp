<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- normalize css -->
    <link rel="stylesheet" href="./normalize.css">
    <link rel="stylesheet" type="text/css" href="./styles.css">
    <title>Room Climate</title>
  </head>
  <body>
    <div class="container">
      <h1>Room Climate</h1>
      <div class="climate-data">
        <div class="temperature">
          <h2>Temperature</h2>
          <div id="temperature_value"></div>
        </div>
        <div class="pressure">
          <h2>Pressure</h2>
          <div id="pressure_value"></div>
        </div>
        <div class="humidity">
          <h2>Humidity</h2>
          <div id="humidity_value"></div>
        </div>
      </div>
    </div>
  </body>
</html>

<script>
  function fetchData() {
  // Retrieving json array from query.php
  fetch("http://10.0.0.200:8080/query.php") 
      .then((res) => res.json())
      .then((data) => {
          const temperature = document.getElementById("temperature_value");
          temperature.textContent = JSON.stringify(data.temp_value);
          const pressure = document.getElementById("pressure_value");
          pressure.textContent = JSON.stringify(data.pressure_value);
          const humidity = document.getElementById("humidity_value");
          humidity.textContent = JSON.stringify(data.humid_value);
      });
  }
  window.addEventListener('load', function () {
  // Your document is loaded.
  var fetchInterval = 2000; // 2 seconds.

  setInterval(fetchData, fetchInterval);
});
</script>