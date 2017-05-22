// Angular APPLICATION
var app = angular.module('myApp', [ 'ui.bootstrap'] ); // ,,

app.controller( 'eventCrtl', function ( $scope, $http, $timeout) {

 $scope.chartData= [
			  {"time":"2015-04-30T01:00:28.375Z","microsecond":318,"app":"NewsFeedDirect","direction":"IN","relativeMicroseconds":0,"Position":2,"x":"2015-04-30T01:00:28.375Z","y":318},
 			  {"time":"2015-04-30T01:00:28.375Z","microsecond":476,"app":"NewsFeedDirect","direction":"IN","relativeMicroseconds":100,"Position":8,"x":"2015-04-30T01:00:28.375Z","y":476},
			  {"time":"2015-04-30T01:00:28.377Z","microsecond":741,"app":"NewsFeedDirect","direction":"IN","relativeMicroseconds":200,"Position":5,"x":"2015-04-30T01:00:28.377Z","y":741},
			  {"time":"2015-04-30T01:00:28.377Z","microsecond":907,"app":"NewsFeedDirect","direction":"IN","relativeMicroseconds":800,"Position":1,"x":"2015-04-30T01:00:28.377Z","y":907},

			  {"relativeMicroseconds":500,"Position":2},
			  {"relativeMicroseconds":15000,"Position":8},
			  {"relativeMicroseconds":70,"Position":8},
			  {"relativeMicroseconds":2000,"Position":8},
			  {"relativeMicroseconds":200,"Position":8},

                ];


});

app.directive('linearChart', function($parse, $window){
   return{
      restrict:'EA',
      template:"<svg width='500' height='150'></svg>",
       link: function(scope, elem, attrs){

	   // data to plot
           var exp = $parse(attrs.chartData);
           var chartDataToPlot=exp(scope);
  
	   // d3
           var d3 = $window.d3;
           var rawSvg=elem.find('svg');
           var svg = d3.select(rawSvg[0]);


	   // redraw on data change
           scope.$watchCollection(exp, function(newVal, oldVal){
               chartDataToPlot=newVal;
               redrawLineChart();
           });
   

	  // draw the first time.         
          function drawLineChart() {

		svg.append("rect")
			    .attr("width", "100%")
			    .attr("height", "100%")
			    .attr("fill", "pink");
           }

 	   // draw thereafter
           function redrawLineChart() {

              svg.selectAll("circle")
			   .data(chartDataToPlot)
			   .enter()
			   .append("circle")
			   .attr("cx", function(d) {
					// 50 uS = 1 block
					x = d.relativeMicroseconds / 25;
					if (x>500) x= 500;
			   		return x;
			   })
			   .attr("cy", function(d) {
			   		return 150 - d.Position*15; // Position is from 0 to 10, we have 150 height, so multiply by 15
			   })
			   .attr("r", function(d) {
			   		return 4;
			   });

           }


           drawLineChart();

       } // return data

   }; // directive



}); // controller
