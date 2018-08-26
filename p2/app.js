// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var table = $('#pixel_canvas');
$('#sizePicker').on("submit",function(event) {
	$("#pixel_canvas").children().remove();
  event.preventDefault();
  makeGrid();  
});

function makeGrid() {
//get the input values
var height = $("#input_height").val();
var width = $("#input_width").val();
//Create grid
for (var i = 0; i < height; i++) {
        var row = $('<tr></tr>');
        table.append(row);
	for (var j = 0; j < width; j++) {
        row.append('<td></td>');
    }
  }
};
  table.on("click", "td", function() {
    //Get color from color picker
    var color = $("input[type='color']").val();
    //Apply color to cell
    $(this).attr('bgColor', color);
  });
table.on("click","button",function clearAll() {table.children().remove();
});