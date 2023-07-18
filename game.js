var randno = Math.round(Math.random()*100);

var live=document.getElementById("liv");

var messge=document.getElementById("mesg");

console.log(randno);


var msg="";

var lives=10;

function res(){


    lives--;
    var input=document.getElementById("txt").value;
    console.log(input);


    if (input == randno)
    {
        location.href="./win.html";
    }
    else if((input > randno)&&(lives != 0))
    {console.log(input,randno);
        msg="YOUR GUESS IS HIGH";
    }
    else if((input < randno)&&(lives != 0))
    {console.log(input,randno);
        msg="YOUR GUESS IS LOW";
    }
    else if(lives == 0)
    {
        location.href="./lose.html";
    }
messge.innerHTML=msg;
live.innerHTML="lives : "+lives;
}