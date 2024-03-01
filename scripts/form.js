const ps1 = document.querySelector("#password");
const ps2 = document.querySelector("#Confirmpassword");
const message = document.querySelector("#message");

ps2.addEventListener("focusout", checkSame);


function checkSame() {
	if (ps1.value !== ps2.value) {
		message.textContent = "❗Key Phrases DO NOT MATCH!";
		message.style.visibility = "show";
		ps2.style.backgroundColor = "#fff0f3";
		ps2.value = "";
		ps2.focus();
	} else {
		message.style.display = "none";
		ps2.style.backgroundColor = "#fff";
		ps2.style.color = "#000";
	}
}






const rangevalue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
    rangevalue.innerHTML = range.value;
}

document.addEventListener("DOMContentLoaded", function () {
	
	function handleSubmit(event) {
		
		event.preventDefault();

		
		let formt = event.target;
		let formData = new FormData(formt);

		
		for (let pair of formData.entries()) {
			console.log(pair[0] + ": " + pair[1]);
		}
	}

	const form = document.querySelector("form");
	form.addEventListener("submit", handleSubmit);
});
