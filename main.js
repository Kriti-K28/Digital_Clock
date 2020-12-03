function startTime()
{
    var today = new Date(); //create object of date class
    // gethours() method return the hour(from 0 to 23) of specified date and time
    var h = today.getHours();   
    var m = today.getMinutes();
    var s = today.getSeconds();
    // Use this to convert 24 hr to 12 hr 
    var dd="AM";
    var hh=h;
    if(hh>=12)
    {
        hh=h-12;
        dd="PM";
    }
    if(hh==0)
    {
        hh=12;
    }

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
       + hh + ":" + m + ":" + s +" " + dd; // here we write hh for 12 hr but if we want 24 hr clock we have to write h
    // settimeout() method call a function or evalute an expression after a specified no. of ms
    // it executed only once
    var t = setTimeout(startTime, 500);
}
function checkTime(i) 
{
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}