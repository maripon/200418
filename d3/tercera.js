
d3.csv("http://sitios.dif.gob.mx/datosabiertos/MALTRATO_INFANTIL_JULIO-SEPTIEMBRE-2015.csv").then(function(data)//aquí debes trabajar con datos de un CSV
var w = 450;
var h = 450;
d3.select(".dataviz-tercera")
	.append("svg")
	.attr("width", w)
	.attr("height", h )
	.style("background","#EEEEEE");