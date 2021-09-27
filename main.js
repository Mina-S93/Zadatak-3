let email = document.querySelector("input[type=text]");
let form = document.querySelector("form");
let message = document.createElement("p");
message.classList.add("messageClass");

form.addEventListener("submit", (e) => {
	e.preventDefault();

	//Regular expression for validating email format
	let regex =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (email.value == "") {
		message.innerText = "Oops! Please add your email";
		form.appendChild(message);
	} else if (!regex.test(email.value)) {
		message.innerText = "Oops! Please check your email";
		form.appendChild(message);
	} else {
		message.remove();
	}
});
