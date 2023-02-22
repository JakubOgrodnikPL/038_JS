const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

const fchange = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = "";
	} else {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = "";
	}
};

const fconvert = () => {
	if (one.textContent === "°C" && converter.value !== "") {
		fahrenheit = converter.value * 1.8 + 32;
		result.textContent = `${converter.value}°C to ${fahrenheit}°F`;
		converter.value = "";
	} else if (one.textContent === "°F" && converter.value !== "") {
		celsius = ((converter.value - 32) / 1.8).toPrecision(2);
		result.textContent = `${converter.value}°F to ${celsius}°C`;
		converter.value = "";
	} else {
		result.textContent = "Musisz podać jakąś wartość!";
	}
};

freset = () => {
	result.textContent = "";
	converter.value = "";
};

changeBtn.addEventListener("click", fchange);
convBtn.addEventListener("click", fconvert);
resetBtn.addEventListener("click", freset);
