var chartData = [ { x: new Date(2023, 1, 1, 0, 0, 0), y: 100 },
        { x: new Date(2023, 1, 1, 4, 0, 0), y: 150 },
        { x: new Date(2023, 1, 1, 8, 0, 0), y: 200 },
        { x: new Date(2023, 1, 1, 12, 0, 0), y: 250 },
        { x: new Date(2023, 1, 1, 16, 0, 0), y: 300 },
        { x: new Date(2023, 1, 1, 20, 0, 0), y: 350 }];
var chart = JSC.Chart('temp-graph', {
   type: 'line',
   series: [{
    name: 'Data',
    points: chartData
  }],
  xAxis: {
    type: 'dateTime',
    scale: {
      type: 'dateTime',
      date: '1900-01-01',
      // min: new Date(0, 0, 0, 0, 0, 0),
      max: new Date(0, 0, 0, 23, 59, 0),
      tickSpacing: 50,
      visible: true
    },
    formatString: 'HH:mm'
  },
  yAxis: {
    visible: true
  },
  ticks: {
    interval: 120
  },
  legend: {
    visible: false
  }
});

function fetchData() {
  // Retrieving json array from query.php
  fetch("http://10.0.0.200:8080/query.php") 
    .then((res) => res.json())
    .then((data) => {
      var newDataPoint = { x: data.time, y: +data.temp_value };
      chart.series(0).points.add(newDataPoint);
    });
}

window.addEventListener('load', function () {
  // Your document is loaded.
  var fetchInterval = 2000; // 2 seconds.
  // setInterval(fetchData, fetchInterval);
});