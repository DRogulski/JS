function checkForm() {
	var error = false; // to znaczy, że danych nie brakuje
	// var errorText = ""; // komunikat z błędem
	var contactName = document.getElementById("contactName");
	var contactEmail = document.getElementById("contactEmail");
	var komentarz = document.getElementById("komentarz");
	// jeśli nic nie wpisano w contactName to jest błąd - sprawdzamy czy
	// contactName jest puste, jeśli tak to dodajemy do errorText pole
	// imię i
	// oznaczamy, że brakuje danych
	if (contactName.value == "") {
		document.getElementById("formularzImie").className = "form-group has-error has-feedback";
		document.getElementById("ikonaImie").className = "glyphicon glyphicon-remove form-control-feedback";
		error = true;
	} else {
		document.getElementById("formularzImie").className = "form-group has-success has-feedback";
		document.getElementById("ikonaImie").className = "glyphicon glyphicon-ok form-control-feedback";
	}
	// jeśli nic nie wpisano w contactEmail to jest błąd - sprawdzamy
	// czy
	// contactEmail jest puste, jeśli tak to dodajemy do errorText pole
	// email i oznaczamy, że brakuje danych
	if (contactEmail.value == "") {
		document.getElementById("formularzEmail").className = "form-group has-error has-feedback";
		document.getElementById("ikonaEmail").className = "glyphicon glyphicon-remove form-control-feedback";
		error = true;
	} else {
		var email = contactEmail.value;
		var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
		if (regex.test(email) == false) {
			document.getElementById("formularzEmail").className = "form-group has-error has-feedback";
			document.getElementById("ikonaEmail").className = "glyphicon glyphicon-remove form-control-feedback";
			error = true;
		} else {
			document.getElementById("formularzEmail").className = "form-group has-success has-feedback";
			document.getElementById("ikonaEmail").className = "glyphicon glyphicon-ok form-control-feedback";
		}
	}
	if (komentarz.value == "") {
		document.getElementById("formularzKomentarz").className = "form-group has-error has-feedback";
		document.getElementById("ikonaKomentarz").className = "glyphicon glyphicon-remove form-control-feedback";
		error = true;
	} else if (komentarz.value.length > 250) {
		document.getElementById("formularzKomentarz").className = "form-group has-error has-feedback";
		document.getElementById("ikonaKomentarz").className = "glyphicon glyphicon-remove form-control-feedback";
		error = true;
	} else {
		document.getElementById("formularzKomentarz").className = "form-group has-success has-feedback";
		document.getElementById("ikonaKomentarz").className = "glyphicon glyphicon-ok form-control-feedback";
	}

	// jeśli nie brakuje danych wysyłamy formularz, jeśli brakuje
	// pojawia
	// się komunikat i formularz nie zostanie wysłany
	if (!error) {
		alert("ok");
		return true;
	} else {
		alert("nie ok");
		return false;
	}

}
