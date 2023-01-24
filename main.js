window.addEventListener("scroll", () => {

    if (window.scrollY < 100) {
        document.getElementById("top-button").style.opacity = 0;
    } else {
        document.getElementById("top-button").style.opacity = 1;
    }
})

function validateForm() {
    let name = document.querySelector("#nameInput"); 
    let email = document.querySelector("#emailInput");
    let username = document.querySelector("#usernameInput");
    let password = document.querySelector("#passwordInput");
    let checkbox = document.querySelector("#checkboxInput")

    let nameError = document.querySelector("#nameError");
    let emailError = document.querySelector("#emailError");
    let usernameError = document.querySelector("#usernameError");
    let passwordError = document.querySelector("#passwordError");
    let checkboxError = document.querySelector("#checkboxError");
    let isValid = true;

    if (!name.value.match(/^[A-Za-z]{3,20}$/)) {
        nameError.textContent = "The name must have 3-20 letters";
        isValid = false;
    } else {
        nameError.textContent = "";
    }

    if (!email.value.match(/^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/)) {
        emailError.textContent = "Invalid email format";
        isValid = false;
    } else {
        emailError.textContent = "";
    }

    if (!username.value.match(/^[A-Za-z0-9]{6,20}$/)) {
        usernameError.textContent = "The username must have 6-20 characters and can only contain letters and numbers";
        isValid = false;
    } else {
        usernameError.textContent = "";
    }
    if (!password.value.match(/^(?=.*[a-z])(?=.*\d)[a-zA-Z\d\w\W]{5,15}$/)) {
        passwordError.textContent = "The password must have 5-15 characters, at least one letter and one number";
        isValid = false;
    } else {
        passwordError.textContent = "";
    }
    if (!checkbox.checked){
        checkboxError.textContent ="You have to agree with our terms and privacy policy"
    }else{
        checkboxError.textContent = "";
    }
}