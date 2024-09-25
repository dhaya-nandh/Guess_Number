var guess=document.getElementById("guess")
var answer=document.getElementById("answer")
var score=document.getElementById("score")
var totalscore=10
function check()
{
    //randomnumber
    var random=Math.floor(Math.random()*10)+1
    var entered=guess.value
    //true
    if(random==entered)
    {
        answer.textContent="Right Answer"
        answer.style.color="darkgreen"
        alert("You Won....")
    }
    //number is 0 to finish your game
    else if(totalscore<=0)
    {
        alert("Try Again....Better Luck next Time")
    }
    //false
    else{
        totalscore=totalscore-1
        score.textContent="Your score:"+totalscore
        answer.textContent="Wrong Answer"
        answer.style.color="red"
    }
}