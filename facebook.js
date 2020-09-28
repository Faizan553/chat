// facebook authentication



function facebook() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
        var user = result.user
        var user1 = user.displayName
        window.location = "chat.html"
        //     key = firebase.database().ref('user').push().key

        //        var data={
        //            user:user1,
        //            key:key
        //        }
        //        firebase.database().ref('user').child(key).set(data)
        //        firebase.database().ref('user').on('child_added',function(data){
        //       var time = setInterval(mytime,1000)
        //       function mytime(){
        //           window.location="chat.html"

        //       }
        // setInterval(() => {
        //     clearInterval(time)
        // }, 1500);
        //        })

    }).catch(function (error) {
        console.log(error.message)
    });
}
