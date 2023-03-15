<!DOCTYPE html>
<html>
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <!-- normalize css -->
      <link rel="stylesheet" href="./normalize.css">
      <script src="https://kit.fontawesome.com/e14c9d9e40.js" crossorigin="anonymous"></script>
      <link rel="stylesheet" href="./styles.css">
      <title>Settings</title>
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
      <!-- Start of wifi -->
      <div class="wifi-header">
        <h5>WIFI connectivity</h5>
      </div>
      <button type="button" class="btn" id="dc-btn">disconnect</button>
      <!-- end of wifi -->
    </div>

    <!-- Javascript -->
    <script src="settings.js"></script>
    <script src="navLinks.js"></script>
  </body>
</html>