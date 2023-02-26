const chart = Highcharts.chart('temp-graph', {

  yAxis: {
    title: {
      text: 'Temperature'
    }
  },

  xAxis: {
    type: 'datetime',
    tickInterval: 1 * 60 * 1000,
  },

  legend: {
    enable: false
  },

  plotOptions: {
    series: {
    }
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
function fetchData() {
  // Retrieving json array from query.php
  fetch("http://10.0.0.200:8080/query.php") 
    .then((res) => res.json())
    .then((data) => {
      const dateTime = data.time;
      const [date, timeStr] = dateTime.split(' ');
      let [year, month, day] = date.split('-');
      month -= 1;
      const [hours, minutes, seconds] = timeStr.split(':');
      const utcValue = Date.UTC(year, month, day, hours, minutes, seconds);
      chart.xAxis[0].setExtremes(Date.UTC(year, month, day, 0, 0, 0), Date.UTC(year, month, day, 23, 59, 0));
      chart.series[0].addPoint([utcValue, Math.floor((Math.random() * 25) + 20)]);
    });
}

window.addEventListener('load', function () {
  // Your document is loaded.
  var fetchInterval = 2000; // 2 seconds.
  setInterval(fetchData, fetchInterval);
});