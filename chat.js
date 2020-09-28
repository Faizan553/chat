// get username

var name = prompt("enter your name")
var username = document.getElementById('username')
username.innerHTML = name






// get data


function get() {
    var chat = document.getElementById('chat')

    firebase.database().ref('chat').on('child_added', function (data) {


        var html = ""
        if (data.val().name == name) {
           
           
            html += "</p>"
            html += "<p class='right top1' id='down'>"
            html += "<span class='grey1'>"
            html += data.val().name 
            html += "</span>"

            html += "</p>"

            html += "<p class='right top' >"
            html += "<span class='blue'>"
            html += data.val().msg
            // html += "<button id=" + data.val().key + " onclick='remove(this)'>"
            // html +="Delete"
            // html += "</button>"
            html += "<span>"

            html += "</p>"
            html += "<p class='right top1' id='down'>"
            html += "<span class='grey1'>"
            html += data.val().hours + ":" + data.val().minute
            html += "</span>"

            html += "</p>"
            chat.innerHTML += html
            

        }
        else {
            html += "</p>"
            html += "<p class=' top1'>"
            html += "<span class='grey1'>"
            html += data.val().name 
            html += "</span>"

            html += "</p>"


            html += "<p class='p1'>"
            html += "<span class='grey'>"
            html += data.val().msg
            html += "</span>"
            html += "</p>"
            html += "<p class=' top1' id='down'>"
            html += "<span class='grey1'>"
            html += data.val().hours + ":" + data.val().minute
            html += "</span>"

            html += "</p>"

            chat.innerHTML += html

        }
        
    })

   


}







// send data

function send() {
    var time = new Date()
    var hours = time.getHours()
    var minute = time.getMinutes()
    var second = time.getSeconds()
    var msg = document.getElementById('msg')

    key = firebase.database().ref('chat').push().key
    var data = {
        name: name,
        msg: msg.value,
        key: key,
        hours: hours,
        minute: minute

    }
    firebase.database().ref('chat').child(key).set(data)
    msg.value = ""
    
}

window.onkeypress=function(e){
    
    if (e.keyCode==13){
        send()
    }
}