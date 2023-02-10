<html>
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- normalize css -->
    <link rel="stylesheet" href="./normalize.css">
    <link rel="stylesheet" href="./styles.css">
    <script src="https://kit.fontawesome.com/e14c9d9e40.js" crossorigin="anonymous"></script>
    <title>IEQ</title>
  </head>
  <body>
    <!-- nav -->
    <nav class="navbar">
      <div class="nav-center">
        <!-- header -->
        <!-- links -->
        <div class="nav-links">
          <button class="link-buttons">
            <i class="fa-solid fa-house"></i>
          </button>
          <a href="index.php" class="nav-link">home</a>
          <button class="link-buttons">
            <i class="fa-solid fa-chart-line"></i>
          </button>
          <a href="Graphs.html" class="nav-link">graphs</a>
          <button class="link-buttons">
            <i class="fa-solid fa-gear"></i>
          </button>
          <a href="tags.html" class="nav-link">settings</a>
        </div>
      </div>
    </nav>
    <!-- end of nav -->

    <div class="container">
      <div class="climate-data">
        <div class="temperature">
          <h1 class="card_title">Temperature</h1>
          <div class="card_value" id="temperature_value"></div>
          <table>
            <tbody>
              <tr>
                <td>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, mollitia est pariatur quo quis non aliquid esse iusto cupiditate, dolore fuga quos labore. Corporis omnis cupiditate laudantium vero laboriosam ipsa.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pressure">
          <h1 class="card_title">Pressure</h1>
          <div class="card_value" id="pressure_value"></div>  
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, mollitia est pariatur quo quis non aliquid esse iusto cupiditate, dolore fuga quos labore. Corporis omnis cupiditate laudantium vero laboriosam ipsa.</p>     
        </div>
        <div class="humidity">     
          <h1 class="card_title">Humidity</h1>
          <div class="card_value" id="humidity_value"></div>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis, mollitia est pariatur quo quis non aliquid esse iusto cupiditate, dolore fuga quos labore. Corporis omnis cupiditate laudantium vero laboriosam ipsa.</p>
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
          temperature.textContent = data.temp_value + " °C";
          const pressure = document.getElementById("pressure_value");
          pressure.textContent = data.pressure_value + " Pa";
          const humidity = document.getElementById("humidity_value");
          humidity.textContent = data.humid_value + " %";
      });
  }
  window.addEventListener('load', function () {
    // Your document is loaded.
    fetchData();
    var fetchInterval = 2000; // 2 seconds.
    setInterval(fetchData, fetchInterval);
  });
</script>