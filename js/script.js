/* NOTE: This file is for UI developer only - Backend Developer can use custom.js */

$(function() {
	if($("#carousel").get(0)){
		$('#carousel').carouFredSel({
			responsive: true,
			items: {
				visible: 1,
				width: 900,
				height: 1000
			},
			pagination : '#slider-bullets' 
		});
	}
});