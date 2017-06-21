$(function()
{
    $('#sign_in_icon').hover(function()
    {
        $('#sign_in_icon').attr('src' , 'images/page1/web/sigin_in_hover.png');
    },
    function()
    {
        $('#sign_in_icon').attr('src', 'images/page1/web/sign_in.png');
    });
    $('.toggle-nav').click(function() {
        $('body').toggleClass('show-nav');
        return false;
    });

    // Toggle with hitting of ESC
    $(document).keyup(function(e) {
    	if (e.keyCode == 27) {
       $('body').toggleClass('show-nav');
      }
    });
});


$(function(){
  $('#sign_up_hover').hover(function()
  {
      $('#sign_up_hover').attr('src' , 'images/page1/web/sign-up-hover.png');
  },
  function()
  {
      $('#sign_up_hover').attr('src' , 'images/page1/web/sign_up_now.png');
  });
});


$(function(){
    var data = {
        labels : ["0","1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],
        datasets: [
            {
                label : "The First",
                fillColor : "rgba(153,0.76,0.2)",
                strokeColor : "rgba(153,0.76,1)",
                pointColor : "rgba(153,0.76,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(76,153,1)",
                data : [10000, 3400, 2531, 5336, 1222, 4443, 2155 ,2663, 5775, 3225, 6334, 3444,1234]
            },
            {
                label : "The second",
                fillColor : "rgba(76,0.153,0.2)",
                strokeColor : "rgba(76,0.153,1)",
                pointColor : "rgba(76,0.153,1)",
                pointStrokeColor : "#fff",
                pointHighlightFill : "#fff",
                pointHighlightStroke : "rgba(153,0.76,1)",
                data : [10000, 5634, 1562, 5566, 1782, 1564, 2531 ,2873, 2565, 3355, 2444, 3234,1232]
            }
        ]
    };

    var option = {};


    var ctx = document.getElementById("myChart").getContext('2d');
    var myLineChart = new Chart(ctx).Line(data,option);

});

var contxt = document.getElementById("sex-chart").getContext("2d");
var charts = {
  SexChart: new Chart(contxt),
  init: function() {
    charts.getData();
  },
  getData: function() {
    var data = {
      labels: ['boy', 'girl'],
      quantity: [3, 28]
    };
    charts.setSexChart(data);
  },
  setSexChart: function(data) {
    charts.SexChart.Pie([{
      value: data.quantity[0],
      color: "rgba(177, 17, 23, .5)",
      highlight: "rgba(177, 17, 23, 1)",
      label: data.labels[0]
    }, {
      value: data.quantity[1],
      color: "rgba(14, 116, 175, .5)",
      highlight: "rgba(14, 116, 175, 1)",
      label: data.labels[1]
    }], {
      legendTemplate: "<ul class=\"legend\">" +
        "<% for (var i=0; i<segments.length; i++){ %>" +
        "<li>" +
        "<span style=\"background-color:<%=segments[i].fillColor%>\"></span>" +
        "<%if(segments[i].label){%>" +
        "<%=segments[i].label%><%}%>" +
        "</li>" +
        "<%}%>" +
        "</ul>"
    });
    var legend = charts.SexChart.generateLegend();
    var legendContainer = document.getElementById("legend-sex-chart");
    legendContainer.innerHTML = legend;
  }
};

(function() {
  charts.init();
})();
