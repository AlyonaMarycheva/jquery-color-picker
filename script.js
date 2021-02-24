
let isTextColor = true;
let backgroundColor = {
  r: 255,
  g: 255, 
  b: 255
};

let textColor = {
  r: 0,
  g: 0, 
  b: 0
};

$(function() {
  $("#red, #green, #blue").slider({
    range: "min", 
    max: 255,
    change: setColor
  });

  if (!textColor) {
    $("#red").slider("value", backgroundColor.r);
    $("#green").slider("value", backgroundColor.g);
    $("#blue").slider("value", backgroundColor.b);
  }
});

$(function () {
  $("#radioButtons").buttonset();
  $("#colorButton").click(function() {clickHandler(backgroundColor, textColor)});
  $("#backgroundColorButton").click(function() {clickHandler(textColor, backgroundColor)});
});


function setColor() {
  let red = $('#red').slider("value");
  let green = $('#green').slider("value");
  let blue = $('#blue').slider("value");
  isTextColor ? $("#text").css("color", `rgb(${red}, ${green}, ${blue})`) : $("#text").css("background-color", `rgb(${red}, ${green}, ${blue})`);
};

function clickHandler(previousParam, selectedParam) {
  isTextColor = !isTextColor;

  previousParam.r = $('#red').slider("value");
  previousParam.g = $('#green').slider("value");
  previousParam.b = $('#blue').slider("value");

  $("#red").slider("value", selectedParam.r);
  $("#green").slider("value", selectedParam.g);
  $("#blue").slider("value", selectedParam.b);
};









