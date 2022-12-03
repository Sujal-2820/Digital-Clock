let a;
let date;
let time1;
let time2;
let time3;


setInterval(() => {
    a = new Date();
    date = a.toLocaleDateString();
    time1 = a.getHours();
    time2 = a.getMinutes();
    time3 = a.getSeconds();

    document.getElementById('timed1').innerHTML = time1;
    document.getElementById('timed2').innerHTML = time2;
    document.getElementById('timed3').innerHTML = time3;

    if(time1 >= 12 && time1 <= 24){
        document.getElementById('timed4').innerHTML = "pm";
    }
    else{
        document.getElementById('timed4').innerHTML = "am";
    }

    document.getElementById('dateHeading').innerHTML = date;
    

}, 1000);

