/* Almabrouk Ben-Omran
   60104920
   Project
*/

function validate_fullname() {

   let fullname = document.getElementById("name")

   let numbers = /\d/

   let special_characters = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/


   //Tests if full name field value is empty


   if (fullname.value == "") {

      fullname.placeholder = "please enter your full name!"

      fullname.style.border = "2px solid red"

      fullname.classList.add("placeholder")

      return false


   //Tests if full name field value contains numbers or special characters

   
   } else if (numbers.test(fullname.value) == true || special_characters.test(fullname.value) == true) {

      fullname.value = ""

      fullname.placeholder = "full name must be composed of only letters!"

      fullname.style.border = "2px solid red"

      fullname.classList.add("placeholder")

      return false


   //Error message is removed


   } else {

      fullname.style.border = ""

      return true

   }
}


function validate_message() {

   let message = document.getElementById("message")


   //Tests if text area field value is empty


   if (message.value == "") {

      message.placeholder = "please enter your inquiry!"

      message.style.border = "2px solid red"

      message.classList.add("placeholder")

      return false


   //Error message is removed


   } else {

      message.style.border = ""

      return true
   }
}


function validate_contact_method() {

   let phone = document.getElementById("contact_phone_call")

   let email = document.getElementById("contact_email")

   let sms = document.getElementById("SMS")

   let whatsapp = document.getElementById("whatsapp")

   let contact_errormsg = document.getElementById("contact_errormsg")


   //Tests if all contact method radio buttons are not checked


   if (phone.checked == false && email.checked == false && sms.checked == false && whatsapp.checked == false) {

      contact_errormsg.style.display = "inline"

      contact_errormsg.innerHTML = "Please select a preferred contact method!"

      contact_errormsg.style.color = "red"

      return false


   //Error message is removed

   
   } else {

      contact_errormsg.style.display = "none"

      return true
   }
}


function validate_user_info() {

   let phone = document.getElementById("contact_phone_call")

   let email = document.getElementById("contact_email")

   let user_info = document.getElementById("user_info")

   let label_userinfo = document.getElementById("label_userinfo")


   //Tests if email radio button is checked and changes field type to email


   if (email.checked == true) {

      label_userinfo.innerHTML = "E-Mail*:"

      user_info.type = "email"

      user_info.value = ""

      user_info.placeholder = "please enter your email"

      user_info.classList.add("placeholder")


   //Tests if phone, SMS, or whatsapp radio button is checked and changes field type to tel


   } else {

      label_userinfo.innerHTML = "Phone Number*:"

      user_info.type = "tel"

      user_info.value = "+974 "
   }
}


function validate_field_format() {

   let user_info = document.getElementById("user_info")

   let letters = /[a-zA-Z]/

   let special_characters = /[`!@#$%^&*()_\-=\[\]{};':"\\|,.<>\/?~]/

   let format = /^[^\s@]+@[^\s@]{2,}\.edu\.qa$/


   //Tests if field type contains only Qatar's country code or is empty


   if (user_info.value == "+974" || user_info.value == "") {

      user_info.placeholder = "please enter your contact information!"

      user_info.style.border = "2px solid red"

      user_info.classList.add("placeholder")

      return false


   //Tests if field is of type tel, removes all whitespace instances from field value and checks if field value is exactly 12 digits

   
   } else if (user_info.type == "tel" && (user_info.value.replace(/[ ]+/g, "").length < 12 || user_info.value.replace(/[ ]+/g, "").length > 12)) {

      user_info.value = ""

      user_info.placeholder = "phone number must contain Qatar's country code + 8 digits!"

      user_info.style.border = "2px solid red"

      user_info.classList.add("placeholder")

      return false


   //Tests if field is of type tel, removes all whitespace instances from field value and tests if field value consists of digits only


   } else if (user_info.type == "tel" && (letters.test(user_info.value.replace(/[ ]+/g, "")) == true || special_characters.test(user_info.value.replace(/[ ]+/g, "")) == true)) {

      user_info.value = ""

      user_info.placeholder = "phone number must contain digits only!"

      user_info.style.border = "2px solid red"

      user_info.classList.add("placeholder")

      return false


   //Tests if field is of type email and if field value does not contain @ symbol + min of 2 characters + .edu.qa

   
   } else if (user_info.type == "email" && format.test(user_info.value) == false) {

      user_info.value = ""

      user_info.placeholder = "email must contain @ symbol + two or more characters + .edu.qa"

      user_info.style.border = "2px solid red"

      user_info.classList.add("placeholder")

      return false


   //Error message is removed


   } else {

      user_info.style.border = ""

      return true

   }
}


function validate_form() {

   let fullname = validate_fullname()

   let message = validate_message()

   let contact_method = validate_contact_method()

   let field_format = validate_field_format()


   //Test if all field values are not empty and in the correct format then submits to the SIT server
   

   if (fullname && message && user_info && contact_method && field_format) {

      return true
   
   } else {

      return false
   }
}







