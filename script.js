//acess the elements
//accessed the display timer using dom
let display=document.querySelector(".DisplayTimer")
//initialize the values to zero
let[hours,minutes,seconds,milliseconds]=[0,0,0,0]
let int=null

//start
//let start=document.getElementById("startbtn") ===>we can also take like this in stared of down one
document.getElementById("startbtn").addEventListener("click",()=>{
    if(int!==null){
        clearInterval(int)

    }
    int=setInterval(DisplayTimer,10)
})
 


//stop
document.getElementById("stopbtn").addEventListener("click",()=>{
clearInterval(int)

})



//reset
document.getElementById("resetbtn").addEventListener("click",()=>{
    clearInterval(int)
    [hours,minutes,seconds,milliseconds]=[0,0,0,0]
    display.innerHTML="00:00:00:00"

})

//display timer function
function DisplayTimer(){
    milliseconds++
    if(milliseconds==1000){
        milliseconds=0
        seconds++
        if(seconds==60){
            seconds=0
            minutes++
            if(minutes==60){
                minutes=0
                hours++
            }
        }
    }
    let h=hours<10? "0"+hours:hours
    let m=minutes<10? "0"+minutes:minutes
    let s=seconds<10? "0"+seconds:seconds
    let ms=milliseconds<10? "00"+milliseconds:milliseconds<100? "0" +milliseconds:milliseconds
    display.innerHTML=`${h}:${m}:${s}:${ms}`

}