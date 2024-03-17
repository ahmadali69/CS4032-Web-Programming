$(document).ready(function(){
    setInterval(function(){
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var period = "AM";
        
        if (hours >= 12) {
            period = "PM";
            hours -= 12;
        }

        $("#hours").text((hours < 10 ? "0" : "") + hours);
        $("#minutes").text((minutes < 10 ? "0" : "") + minutes);
        $("#seconds").text((seconds < 10 ? "0" : "") + seconds);
        $("#period").text(period);
    }, 1000);
});
