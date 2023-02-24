
document.addEventListener("DOMContentLoaded", function(event) {
  const svg = d3.select('#temp-graph');
  const svgWidth = parseFloat(getComputedStyle(svg.node()).getPropertyValue('--svg-width'));
  const svgHeight = parseFloat(getComputedStyle(svg.node()).getPropertyValue('--svg-height'));

  // Define the start and end times as Date objects
  const startTime = new Date();
  startTime.setHours(0, 0, 0, 0); // set to 00:00:00.000
  const endTime = new Date();
  endTime.setHours(24, 0, 0, 0); // set to 24:00:00.000

  // Create scale
  var xscale = d3.scaleLinear()
    .domain([startTime, endTime])
    .range([0, svg.node().clientWidth]);

  // Add scales to axis
  var x_axis = d3.axisBottom(xscale)
    .ticks(d3.timeSecond.every(0.5))
    .tickFormat(d3.timeFormat('%H:%M:%S.%L')); // set the format of the ticks to be in 24-hour time

  //Append group and insert axis
  svg.append("g")
    .attr('transform', `translate(0, ${svg.node().clientHeight - 20})`) // position the x-axis at the bottom of the plot
    .call(x_axis);
});

function fetchData() {
  // Retrieving json array from query.php
  fetch("http://10.0.0.200:8080/query.php") 
    .then((res) => res.json())
    .then((data) => {
      
    });
}

window.addEventListener('load', function () {
  // Your document is loaded.
  var fetchInterval = 2000; // 2 seconds.
  setInterval(fetchData, fetchInterval);
});