function validateForm(event) {
    event.preventDefault()
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var cpassword = document.getElementById("cpassword").value;
    var country = document.getElementById("country").value;


    if (email == null || email == "") {
        document.getElementById("emailError").innerHTML = "Please enter your email";
    }

    if (fname == null || fname == "") {
        document.getElementById("fnameError").innerHTML = "Please enter your first name";
    }

    if(lname == null || lname == "") {

        document.getElementById("lnameError").innerHTML = "Please enter your last name";
    }

    if (phone == null || phone == "") {
        document.getElementById("phoneError").innerHTML = "Please enter your phone number";
    }

    if (password == null || password == "") {
        document.getElementById("passwordError").innerHTML = "Please enter your password";
    }

   if (cpassword == null || cpassword == "") {
        document.getElementById("cpasswordError").innerHTML = "Please enter your password again";
     
    }
    if (cpassword != password) {
        document.getElementById("cpasswordError").innerHTML = "Password does not match";
    }

    
   
    function isValidEmail(email){
        var emailRegex =/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
        return emailRegex.test(email);
    }
    
    return true;
}