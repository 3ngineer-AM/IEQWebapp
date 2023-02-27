const tempChart = Highcharts.chart('temp-graph', {
  chart: {
    backgroundColor: '#f1f5f9'
  },
  title: {
    text: 'Temperature'
  },
  yAxis: {
    title: {
      text: 'Temperature'
    }
  },
  xAxis: {
    type: 'datetime',
    tickInterval: 120 * 60 * 1000,
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
    title: {
      text: 'Pressure'
    }
  },
  xAxis: {
    type: 'datetime',
    tickInterval: 120 * 60 * 1000,
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
    title: {
      text: 'Humidity'
    }
  },
  xAxis: {
    type: 'datetime',
    tickInterval: 120 * 60 * 1000,
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
      tempChart.xAxis[0].setExtremes(Date.UTC(year, month, day, 0, 0, 0), Date.UTC(year, month, day, 23, 59, 0));
      tempChart.series[0].addPoint([utcValue, Math.floor((Math.random() * 25) + 20)]);
      pressChart.xAxis[0].setExtremes(Date.UTC(year, month, day, 0, 0, 0), Date.UTC(year, month, day, 23, 59, 0));
      pressChart.series[0].addPoint([utcValue, Math.floor((Math.random() * 1049) + 950)]);
      humidChart.xAxis[0].setExtremes(Date.UTC(year, month, day, 0, 0, 0), Date.UTC(year, month, day, 23, 59, 0));
      humidChart.series[0].addPoint([utcValue, Math.floor((Math.random() * 100) + 1)]);
    });
}

window.addEventListener('load', function () {
  // Your document is loaded.
  var fetchInterval = 2000; // 2 seconds.
  setInterval(fetchData, fetchInterval);
});