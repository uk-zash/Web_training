document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let errors = document.getElementsByClassName("error");
    for (let error of errors) {
        error.style.display = "none";
    }

    let isValid = true;


    let name = document.getElementById("name").value;
    let namePattern = /^[A-Za-z\s]+$/;
    if (!namePattern.test(name)) {
        document.getElementById("nameError").textContent = "Please enter a valid name.";
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    }


    let doj = document.getElementById("doj").value;
    let dojPattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!dojPattern.test(doj)) {
        document.getElementById("dojError").textContent = "Please enter a valid date (YYYY-MM-DD).";
        document.getElementById("dojError").style.display = "block";
        isValid = false;
    }


    let email = document.getElementById("email").value;
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        document.getElementById("emailError").textContent = "Please enter a valid email address.";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    }


    let phone = document.getElementById("phone").value;
    let phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        document.getElementById("phoneError").textContent = "Please enter a valid 10-digit phone number.";
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    }


    let address = document.getElementById("address").value;
    if (address.trim() === "") {
        document.getElementById("addressError").textContent = "Address cannot be empty.";
        document.getElementById("addressError").style.display = "block";
        isValid = false;
    }


    let pincode = document.getElementById("pincode").value;
    let pincodePattern = /^\d{6}$/;
    if (!pincodePattern.test(pincode)) {
        document.getElementById("pincodeError").textContent = "Please enter a valid 6-digit pin code.";
        document.getElementById("pincodeError").style.display = "block";
        isValid = false;
    }


    let gender = document.querySelector('input[name="gender"]:checked');
    if (!gender) {
        document.getElementById("genderError").textContent = "Please select a gender.";
        document.getElementById("genderError").style.display = "block";
        isValid = false;
    }


    let state = document.getElementById("state").value;
    if (state === "") {
        document.getElementById("stateError").textContent = "Please select a state.";
        document.getElementById("stateError").style.display = "block";
        isValid = false;
    }

    if (isValid) {
        alert("Registration successful!");
    }
});
