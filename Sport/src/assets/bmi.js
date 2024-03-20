
window.onload = () => {
	let button = document.querySelector("#btn");

	if(button)
	{
	// FUNKCIJA
	button.addEventListener("click", calculateBMI);
	}
};

function calculateBMI() {

	/* SE ZACHUVUVA VREDNOSTA VNESENA OD KORISNIKOT.
	IMA TYPECAST BIDEJKI SE VNESUVA STRING. */
	let height = parseInt(document
			.querySelector("#height").value);

	/* ISTOTO SE POVTORUVA I ZA TEZHINA */
	let weight = parseInt(document
			.querySelector("#weight").value);

	let result = document.querySelector("#result");

	/* SE PROVERUVA DALI VREDNOSTA E VALIDNA */

	if ((height === "" || isNaN(height)||height===0)&&(weight === "" || isNaN(weight)||weight===0))
		result.innerHTML = "Provide a valid Height & Weight!";

	else if (height === "" || isNaN(height) || height===0)
		result.innerHTML = "Provide a valid Height!";

	else if (weight === "" || isNaN(weight) || weight===0)
		result.innerHTML = "Provide a valid Weight!";

	// Ako gi pomine uslovite, togas da se presmeta BMI
	else {

		// 2 decimalni mesta
		let bmi = (weight / ((height * height)
							/ 10000)).toFixed(2);

		// Vrakanje rezultat i odreduvanje na granica
		if (bmi < 18.6) result.innerHTML =
			`Under Weight : <span>${bmi}</span> <br> Your estimated program is: MUSCLE GAIN`;

		else if (bmi >= 18.6 && bmi < 24.9)
			result.innerHTML =
				`Normal : <span>${bmi}</span> <br> Your estimated program is: STAY IN SHAPE`;

		else result.innerHTML =
			`Over Weight : <span>${bmi}</span> <br> Your estimated program is: WEIGHT LOSS`;
	}
}