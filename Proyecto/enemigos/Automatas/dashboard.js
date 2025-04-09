/* globals Chart:false */

(() => {
  'use strict'

  // Graphs
  const ctx = document.getElementById('myChart')
  // eslint-disable-next-line no-unused-vars
  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        'MalevelonCreek',
        'Lesath',
        'Martale',
        'Menkent',
        'Meridia',
        'Vernern Wells'
      ],
      datasets: [{
        data: [
          333234,
          132553,
          132564,
          233102,
          233209,
          332980

        ],
        lineTension: 0,
        backgroundColor: 'transpaent',
        borderColor: '#007bff',
        borderWidth: 4,
        pointBackgroundColor: '#007bff'
      }]
    },
    options: {
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          boxPadding: 3
        }
      }
    }
  })
})()
