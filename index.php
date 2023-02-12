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
          <div class="card">
            <div class="rating">
              <h1>Rating</h1>
              <div class="progress-container">
                <div class="progress-bar"></div>
                <div class="progress-value" id="temp-rating"></div>
              </div>
            </div>
            <div class="card-info">
              <h1>Temperature</h1>
              <div class="card_value" id="temperature_value"></div>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste veniam sed eos temporibus quisquam similique tempora aspernatur provident ab animi nisi reiciendis doloremque quo, excepturi nesciunt mollitia non in aut.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pressure">
          <div class="card">
            <div class="rating">
              <h1>Rating</h1>
              <div class="progress-container">
                <div class="progress-bar"></div>
                <div class="progress-value" id="press-rating"></div>
              </div>
            </div>
            <div class="card-info">
              <h1>Pressure</h1>
              <div class="card_value" id="pressure_value"></div>  
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum a quidem et explicabo sint error, optio, quam eius dolorem autem vitae atque odit provident harum! Error saepe cumque sunt adipisci?</td>
              </tr>
            </tbody>
          </table>    
        </div>
        <div class="humidity">   
          <div class="card">
            <div class="rating">
              <h1>Rating</h1>
              <div class="progress-container">
                <div class="progress-bar"></div>
                <div class="progress-value" id="humid-rating"></div>
              </div>
            </div> 
            <div class="card-info">
              <h1>Humidity</h1>
              <div class="card_value" id="humidity_value"></div>
            </div>
          </div>
          <table>
            <tbody>
              <tr>
                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, temporibus! Eum alias commodi aspernatur explicabo similique perferendis dicta natus labore qui est laboriosam voluptate provident saepe, nemo nisi dolores fugiat.</td>
              </tr>
            </tbody>
          </table>
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

          var temp_rating = Math.round(10 - (Math.abs(data.temp_value-19))); /*Function for finding rating of the temperature */
          if (temp_rating < 0) temp_rating = 0;
          const temp_rating_value = document.getElementById("temp-rating");
          temp_rating_value.textContent = temp_rating + "/10";
          document.documentElement.style /*Sets Css variable to the rating value so it can show in progress bar */
            .setProperty('--temp_rating', String(temp_rating));
          
          var temp_rating = Math.round(10 - (Math.abs(data.temp_value-19))); /*Function for finding rating of the pressure */
          if (temp_rating < 0) temp_rating = 0;
          const press_rating_value = document.getElementById("press-rating");
          press_rating_value.textContent = temp_rating + "/10";
          document.documentElement.style /*Sets Css variable to the rating value so it can show in progress bar */
            .setProperty('--press_rating', String(temp_rating));
          
          var temp_rating = Math.round(10 - (Math.abs(data.temp_value-19))); /*Function for finding rating of the humidity */
          if (temp_rating < 0) temp_rating = 0;
          const humid_rating_value = document.getElementById("humid-rating");
          humid_rating_value.textContent = temp_rating + "/10";
          document.documentElement.style /*Sets Css variable to the rating value so it can show in progress bar */
            .setProperty('--humid_rating', String(temp_rating));

          if (temp_rating < 0) temp_rating = 0;
          if (temp_rating >= 5 && temp_rating < 8) {
            document.documentElement.style /*Sets Css bar color depending on rating */
              .setProperty('--bar-color', '#FFB833');
          }
          else if (temp_rating >= 8){
            document.documentElement.style 
              .setProperty('--bar-color', '#247F36');
          }
          else {
            document.documentElement.style 
              .setProperty('--bar-color', '#AD1F2D');
          }
      });
  }
  window.addEventListener('load', function () {
    // Your document is loaded.
    fetchData();
    var fetchInterval = 2000; // 2 seconds.
    setInterval(fetchData, fetchInterval);
  });

</script>