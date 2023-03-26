<!DOCTYPE html>
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
        <div class="nav-header">
          <button type="button" class="btn nav-btn">
            <i class="fas fa-align-justify"></i>
          </button> 
        </div>
        <!-- links -->
        <div class="nav-links">
          <div class="links">
            <button class="link-buttons" onclick="window.location.href ='index.php';">
              <i class="fa-solid fa-house"></i>
            </button>
            <a href="index.php" class="nav-link">home</a>
          </div>
          <div class="links">
            <button class="link-buttons" onclick="window.location.href ='graphs.php';">
              <i class="fa-solid fa-chart-line"></i>
            </button>
            <a href="graphs.php" class="nav-link">graphs</a>
          </div>
          <div class="links">
            <button class="link-buttons" onclick="window.location.href ='settings.php';">
              <i class="fa-solid fa-gear"></i>
            </button>
            <a href="settings.php" class="nav-link">settings</a>
          </div>
        </div>
      </div>
    </nav>
    <!-- end of nav -->

    <div class="container">
      <div class="climate-data">
        <div class="temperature">
          <i class="temp-warning fa-solid fa-triangle-exclamation"></i>
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
                <td id='temp-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste veniam sed eos temporibus quisquam similique tempora aspernatur provident ab animi nisi reiciendis doloremque quo, excepturi nesciunt mollitia non in aut.</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="pressure">
          <i class="press-warning fa-solid fa-triangle-exclamation"></i>
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
                <td id='press-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum a quidem et explicabo sint error, optio, quam eius dolorem autem vitae atque odit provident harum! Error saepe cumque sunt adipisci?</td>
              </tr>
            </tbody>
          </table>    
        </div>
        <div class="humidity">
          <i class="humid-warning fa-solid fa-triangle-exclamation"></i>
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
                <td id='humid-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, temporibus! Eum alias commodi aspernatur explicabo similique perferendis dicta natus labore qui est laboriosam voluptate provident saepe, nemo nisi dolores fugiat.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <!-- Javascript -->
    <script src="fetch.js"></script>
    <script src="navLinks.js"></script>
  </body>
</html>