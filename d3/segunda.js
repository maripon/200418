
<!--D3.js-->
//variables globales  
var width = 500;
var height = 360;
//los datos
var data = [
  {child : "Psicológica", porcentaje : 19.5},
  {child : "Física leve", porcentaje : 25.6},
  {child : "Física Grave", porcentaje : 25.9},
  {child : "N/V", porcentaje : 29}
];
//selecciona el svg
var svg = d3.select("svg")
.attr("width", width)
.attr("height", height)
.style("background","#EEEEEE");
//selecciona el grupo
var g = svg.selectAll("g")
  .data(data)
  .enter()
  .append("g")  
  .attr("transform", "translate(75,0)")
//mete un "circle"
g.append("circle")
  .attr("cx", function(d, i) { return i * (width/(data.length+1)) + 50; })
  .attr("cy", function(d, i) { return height/2; })
  .attr("r", function(d) { return d.porcentaje/3; })
  .attr("fill","#ff0000")
//mete un "text"
g.append("text")
  .attr("x", function(d, i) { return i * (width/(data.length+1)) + 50; })
  .attr("y", height/1.4)
  .attr("text-anchor","middle")
  .text(function(d) { return d.child; })
//mete otro "text"  
g.append("text")
  .attr("x", function(d, i) { return i * (width/(data.length+1)) + 50; })
  .attr("y", height-80)
  .attr("font-size","10")
  .attr("text-anchor","middle")
  .text(function(d) { return d.porcentaje; })
