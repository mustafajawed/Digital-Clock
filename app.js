const clock  = document.getElementById('clock')

setInterval(function name(params) {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},500)
