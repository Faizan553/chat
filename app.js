function login() {
    var email = document.getElementById('exampleInputEmail1')
    var password = document.getElementById('exampleInputPassword1')

    firebase.auth().signInWithEmailAndPassword(email.value, password.value)
        .then(function (result) {
            window.location = "chat.html"
        })

        .catch(function (error) {
            alert("There is no user record corresponding to this identifier.Please register your account")
        })
    email.value = ""
    password.value = ""
}




