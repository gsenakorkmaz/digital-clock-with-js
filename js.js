let userName = prompt("what is your name?");
 document.getElementById("myname").innerHTML; `${userName}`;

 if (userName.length > 0) {
    myname.innerHTML = `${userName}`;
}else{
    alert("please enter your name.")
    location.reload(); // sayfayı yeniliyor 
}



function GetTime(){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    var day = now.getDate();
    var month = now.getMonth()+1;
    var year = now.getFullYear();
    
    
    document.getElementById("hour").innerText= hour;
    document.getElementById("minute").innerText=minute;
    document.getElementById("second").innerText=second;

    document.getElementById("date").innerText=day + " / " +month + " / "+ year;

} 

setInterval(function(){GetTime();},1000);

