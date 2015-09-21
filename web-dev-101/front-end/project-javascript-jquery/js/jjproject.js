$(document).ready(function() {
	generate_grid_cells();
	generate_grid_container();
	add_hover();
});

function generate_grid_cells() {
	var cell_num = 1;

	for (var i = 0; i < 16; i++) {
		for (var j = 0; j < 16; j++) {
			document.body.innerHTML += "<div class=\"grid_cell\">"+ cell_num++ +"</div>";
		}
		document.body.innerHTML += "<br>";
	}
}

function generate_grid_container() {
	document.body.innerHTML = "<div class=\"grid_cont\">" + document.body.innerHTML;
	document.body.innerHTML += "</div>";
}

function add_hover() {
	$(".grid_cell").hover(
		function() {
			$(this).addClass("grid_cell_hover");
		},
		function() {
			//$(this).removeClass("grid_cell_hover");
		}
	);
}