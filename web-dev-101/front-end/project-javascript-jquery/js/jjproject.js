$(document).ready(function() {
	generate_grid(16);
});

function generate_grid(grid_size) {
	clear_page();
	generate_grid_container();
	generate_grid_cells(grid_size);
	add_button();
	add_hover();
}

function clear_page() {
	document.body.innerHTML = "";
}

function generate_grid_container() {
	document.body.innerHTML = "<div id=\"grid_cont\">" + document.body.innerHTML;
	document.body.innerHTML += "</div>";
}

function generate_grid_cells(grid_size) {
	var cell_num = 1;

	for (var i = 0; i < grid_size; i++) {
		for (var j = 0; j < grid_size; j++) {
			document.getElementById("grid_cont").innerHTML += "<div class=\"grid_cell\">"+ cell_num++ +"</div>";
		}
	}

	$("#grid_cont").css("width", 50 * grid_size + "px");
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

function add_button() {
	button_code = "<div id=\"button_cont\"><button type=\"button\" id=\"the_button\">Reset Grid</button></div>";
	document.body.innerHTML = button_code + document.body.innerHTML;
	document.getElementById("the_button").onclick = function () {
	user_size = prompt("Enter New Grid Size:");
	generate_grid(user_size);
	};
}