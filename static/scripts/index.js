const time = document.querySelector('#time')
const session = document.querySelector('#AmPm')

var amPm = "AM"
var hourAmPm
var isAmPm = false

var data
var hour
var minutes
var seconds


startClock()

function startClock() {
    
    data = new Date()
    hour = data.getHours()
    hourAmPm = data.getHours()
    minutes = data.getMinutes()
    seconds = data.getSeconds()
    
    
    if ( hour == 0 ) {
        hourAmPm = 12
        amPm = "AM"
        
    }
    
    if ( hour > 12 ) {
        hourAmPm = hour - 12
        amPm = "PM"
        
    } 
    
    session.innerHTML = amPm
    
    hour = (hour < 10) ? "0" + hour : hour
    hourAmPm = (hourAmPm < 10) ? "0" + hourAmPm : hourAmPm
    minutes = (minutes < 10) ? "0" + minutes : minutes
    seconds = (seconds < 10 ) ? "0" + seconds : seconds
    
    if ( isAmPm != true ) {
        session.hidden = true
        time.innerHTML = hour + ":" + minutes + ":" + seconds
        
    } else {
        session.hidden = false
        time.innerHTML = hourAmPm + ":" + minutes + ":" + seconds

    }

    setTimeout(startClock, 1) // This make the sync
}

function changeClock() {
    
    if ( isAmPm != true ) {
        isAmPm = true
        
    } else {
        isAmPm = false

    }
}