var buttons = document.querySelectorAll("button");
var display = document.querySelector("input[type='text']");

for (var i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", function() {
		if (this.id === "=") {
			display.value = eval(display.value);
		} else if (this.id === "c") {
			display.value = "";
		} else {
			display.value += this.id;
		}
	});
}
