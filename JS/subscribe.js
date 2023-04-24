/* Almabrouk Ben-Omran
   60104920
   Project
*/


function validate_fullname() {

	let fullname = document.getElementById("name")

	let fullname_errormsg = document.getElementById("fullname_errormsg")

	let numbers = /\d/

	let special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

	let show_pass = document.getElementById("show_pass")


	//Tests if full name field value is empty


	if (fullname.value == "") {

		fullname.style.border = "2px solid red"

		fullname_errormsg.style.visibility = "visible"

		fullname_errormsg.innerHTML = "Please enter your full name!"

		fullname_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-10em"

		return false


	//Tests if full name value contains an integer or special character


	} else if (numbers.test(fullname.value) == true || special_characters.test(fullname.value) == true) {

		fullname.style.border = "2px solid red"

		fullname_errormsg.style.visibility = "visible"

		fullname_errormsg.innerHTML = "Full name must be composed of only letters!"

		fullname_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-1em"

		return false


	//Error message is removed


	} else {

		fullname_errormsg.style.visibility = "hidden"

		fullname.style.border = ""

		return true
	}
}



function validate_username() {

	let username = document.getElementById("user")

	let username_errormsg = document.getElementById("username_errormsg")

	let show_pass = document.getElementById("show_pass")

	let numbers = /\d/

	let special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/


	//Tests if username value is empty


	if (username.value == "") {

		username.style.border = "2px solid red"

		username_errormsg.style.visibility = "visible"

		username_errormsg.innerHTML = "Please enter your username!"

		username_errormsg.style.color = "red"

		return false


	//Tests if username value contains an integer or special character

	
	} else if (numbers.test(username.value) == true || special_characters.test(username.value)) {

		username.style.border = "2px solid red"

		username_errormsg.style.visibility = "visible"

		username_errormsg.innerHTML = "Username must be composed of only letters!"

		username_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-1em"

		return false


	//Error message is removed


	} else {

		username_errormsg.style.visibility = "hidden"

		username.style.border = ""

		return true
	}
}


function validate_password() {

	let password = document.getElementById("pass")

	let password_errormsg = document.getElementById("password_errormsg")

	let numbers = /\d/

	let letters = /[a-zA-Z]/

	let special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/

	let show_pass = document.getElementById("show_pass")


	//Tests if password field value is empty


	if (password.value == "") {

		password.style.border = "2px solid red"

		password_errormsg.style.visibility = "visible"

		password_errormsg.innerHTML = "Please enter your password!"

		password_errormsg.style.color = "red"

		return false


	//Tests if length of password field value is less than 8 characters 


	} else if (password.value.length < 8) {

		password.style.border = "2px solid red"

		password_errormsg.style.visibility = "visible"

		password_errormsg.innerHTML = "Password must be at least eight characters long!"

		password_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-2em"

		return false


	//Tests if password field value does not contain at least 1 letter, 1 number, and 1 special character


	} else if (numbers.test(password.value) == false || letters.test(password.value) == false || special_characters.test(password.value) == false) {

		password.style.border = "2px solid red"

		password_errormsg.style.visibility = "visible"

		password_errormsg.innerHTML = "Password must contain at least one letter, one number and one special character!"

		password_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-1em"

		return false


	//Error message is removed

	
	} else {

		password_errormsg.style.visibility = "hidden"

		password.style.border = ""

		return true 
	}
}


function validate_password_confirmation() {

	let password = document.getElementById("pass")

	let confirm_password = document.getElementById("confirm_pass")

	let confirm_password_errormsg = document.getElementById("confirm_password_errormsg")


	//Tests if password confirmation field value is empty


	if (confirm_password.value == "") {

		confirm_password.style.border = "2px solid red"

		confirm_password_errormsg.style.visibility = "visible"

		confirm_password_errormsg.innerHTML = "Please confirm your password!"

		confirm_password_errormsg.style.color = "red"

		return false


	//Tests if password confirmation field value does not match password field value


	} else if (password.value != confirm_password.value) {

		confirm_password.style.border = "2px solid red"

		confirm_password_errormsg.style.visibility = "visible"

		confirm_password_errormsg.innerHTML = "Confirmed password does not match!"

		confirm_password_errormsg.style.color = "red"

		return false


	//Error message is removed


	} else {

		confirm_password_errormsg.style.visibility = "hidden"

		confirm_password.style.border = ""

		return true
	}
}


