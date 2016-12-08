google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);
//
function drawStuff() {
  var data = new google.visualization.arrayToDataTable([
    ['Opening Move', ''],
    ['일반회원', '초급과정'],
    ['준회원', '중급과정'],
    ['정회원', '고급과정'],
    ['정회원C', '주권회복과정'],
    ['정회원M', '완성단계']
  ]);

  var options = {
    title: '',
    legend: { position: 'none' },
    chart: { title: '∎ 회원구분과 과정 및 혜택',
    subtitle: '' },
    bars: 'vertical', // Required for Material Bar Charts. horizontal
    axes: {
      x: {
        0: { side: 'top', label: ''} // Top x-axis.
      }
    },
    bar: { groupWidth: "40%" }
  };

  var chart = new google.charts.Bar(document.getElementById('top_x_div'));
  chart.draw(data, options);
};
