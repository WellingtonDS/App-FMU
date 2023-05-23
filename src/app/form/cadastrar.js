const form = document.querySelector('#form')
const firstName = document.querySelector("#firstname")
const lastName = document.querySelector("#lastname")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const phone = document.querySelector("#phone")
const confirmPassword = document.querySelector("#confirmPassword")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // verifica se nome esta vazio
    if (firstName.value === "" ) {
        alert("campo nome vazio");
        return;
    }

    if (lastName.value === "" ) {
        alert("campo nome vazio");
        return;
    }
    
    if (email.value === "" || !isEmailValid(email.value) ) {
        alert("campo email vazio");
        return;
    }
    if (password.value === "" ) {
        alert("campo nome vazio");
        return;
    }
    if (phone.value === "" ) {
        alert("campo nome vazio");
        return;
    }
    if (confirmPassword.value === "" ) {
        alert("campo nome vazio");
        return;
    }

    form.submit();
});

// ValidityStatecao de email
function isEmailValid(email) {
    const emailRegex = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-z]{2,}$/
    )

    if (emailRegex.test(email)) {
        return true;
    } else {
        return false;
    }
}