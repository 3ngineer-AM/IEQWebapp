<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- normalize css -->
    <link rel="stylesheet" href="./normalize.css">
    <link rel="stylesheet" href="./styles.css">
    <title>IEQ</title>
  </head>
  <body>
    <!-- nav -->
    <nav class="navbar">
      <div class="nav-center">
        <!-- header -->
        <!-- links -->
        <div class="nav-links">
          <a href="index.php" class="nav-link">home</a>
          <a href="Graphs.html" class="nav-link">graphs</a>
          <a href="tags.html" class="nav-link">settings</a>
        </div>
      </div>
    </nav>
    <!-- end of nav -->

    <div class="container">
      <div class="climate-data">
        <div class="temperature">
          <h1>Temperature</h1>
          <div class="temperature_value" id="temperature_value"></div>
        </div>
        <div class="pressure">
          <h1>Pressure</h1>
          <div class="pressure_value" id="pressure_value"></div>       
        </div>
        <div class="humidity">     
          <h1>Humidity</h1>
          <div class="humidity_value" id="humidity_value"></div>
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
    fetchData();
    var fetchInterval = 2000; // 2 seconds.
    setInterval(fetchData, fetchInterval);
  });
</script>