const tempChart = Highcharts.chart('temp-graph', {
  chart: {
    backgroundColor: '#f1f5f9',
    panning: true,
    panKey: 'shift'
  },
  plotOptions: {
    series: {
      stickyTracking: false,
    }
  },
  tooltip: {
    hideDelay: 50
  },
  title: {
    text: 'Temperature',
    style: {
      fontFamily: 'Poppins',
      fontWeight: 'bold'
    }
  },
  yAxis: {
    crosshair: false,
    title: {
      text: 'Temperature'
    }
  },
  xAxis: {
    crosshair: false,
    type: 'datetime',
  },
  legend: {
    enabled: false
  },
  series: [{
    color: '#3c3c3c',
    name: 'temp'
  }],

});

const pressChart = Highcharts.chart('press-graph', {
  chart: {
    backgroundColor: '#f1f5f9',
    panning: true,
    panKey: 'shift'
  },
  plotOptions: {
    series: {
      stickyTracking: false,
    }
  },
  tooltip: {
    hideDelay: 50
  },
  title: {
    text: 'Pressure',
    style: {
      fontFamily: 'Poppins',
      fontWeight: 'bold'
    }
  },
  yAxis: {
    crosshair: false,
    title: {
      text: 'Pressure'
    }
  },
  xAxis: {
    crosshair: false,
    type: 'datetime',
  },
  legend: {
    enabled: false
  },
  series: [{
    color: '#3c3c3c',
    name: 'pressure'
  }],
});

const humidChart = Highcharts.chart('humid-graph', {
  chart: {
    backgroundColor: '#f1f5f9',
    panning: true,
    panKey: 'shift'
  },
  plotOptions: {
    series: {
      stickyTracking: false,
    }
  },
  tooltip: {
    hideDelay: 50
  },
  title: {
    text: 'Humidity',
    style: {
      fontFamily: 'Poppins',
      fontWeight: 'bold'
    }
  },
  yAxis: {
    crosshair: false,
    title: {
      text: 'Humidity'
    }
  },
  xAxis: {
    crosshair: false,
    type: 'datetime',
  },

  legend: {
    enabled: false
  },
  series: [{
    color: '#3c3c3c',
    name: 'humidity'
  }],

});

let tempmin = 0; let tempmax = 23;
let pressmin = 0; let pressmax = 23;
let humidmin = 0; let humidmax = 23;

let tempminY = 15; let tempmaxY = 30;
let pressminY = 950; let pressmaxY = 1050;
let humidminY = 0; let humidmaxY = 100;

function fetchTable(){
  fetch('http://og09ieq.ngrok.io/fullquery.php')
    .then((res) => res.json())
    .then((data) => {
      let timearr = data.timearr;
      let temparr = data.temparr;
      let pressarr = data.pressarr;
      let humidarr = data.humidarr;

      const processedTime = timearr.map((dateTime) => {
        const [date, timeStr] = dateTime.split(' ');
        let [year, month, day] = date.split('-');
        month -= 1;
        const [hours, minutes, seconds] = timeStr.split(':');
        const utcValue = Date.UTC(year, month, day, hours, minutes, seconds);

        // Return a new object with the processed date and time
        return utcValue;
      });
      //Joining the converted timearr to temp,press,humid arrays
      const temptime = processedTime.map((utcValue, index) => [utcValue, temparr[index]]);
      const presstime = processedTime.map((utcValue, index) => [utcValue, pressarr[index]]);
      const humidtime = processedTime.map((utcValue, index) => [utcValue, humidarr[index]]);

      // Update Highcharts
      tempChart.series[0].setData(temptime);
      pressChart.series[0].setData(presstime);
      humidChart.series[0].setData(humidtime);

    });
}

function setAxisInterval(chart, minutes) {
  chart.xAxis[0].update({
    tickInterval: minutes * 60 * 1000
  });
}

