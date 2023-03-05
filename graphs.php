<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- normalize css -->
        <link rel="stylesheet" href="./normalize.css">
        <link rel="stylesheet" href="./styles.css">
        <script src="https://kit.fontawesome.com/e14c9d9e40.js" crossorigin="anonymous"></script>
        <title>Graphs</title>
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
              <button class="link-buttons" onclick="window.location.href ='index.php';">
                <i class="fa-solid fa-gear"></i>
              </button>
              <a href="index.php" class="nav-link">settings</a>
            </div>
          </div>
        </div>
      </nav>
      <!-- end of nav -->

      <!-- start of Graphs -->
      <div class="graphs">
        <div class="graph-container">
          <div class="graph" id="temp-graph"></div>
          <div class="graph-buttons">
            <button type="button" class="temp-graph-btn active" id='temp-day-btn'>1D</button> 
            <button type="button" class="temp-graph-btn" id='temp-hour-btn'>1H</button> 
          </div>
        </div>
        <div class="graph-container">
          <div class="graph" id="press-graph"></div>
          <div class="graph-buttons">
            <button type="button" class="press-graph-btn active" id='press-day-btn'>1D</button> 
            <button type="button" class="press-graph-btn" id='press-hour-btn'>1H</button> 
          </div>
        </div> 
        <div class="graph-container">
          <div class="graph" id="humid-graph"></div>
          <div class="graph-buttons">
            <button type="button" class="humid-graph-btn active" id='humid-day-btn'>1D</button> 
            <button type="button" class="humid-graph-btn" id='humid-hour-btn'>1H</button> 
          </div>
        </div> 
      </div> 
      <!-- end of Graphs -->
  

      <!-- Javascript -->
      <script src="https://code.highcharts.com/highcharts.js"></script>
      <script src="charts.js"></script>
      <script src="navLinks.js"></script>
    </body>
</html>