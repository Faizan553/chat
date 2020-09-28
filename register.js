// register


function register() {
    var user = document.getElementById('user')
    var email = document.getElementById('exampleInputEmail1')
    var password = document.getElementById('exampleInputPassword1')

    firebase.auth().createUserWithEmailAndPassword(email.value, password.value)
        .then(function (result) {
            alert("Account Register Succesfully")
            window.location = "index.html"

            //     key = firebase.database().ref('user').push().key
            //     data ={
            //         user:user.value,
            //         key:key
            //     }
            //     firebase.database().ref('user').child(key).set(data)
            //     // window.location="index.html"
            //     firebase.database().ref('user').on('child_added',function(data){
            //         var time = setInterval(mytime,1000)
            //         function mytime(){
            //             window.location="index.html"

            //         }
            //   setInterval(() => {
            //       clearInterval(time)
            //   }, 1500);
            //          })
        })
        .catch(function (error) {
            console(error.message)
        })

}