function validate_email() {

	let email = document.getElementById("email")

	let email_errormsg = document.getElementById("email_errormsg")

	let show_pass = document.getElementById("show_pass")

	let format = /^[^\s@]+@[^\s@]{2,}\.edu\.qa$/



	//Tests if email field value is empty


	if (email.value == "") {

		email.style.border = "2px solid red"

		email_errormsg.style.visibility = "visible"

		email_errormsg.innerHTML = "Please enter your email!"

		email_errormsg.style.color = "red"

		return false


	//Tests if email field value does not contain @ symbol + min of 2 characters + .edu.qa

	
	} else if (format.test(email.value) == false) {

		email.style.border = "2px solid red"

		email_errormsg.style.visibility = "visible"

		email_errormsg.innerHTML = "Email must contain @ symbol + two or more characters + .edu.qa"

		email_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-1em"

		return false


	//Error message is removed


	} else {

		email_errormsg.style.visibility = "hidden"

		email.style.border = ""

		return true
	}
}


function validate_email_confirmation() {

	let email = document.getElementById("email")

	let confirm_email = document.getElementById("confirm_email")

	let confirm_email_errormsg = document.getElementById("confirm_email_errormsg")

	let show_pass = document.getElementById("show_pass")


	//Tests if email confirmation field value is empty


	if (confirm_email.value == "") {

		confirm_email.style.border = "2px solid red"

		confirm_email_errormsg.style.visibility = "visible"

		confirm_email_errormsg.innerHTML = "Please confirm your email!"

		confirm_email_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-9em"

		return false


	//Tests if email confirmation field value does not match email field value


	} else if (email.value != confirm_email.value) {

		confirm_email.style.border = "2px solid red"

		confirm_email_errormsg.style.visibility = "visible"

		confirm_email_errormsg.innerHTML = "Confirmed email does not match!"

		confirm_email_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-9em"

		return false


	//Error message is removed


	} else {

		confirm_email_errormsg.style.visibility = "hidden"

		confirm_email.style.border = ""

		return true
	}
}


