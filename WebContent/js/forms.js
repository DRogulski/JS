function checkForm() {
		
	var error=false;
	var errorText="";		
	var contactName = document.getElementById("contactName"); 
	var contactEmail = document.getElementById("contactEmail");
	var contactInfo = document.getElementById("contactInfo");
			
	if (contactName.value == "") {
		errorText += "imię\n"
		error = true
	}
			
	if (contactEmail.value == "") {
		errorText += "email\n"
		error = true
	} else {
		var email = contactEmail.value;
		var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
		if (regex.test(email) == false) {
			errorText += "błędny email\n";
			error = true;
		}
	}
	
	if (contactInfo.value == "") {
		errorText += "informacje\n"
		error = true
	}
			
	if (!error) return true; else {
		alert("Nie wypełniłeś następujących pól:\n" + errorText);
		return false;
	}
}

function checkForm_2() {
		
	var error=false;
	var errorText="";		
	var contactName = document.getElementById("contactName"); 
	var contactEmail = document.getElementById("contactEmail");
	var contactInfo = document.getElementById("contactInfo");
			
	if (contactName.value == "") {
		document.getElementById('errorName').className='form-group has-error';
		error = true;
	} else {
		document.getElementById('errorName').className='form-group has-success';
	}
			
	if (contactEmail.value == "") {
		document.getElementById('errorEmail').className='form-group has-error';
		error = true;
	} else {
		var email = contactEmail.value;
		var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
		if (regex.test(email) == false) {
			document.getElementById('errorEmail').className='form-group has-error';
			error = true;
		} else {
			document.getElementById('errorEmail').className='form-group has-success';
		}
	}
	
	if (contactInfo.value == "") {
		document.getElementById('errorInfo').className='form-group has-error';
		error = true;
	} else {
		document.getElementById('errorInfo').className='form-group has-success';
	}
			
	if (!error) return true; else {
		return false;
	}
}

function blurName() {
	if (contactName.value == "") {
		document.getElementById('errorName').className='form-group has-error';
		error = true;
	} else {
		document.getElementById('errorName').className='form-group has-success';
	}
}

function blurEmail() {
	if (contactEmail.value == "") {
		document.getElementById('errorEmail').className='form-group has-error';
		error = true;
	} else {
		var email = contactEmail.value;
		var regex = /^[a-zA-Z0-9._-]+@([a-zA-Z0-9.-]+\.)+[a-zA-Z0-9.-]{2,4}$/;
		if (regex.test(email) == false) {
			document.getElementById('errorEmail').className='form-group has-error';
			error = true;
		} else {
			document.getElementById('errorEmail').className='form-group has-success';
		}
	}
}

function blurInfo() {
	if (contactInfo.value == "") {
		document.getElementById('errorInfo').className='form-group has-warning';
		document.getElementById('errorInfo_hide').className='alert alertdanger';
		error = true;
	} else {
		document.getElementById('errorInfo').className='form-group has-success';
		document.getElementById('errorInfo_hide').className='hide';
	}
}
