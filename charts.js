const tempChart = Highcharts.chart('temp-graph', {
  chart: {
    backgroundColor: '#f1f5f9'
  },
  title: {
    text: 'Temperature'
  },
  yAxis: {
    min: 15,
    max: 30,
    title: {
      text: 'Temperature'
    }
  },
  xAxis: {
    type: 'datetime',
    tickInterval: 15 * 60 * 1000,
  },

  legend: {
    enabled: false
  },
  series: [{
    name: 'time'
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
    }]
  }
});

const pressChart = Highcharts.chart('press-graph', {
  chart: {
    backgroundColor: '#f1f5f9'
  },
  title: {
    text: 'Pressure'
  },
  yAxis: {
    min: 950,
    max: 1100,
    title: {
      text: 'Pressure'
    }
  },
  xAxis: {
    type: 'datetime',
    tickInterval: 15 * 60 * 1000,
  },

  legend: {
    enabled: false
  },
  series: [{
    name: 'time'
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
    }]
  }
});

const humidChart = Highcharts.chart('humid-graph', {
  chart: {
    backgroundColor: '#f1f5f9'
  },
  title: {
    text: 'Humidity'
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: 'Humidity'
    }
  },
  xAxis: {
    type: 'datetime',
    tickInterval: 15 * 60 * 1000,
  },

  legend: {
    enabled: false
  },
  series: [{
    name: 'time'
  }],

  responsive: {
    rules: [{
      condition: {
        maxWidth: 500
      },
    }]
  }
});

let tempmin = 0;
let tempmax = 23;
let pressmin = 0;
let pressmax = 23;
let humidmin = 0;
let humidmax = 23;
function fetchData() {
  // Retrieving json array from query.php
  fetch("https://og09ieq.ngrok.io/query.php") 
    .then((res) => res.json())
    .then((data) => {

      const dateTime = data.time;
      const [date, timeStr] = dateTime.split(' ');
      let [year, month, day] = date.split('-');
      month -= 1;
      const [hours, minutes, seconds] = timeStr.split(':');
      const utcValue = Date.UTC(year, month, day, hours, minutes, seconds);
      tempChart.xAxis[0].setExtremes(Date.UTC(year, month, day, tempmin, 0, 0), Date.UTC(year, month, day, tempmax, 59, 59));
      tempChart.series[0].addPoint([utcValue, +data.temp_value]);
      pressChart.xAxis[0].setExtremes(Date.UTC(year, month, day, pressmin, 0, 0), Date.UTC(year, month, day, pressmax, 59, 59));
      pressChart.series[0].addPoint([utcValue, +data.pressure_value]);
      humidChart.xAxis[0].setExtremes(Date.UTC(year, month, day, humidmin, 0, 0), Date.UTC(year, month, day, humidmax, 59, 59));
      humidChart.series[0].addPoint([utcValue, +data.humid_value]);

      document.getElementById('temp-day-btn').addEventListener("click", function(){
        tempmin = 0;
        tempmax = 23;
        tempChart.xAxis[0].setExtremes(Date.UTC(year, month, day, tempmin, 0, 0), Date.UTC(year, month, day, tempmax, 59, 59));
      });
      document.getElementById('temp-hour-btn').addEventListener("click", function(){
        tempmin = hours;
        tempmax = hours;
        tempChart.xAxis[0].setExtremes(Date.UTC(year, month, day, tempmin, 0, 0), Date.UTC(year, month, day, tempmax, 59, 59));
      });
      document.getElementById('press-day-btn').addEventListener("click", function(){
        pressmin = 0;
        pressmax = 23;
        pressChart.xAxis[0].setExtremes(Date.UTC(year, month, day, pressmin, 0, 0), Date.UTC(year, month, day, pressmax, 59, 59));
      });
      document.getElementById('press-hour-btn').addEventListener("click", function(){
        pressmin = hours;
        pressmax = hours;
        pressChart.xAxis[0].setExtremes(Date.UTC(year, month, day, pressmin, 0, 0), Date.UTC(year, month, day, pressmax, 59, 59));
      });
      document.getElementById('humid-day-btn').addEventListener("click", function(){
        humidmin = 0;
        humidmax = 23;
        humidChart.xAxis[0].setExtremes(Date.UTC(year, month, day, humidmin, 0, 0), Date.UTC(year, month, day, humidmax, 59, 59));
      });
      document.getElementById('humid-hour-btn').addEventListener("click", function(){
        humidmin = hours;
        humidmax = hours;
        humidChart.xAxis[0].setExtremes(Date.UTC(year, month, day, humidmin, 0, 0), Date.UTC(year, month, day, humidmax, 59, 59));
      });
    });
}

window.addEventListener('load', function () {
  // Your document is loaded.
  fetchData();
  var fetchInterval = 4000; // 2 seconds.
  setInterval(fetchData, fetchInterval);


  const tempButtons = document.querySelectorAll('.temp-graph-btn');
  tempButtons.forEach(tempButton => {
    tempButton.addEventListener('click', () => {
      tempButtons.forEach(otherButton => otherButton.classList.remove('active'));
      tempButton.classList.toggle('active');
    });
  });
  const pressButtons = document.querySelectorAll('.press-graph-btn');
  pressButtons.forEach(pressButton => {
    pressButton.addEventListener('click', () => {
      pressButtons.forEach(otherButton => otherButton.classList.remove('active'));
      pressButton.classList.toggle('active');
    });
  });
  const humidButtons = document.querySelectorAll('.humid-graph-btn');
  humidButtons.forEach(humidButton => {
    humidButton.addEventListener('click', () => {
      humidButtons.forEach(otherButton => otherButton.classList.remove('active'));
      humidButton.classList.toggle('active');
    });
  });

});