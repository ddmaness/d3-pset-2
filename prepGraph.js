/*global d3, dimple, draw */

'use strict';
function draw(data) {
	let margin = 75,
		width = 960 - margin,
		height = 500 - margin;

	let svg = d3.select('.graph')
		.append('svg')
		.attr('width', width + margin)
		.attr('height', height)
		.append('g')
		.attr('class', 'chart');

	let barChart = new dimple.chart(svg, data);
	let x = barChart.addCategoryAxis('x', 'Position');
	x.addOrderRule('Yearly Salary in USD');
	let y1 = barChart.addMeasureAxis('y', 'Yearly Salary in USD');
	barChart.addSeries(null, dimple.plot.bar, [x,y1]);
	let y2 = barChart.addMeasureAxis(y1, 'Salary (Low End)');
	barChart.addSeries(null, dimple.plot.bar, [x,y2]);
	barChart.draw();
}