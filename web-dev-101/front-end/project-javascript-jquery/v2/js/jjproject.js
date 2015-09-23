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
		"<button id=\"mode3\" onclick=\"regenerate(3)\">RNG</button>" +
		"<button id=\"mode4\" onclick=\"regenerate(4)\">Game</button>");
	
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
			$the_grid.append("<div id=\"x" + i + "y" + j + "\" class=\"grid_cell\"></div>");
		}
	}

	cell_size = ($the_grid.width() / grid_size) - 2;

	$(".grid_cell").css("height", cell_size);
	$(".grid_cell").css("width", cell_size);

	// Adjust grid height to compensate for lost pixels (rounding)
	$the_grid.css("height", (Math.floor(cell_size)+2) * grid_size);

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

	else if (mode == 4) { // Game Mode
	$(".grid_cell").click(
		function() {
			target_id = $(this).attr('id');

			//Handle various cell id lengths
			target_y_loc = target_id.indexOf("y");
			target_x = parseInt(target_id.substring(1,target_y_loc));
			target_y = parseInt(target_id.substring(target_y_loc + 1));
			
			// toggle the 8 adjacent cells
			for (var i = -1; i <= 1; i++) {
				for (var j = -1; j <= 1; j++) {
					if (!((i == 0) && (j == 0))) $("#x"+(target_x+i)+"y"+(target_y+j)).toggleClass("grid_cell_game");
				}
			}

		});
	}

}

function getRandomColor() {
    var values = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
       	color += values[Math.floor(Math.random() * 16)];
    }
    return color;
}; // end getRandomColor