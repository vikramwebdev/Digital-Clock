$(document).ready(function () {
    function showTime() {
        //To Get current time/date
        var date = new Date();

        //Make Variables to get hours.minutes.seconds
        var hours = date.getHours();
        var min = date.getMinutes();
        var sec = date.getSeconds();

        //AM , PM setting
        var session = "AM";

        //conditions for time behavior

        if(hours == 0){
            hours = 12;
        }
        if(hours >= 12){
            session = "PM";
        }
        if(hours > 12){
            hours = hours-12;
        }

        hours = hours < 10 ? "0" + hours : hours;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;

        //Set the variables to span
         $("#hours").text(hours);
         $("#min").text(min);
         $("#sec").text(sec);
         $("#period").text(session);
        
         setTimeout(showTime,1000)
    }
    showTime();
});