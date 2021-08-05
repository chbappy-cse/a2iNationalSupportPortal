// this is for rightbar toggle
let pull = document.querySelector("#pullright");
let right = document.querySelector("#rightbar");

pull.addEventListener("click", () => {
  right.classList.toggle("on");
});

// this is for chart js
var doughnut = document.getElementById('doughnut');
var doughnut = new Chart(doughnut, {
  type: 'doughnut',
  data: {
    // labels: [
    //   'Red',
    //   'Blue',
    //   'Yellow'
    // ],
    datasets: [{
      label: 'My First Dataset',
      data: [65, 45],
      backgroundColor: [
        '#39B54A',
        '#D1D3D4',
        // 'rgb(255, 205, 86)'
      ],
      hoverOffset: 4
    }]
  },
  options: {
    responsive: false,
  }
});

// bar chart
var barchart = document.getElementById('bar');
var bar = new Chart(barchart, {
  type: 'bar',
  data: {
    labels: ['', '', '', ''],
    datasets: [{
      label: 'Problem Category',
      data: [30, 60, 90, 70],
      backgroundColor: [
        '#FCAB10',
        '#39B54A',
        '#2B9EB3',
        '#F8333C'
      ],
      borderColor: [
        '#FCAB10',
        '#39B54A',
        '#2B9EB3',
        '#F8333C'
      ],
      borderWidth: 0
    }],
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  },
});


// line chart
var linechart = document.getElementById('line');
var line = new Chart(linechart, {
  type: 'line',
  data: {
    labels: [5, 9, 7, 8, 10],
    labels: [5, 9, 7, 8, 10],
    datasets: [{
      label: 'Trend of Close Ticket',
      data: [45, 47, 55, 52, 58, 55, 40],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    }]
  },
});

// line_chart.html page
var linechartpage = document.getElementById('linechartpage');
var linepage = new Chart(linechartpage, {
  type: 'line',
  data: {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
      {
        label: 'Dataset 1',
        data: [25, 55, 35, 55, 30, 60, 32],
        borderColor: '#DEADAD',
        backgroundColor: 'white',
      },
      {
        label: 'Dataset 2',
        data: [20, 50, 30, 50, 25, 60, 0],
        borderColor: '#39B54A',
        backgroundColor: 'white',
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: ''
      }
    }
  },
});

// line_fill_chart.html page
var linefillchartpage = document.getElementById('linefillchartpage');
var linefillpage = new Chart(linefillchartpage, {
  type: 'line',
  data: {
    labels: ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'],
    datasets: [
      {
        label: 'Submit',
        data: [0, 12, 10, 7, 10, 15, 20, 20, 10, 10, 0, 0],
        borderColor: '#39B54A',
        backgroundColor: '#39B54A',
        tension: 0.2,
        fill: true,
      },
      {
        label: 'Close',
        data: [0, 10, 20, 15, 25, 20, 25, 25, 20, 15, 18, 25],
        borderColor: '#009DB3',
        backgroundColor: '#F8333C',
        tension: 0.2,
        fill: true,
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: ''
      }
    }
  },
});

// bar_chart.html
var barchartpage = document.getElementById('barchartpage');
var barpage = new Chart(barchart, {
  type: 'bar',
  data: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [{
      label: 'Problem Caegory',
      data: [20, 20, 30, 35, 40, 50, 55, 58, 60],
      backgroundColor: [
        // 'rgba(255, 99, 132, 0.2)',
        // 'rgba(255, 159, 64, 0.2)',
        // 'rgba(255, 205, 86, 0.2)',
        // 'rgba(75, 192, 192, 0.2)',
        // 'rgba(54, 162, 235, 0.2)',
        // 'rgba(153, 102, 255, 0.2)',
        // 'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        '#FCAB10',
        '#39B54A',
        '#2B9EB3',
        '#F8333C'
      ],
      borderWidth: 1
    }],
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  },
});


var options = {
  series: [{
  data: [21, 22, 10, 28, 16, 21, 13, 30]
}],
  chart: {
  height: 350,
  type: 'bar',
  events: {
    click: function(chart, w, e) {
      // console.log(chart, w, e)
    }
  }
},
colors: colors,
plotOptions: {
  bar: {
    columnWidth: '45%',
    distributed: true,
  }
},
dataLabels: {
  enabled: true
},
legend: {
  show: true
},
xaxis: {
  categories: [
    ['John', 'Doe'],
    ['Joe', 'Smith'],
    ['Jake', 'Williams'],
    'Amber',
    ['Peter', 'Brown'],
    ['Mary', 'Evans'],
    ['David', 'Wilson'],
    ['Lily', 'Roberts'], 
  ],
  labels: {
    style: {
      colors: colors,
      fontSize: '12px'
    }
  }
}
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


// Date Calender