let extremesSet = false;
function fetchData() {
  // Retrieving json array from query.php
  fetch("http://og09ieq.ngrok.io/query.php") 
    .then((res) => res.json())
    .then((data) => {

      const dateTime = data.time;
      const [date, timeStr] = dateTime.split(' ');
      let [year, month, day] = date.split('-');
      month -= 1;
      const [hours, minutes, seconds] = timeStr.split(':');
      const utcValue = Date.UTC(year, month, day, hours, minutes, seconds);

      // setting extremes once the page loads only
      if (!extremesSet) {
        tempChart.xAxis[0].setExtremes(Date.UTC(year, month, day, tempmin, 0, 0), Date.UTC(year, month, day, tempmax, 59, 59));
        tempChart.yAxis[0].setExtremes(tempminY, tempmaxY);
        setAxisInterval(tempChart, 240);
        pressChart.xAxis[0].setExtremes(Date.UTC(year, month, day, pressmin, 0, 0), Date.UTC(year, month, day, pressmax, 59, 59));
        pressChart.yAxis[0].setExtremes(pressminY, pressmaxY);
        setAxisInterval(pressChart, 240);
        humidChart.xAxis[0].setExtremes(Date.UTC(year, month, day, humidmin, 0, 0), Date.UTC(year, month, day, humidmax, 59, 59));
        humidChart.yAxis[0].setExtremes(humidminY, humidmaxY);
        setAxisInterval(humidChart, 240);

        extremesSet = true;
      }

      // Adding points
      tempChart.series[0].addPoint([utcValue, +data.temp_value]);
      pressChart.series[0].addPoint([utcValue, +data.pressure_value]);
      humidChart.series[0].addPoint([utcValue, +data.humid_value]);

      document.getElementById('temp-day-btn').addEventListener("click", function(){
        tempmin = 0; tempminY = 15;
        tempmax = 23; tempmaxY = 30;
        tempChart.xAxis[0].setExtremes(Date.UTC(year, month, day, tempmin, 0, 0), Date.UTC(year, month, day, tempmax, 59, 59));
        tempChart.yAxis[0].setExtremes(tempminY, tempmaxY);
        setAxisInterval(tempChart, 240);
      });
      document.getElementById('temp-hour-btn').addEventListener("click", function(){
        tempmin = hours; tempminY = null;
        tempmax = hours; tempmaxY = null;
        tempChart.xAxis[0].setExtremes(Date.UTC(year, month, day, tempmin, 0, 0), Date.UTC(year, month, day, tempmax, 59, 59), false);
        tempChart.yAxis[0].setExtremes(tempminY, tempmaxY, false);
        setAxisInterval(tempChart, 30);
      });
      document.getElementById('press-day-btn').addEventListener("click", function(){
        pressmin = 0;
        pressmax = 23;
        pressminY = 950;
        pressmaxY = 1050;
        pressChart.xAxis[0].setExtremes(Date.UTC(year, month, day, pressmin, 0, 0), Date.UTC(year, month, day, pressmax, 59, 59));
        pressChart.yAxis[0].setExtremes(pressminY, pressmaxY);
        setAxisInterval(pressChart, 240);
      });
      document.getElementById('press-hour-btn').addEventListener("click", function(){
        pressmin = hours;
        pressmax = hours;
        pressminY = null;
        pressmaxY = null;
        pressChart.xAxis[0].setExtremes(Date.UTC(year, month, day, pressmin, 0, 0), Date.UTC(year, month, day, pressmax, 59, 59), false);
        pressChart.yAxis[0].setExtremes(pressminY, pressmaxY, false);
        setAxisInterval(pressChart, 30);

      });
      document.getElementById('humid-day-btn').addEventListener("click", function(){
        humidmin = 0;
        humidmax = 23;
        humidminY = 0;
        humidmaxY = 100;
        humidChart.xAxis[0].setExtremes(Date.UTC(year, month, day, humidmin, 0, 0), Date.UTC(year, month, day, humidmax, 59, 59));
        humidChart.yAxis[0].setExtremes(humidminY, humidmaxY);
        setAxisInterval(humidChart, 240);
      });
      document.getElementById('humid-hour-btn').addEventListener("click", function(){
        humidmin = hours;
        humidmax = hours;
        humidminY = null;
        humidmaxY = null;
        humidChart.xAxis[0].setExtremes(Date.UTC(year, month, day, humidmin, 0, 0), Date.UTC(year, month, day, humidmax, 59, 59), false);
        humidChart.yAxis[0].setExtremes(humidminY, humidmaxY, false);
        setAxisInterval(humidChart, 30);
      });
    });
}

window.addEventListener('load', function () {
  // Your document is loaded.
  fetchTable();
  fetchData();
  var fetchInterval = 10000; // 2 seconds.
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