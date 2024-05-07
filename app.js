function timeKnow() {
    let now = new Date();
    let daysName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let hour = now.getHours()
        console.log(hour);
        if(hour >= 12){
            hour = hour + " PM"
            hour = hour-12
        }
        else{
            hour = hour + " AM"
            
        }
        // console.log(hour);
        // alert(daysName[now.getDay()])
        alert('Today is: ' + daysName[now.getDay()]);
        alert("Current Time Is:"+hour + " "+ now.getMinutes()+ " " + now.getSeconds());
    }
    