
$(function() {
	var $from = $(`#InpFrom`);
	var $to = $(`#InpTo`);
	var $fun = $(`#InpFun`);
	var $button = $(`#BtnPlot`);
	var $btnadd = $(`#BtnAdd`);
	var $output = $(`#Output`);
	var points = [];
	
	$.plot($output, [[]], {});
	
	$button.click(e => {
		e.preventDefault();
		
		points = [ {label: $fun.val(), data: plot_data($from, $to, $fun)} ];
		
		$.plot($output, points, {legend: {show: true}});
		
	});
	
	$btnadd.click(e => {
		e.preventDefault();
		
		points.push( {label: $fun.val(), data: plot_data($from, $to, $fun)} );
		
		$.plot($output, points, {legend: {show: true}});
		
	});
	
})

function plot_data($from, $to, $fun){
	let from_val = parseFloat($from.val());
	let to_val = parseFloat($to.val());
	
	if(from_val >= to_val){
		alert("from >= to!");
		return;
	}
	
	const num = 500;
	let step = (to_val - from_val) / num;
	
	let points = [];
	for(i = 0; i < num; ++i){
		let x, y;
		x = from_val + step*i;
		y = eval($fun.val());
		
		points.push([x, y]);
	}
	
	return points
}