function validate_phone() {

	let phone = document.getElementById("phone")

	let phone_errormsg = document.getElementById("phone_errormsg")

	let show_pass = document.getElementById("show_pass")

	let letters = /[a-zA-Z]/

	let special_characters = /[`!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]/


	//Tests if phone field value is empty


	if (phone.value == "+974" || phone.value == "" ) {

		phone.style.border = "2px solid red"

		phone_errormsg.style.visibility = "visible"

		phone_errormsg.innerHTML = "Please enter your phone number!"

		phone_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-9em"

		return false


	//Remove all whitespace instances from phone field value and test if phone field value is exactly 12 digits

	
	} else if (phone.value.replace(/[ ]+/g, "").length < 12 || phone.value.replace(/[ ]+/g, "").length > 12) {

		phone.style.border = "2px solid red"

		phone_errormsg.style.visibility = "visible"

		phone_errormsg.innerHTML = "Phone number must have exactly 12 digits in total (including Qatar's country code)!"

		phone_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-1em"

		return false


	//Remove all whitespace instances from phone value and test if phone value consists of digits only


	} else if (letters.test(phone.value.replace(/[ ]+/g, "")) == true || special_characters.test(phone.value.replace(/[ ]+/g, "")) == true) {

		phone.style.border = "2px solid red"

		phone_errormsg.style.visibility = "visible"

		phone_errormsg.innerHTML = "Phone number must contain digits only!"

		phone_errormsg.style.color = "red"

		return false


	//Error message is removed

	
	} else {

		phone_errormsg.style.visibility = "hidden"

		phone.style.border = ""

		return true
	}
}


function validate_dob() {

	let age = document.getElementById("age")

	let show_pass = document.getElementById("show_pass")


	//Use for empty field validation + changing field border


	let empty_dob = document.getElementById("dob")


	//Stores value of date of birth field


	let dob_input = document.getElementById("dob").value


	//Stores value of date of birth field as date object


	let dob_date = new Date(dob_input)


	//Calculate month difference from current date in time


	let month_diff = Date.now() - dob_date.getTime()


	//convert the calculated difference in date format


	let age_date = new Date(month_diff)


	//Extract year from date


	let year = age_date.getUTCFullYear()


	//Calculate the age of the user


	let calculated_age = Math.abs(year - 1970)

	let dob_errormsg = document.getElementById("dob_errormsg")




	//Test if date of birth field value is empty

	
	if (empty_dob.value == null || empty_dob.value == "") {

		empty_dob.style.border = "2px solid red"

		dob_errormsg.style.visibility = "visible"

		dob_errormsg.innerHTML = "Please enter your date of birth!"

		dob_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-7em"

		return false


	//Test if calculated age is not equal to the value in age field


	} else if (calculated_age != age.value) {

		empty_dob.style.border = "2px solid red"

		dob_errormsg.style.visibility = "visible"

		dob_errormsg.innerHTML = "Date of birth and age do not match!"

		dob_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-7em"

		return false


	//Error message removed

	} else {

		dob_errormsg.style.visibility = "hidden"

		empty_dob.style.border = ""

		return true
	}
}


function validate_age() {

	let age = document.getElementById("age")

	let empty_dob = document.getElementById("dob")

	let show_pass = document.getElementById("show_pass")

	let age_errormsg = document.getElementById("age_errormsg")
	
	let dob_errormsg = document.getElementById("dob_errormsg")


	//Test if age field value is empty


	if (age.value == "") {

		age.style.border = "2px solid red"

		age_errormsg.style.visibility = "visible"

		age_errormsg.innerHTML = "Please enter your age!"

		age_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-9em"

		return false


	//Test if age input is between 18 and 100


	} else if (parseInt(age.value) < 18 || parseInt(age.value) > 100) {

		age.style.border = "2px solid red"

		age_errormsg.style.visibility = "visible"

		age_errormsg.innerHTML = "Sorry, you must be between 18 and 100 years old!"

		age_errormsg.style.color = "red"

		show_pass.style.marginLeft = "-2em"

		return false


	//Tests if date of birth input equals age input and removes all error messages

	
	} else if (validate_dob() == true) {

		dob_errormsg.style.visibility = "hidden"

		age_errormsg.style.visibility = "hidden"

		empty_dob.style.border = ""

		age.style.border = ""

		return true

	//If date of birth input equals age input and age is between 18 and 100 then all error messages are removed

	} else {

		age_errormsg.style.visibility = "hidden"

		age.style.border = ""

		return true
	}
}


function validate_building_number() {

	let building = document.getElementById("building")

	let building_errormsg = document.getElementById("building_errormsg")

	let newsletter = document.getElementById("newsletter")


	//Test if building number field value is empty


	if (building.value == "") {

		building.style.border = "2px solid red"

		building_errormsg.style.visibility = "visible"

		building_errormsg.innerHTML = "Please enter your building number!"

		building_errormsg.style.color = "red"

		newsletter.style.marginLeft = "-21em"

		return false


	//Test if building number field value is between 1 and 666


	} else if (parseInt(building.value) < 1 || parseInt(building.value) > 666) {

		building.style.border = "2px solid red"

		building_errormsg.style.visibility = "visible"

		building_errormsg.innerHTML = "Building number must be between 1 and 666!"

		building_errormsg.style.color = "red"

		newsletter.style.marginLeft = "-20em"

		return false


	//Error message removed


	} else {

		building_errormsg.style.visibility = "hidden"

		building.style.border = ""

		return true
	}
}


function validate_checkbox() {

	let show_pass = document.getElementById("show_pass")

	let password = document.getElementById("pass")


	//Tests if show password checkbox is checked and reveals the password


	if (show_pass.checked == true) {

		password.type = "text"

	} else {

		password.type = "password"
	}
}


function validate_street_name() {

	let street = document.getElementById("street")

	let street_errormsg = document.getElementById("street_errormsg")

	let newsletter = document.getElementById("newsletter")

	let numbers = /\d/

	let special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/


	//Tests if street name field value is empty


	if (street.value == "") {

		street.style.border = "2px solid red"

		street_errormsg.style.visibility = "visible"

		street_errormsg.innerHTML = "Please enter your street name!"

		street_errormsg.style.color = "red"

		newsletter.style.marginLeft = "-23em"

		return false


	//Tests if street name field value contains numbers or special characters

	
	} else if (numbers.test(street.value) == true || special_characters.test(street.value) == true) {

		street.style.border = "2px solid red"

		street_errormsg.style.visibility = "visible"

		street_errormsg.innerHTML = "Street name must be composed of only letters!"

		street_errormsg.style.color = "red"

		newsletter.style.marginLeft = "-20em"

		return false


	//Error messages removed


	} else {

		street_errormsg.style.visibility = "hidden"

		street.style.border = ""

		return true

	}
}


function validate_form() {

	let fullname = validate_fullname()

	let username = validate_username()

	let password = validate_password()

	let password_confirmation = validate_password_confirmation()

	let email = validate_email()

	let email_confirmation = validate_email_confirmation()

	let phone_number = validate_phone()

	let dob = validate_dob()

	let age = validate_age()

	let building_number = validate_building_number()

	let street_name = validate_street_name()


	//Test if all field values are not empty and in the correct format then submits to the SIT server


	if (fullname && username && password && password_confirmation && email && email_confirmation && phone_number && dob && age && building_number && street_name) {

		return true

	} else {

		return false
	}
}














