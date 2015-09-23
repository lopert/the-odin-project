$(document).ready(function() {
	//build page
	document.body.innerHTML += "<div id=\"title_cont\"></div>";
	document.body.innerHTML += "<div id=\"button_cont\"></div>";
	document.body.innerHTML += "<div id=\"grid_cont\"></div>";

	// Add Title
	$("#title_cont").html("Javascript / JQuery Etch-A-Sketch");

	// Add Buttons
	$("#button_cont").html(
		"<button id=\"mode1\" onclick=\"regenerate(1)\">Highlight</button>" +
		"<button id=\"mode2\" onclick=\"regenerate(2)\">Shading</button>" +
		"<button id=\"mode3\" onclick=\"regenerate(3)\">RNG</button>");
	
	// Generate the default grid
	generate_grid(16,1);
});

function regenerate(mode) {
	var input = prompt("Enter Grid Size");
	generate_grid(input, mode);
}

function generate_grid(grid_size, mode) {

	var $the_grid = $("#grid_cont")
	$the_grid.html("");

	for (var i = 0; i < grid_size; i++) {
		for (var j = 0; j < grid_size; j++) {
			$the_grid.append("<div class=\"grid_cell\"></div>");
		}
	}

	cell_size = ($the_grid.width() / grid_size) - 2;

	$(".grid_cell").css("height", cell_size);
	$(".grid_cell").css("width", cell_size);

	$the_grid.css("height", cell_size * grid_size);

	// Mode Behaviour	
	if (mode == 1) { // Highlight mode
		$(".grid_cell").hover(
			function () {
				$(this).addClass("grid_cell_hover");
			},
			function () {
				//$(this).removeClass("grid_cell_hover");
			}
		);		
	}
	else if (mode == 2) { // Shading mode
		$(".grid_cell").hover(
			function() {
				var opacity = $(this).css("opacity");
				if (opacity > 0) $(this).css("opacity", opacity - 0.1);
			},
			function () {

			}
		);
	}
	else if (mode == 3) { // Random Mode
	$(".grid_cell").hover(
		function() {
			$(this).css("background-color", getRandomColor());
		},
		function () {

			}
		);
	}

}

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
       	color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}; // end getRandomColor