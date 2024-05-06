function timeKnow() {
    let daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
let now = new Date();
alert('Today is: ' + daysName[now.getDay()]);
alert('Current Time is: ' + (now.getHours() > 12 ? now.getHours() - 12 : now.getHours()) + ':' + now.getMinutes());

}
