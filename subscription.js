function validateData(){
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const birthdate = document.getElementById("birthdate").value
    const gender = document.getElementById("gender").value
    const agree = document.getElementById("agree")

    let valid = true

    console.log(gender)

    if(username.length < 3 || username.length > 15){
        alert("Username must be between 3-15 characters.")
        valid = false
    }
    else if(!email.endsWith("@gmail.com") && !email.endsWith("@binus.ac.id")){
        alert("Email must end with '@gmail.com' or '@binus.ac.id'.")
        valid = false
    }
    else if(birthdate == ""){
        alert("Date of birth must be selected.")
        valid = false
    }
    else if(gender == ""){
        alert("Gender must be selected.")
        valid = false
    }
    else if(!agree.checked){
        alert("You must agree to the terms and conditions.")
        valid = false
    }

    if(valid == true){
        alert("Succesfully subscribed!")
    }
}