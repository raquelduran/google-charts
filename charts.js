//cargar la librería
/*google.charts.load('current', {'packages':['corechart']});
google.charts.load('upcoming', {'packages':['geochart']});*/
google.charts.load("visualization", "1", {packages:["corechart","geochart"]});

//llama a la función cuando se haya cargado la página.
google.charts.setOnLoadCallback(drawChartPie);
google.charts.setOnLoadCallback(drawChartBars);
google.charts.setOnLoadCallback(drawMap);

// Función que crea el gráfico
function drawChartPie() { 

  // Tabla de datos
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Partido');
  data.addColumn('number', 'Representación');
  data.addRows([
    ['PP', 137],
    ['PSOE', 85],
    ['Unidos Podemos', 45],
    ['ECP', 12],
    ["C's", 32],
    ['Otros', 39]
  ]);

//Opciones del gráfico
  var options = {'title':'Representación en el congreso de los diputados',
                 'width':500,
                 'height':250,
                 'slices': {0: {offset:0.05, color: 'dodgerblue'}, 1: {offset:0.05, color: 'red'}, 2: {offset:0.05, color: 'purple'},
                 4: {offset:0.05, color: 'orange'},3: {offset:0.05, color: 'mediumpurple'},5: {offset:0.05, color: 'lightgrey'}}}

// Instancia el gráfico pasandole los datos y las opciones anteriores
  var chart = new google.visualization.PieChart(document.getElementById('grafico1'));  
  chart.draw(data, options);
}
/*-------------------------------------*/
  var datos0 = [
        ['Partido','Escaños',{role:'style'}],
        ['PP', 137, 'dodgerblue'],
        ['PSOE', 85,'red'],
        ['U.Podemos', 45,'purple'],
        ['ECP', 12,'mediumpurple'],
        ["C's", 32,'orange'],
        ['Otros', 39,'lightgrey']
      ];
  var datos1 = [
        ['Partido','Votos en millones',{role:'style'}],
        ['PP', 7.941236 , 'dodgerblue'],
        ['PSOE', 5.443846,'red'],
        ['U.Podemos', 3.227123 ,'purple'],
        ['ECP', 0.853102 ,'mediumpurple'],
        ["C's", 3.141570,'orange'],
        ['Otros', 3.779358,'lightgrey']
      ];
  var turno = 0;

function drawChartBars(){
    turno = 1 - turno;
    var data = [];
    data[0] = google.visualization.arrayToDataTable(datos0);
    data[1] = google.visualization.arrayToDataTable(datos1);

    var options = {
      'title':"Elecciones 2016",
      'width': 500, 'height':250,
      'animation' :{
        'duration':1000,
        'easing': 'out',
        'startup': true
      }
    }

    var chart = new google.visualization.BarChart(document.getElementById('grafico2'));
    
    chart.draw(data[turno],options);
}


/*-------------------------------------*/
function drawMap(){
    var data = google.visualization.arrayToDataTable([
          ['País', 'nº de visitantes (en millones)'],
          ['France', 86.1],
          ['United States', 77.9],
          ['Spain', 68.2],
          ['China', 56.8],
          ['Italy', 50.8],
          ['Turkey', 39.3],
          ['Germany', 34.9],
          ['United Kingdom', 33.9],
          ['Mexico', 32.1],
          ['Russia', 31.6]

        ]);
    var options = {'width':1000, 'height':400,colors: ['#d1b7b4', '#681005']};
    var chart = new google.visualization.GeoChart(document.getElementById("grafico3"));
    chart.draw(data,options);
}
