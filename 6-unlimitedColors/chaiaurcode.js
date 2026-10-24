// generate a random color

 const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i=0;i<6;i++){
        // let no = parseInt(Math.random() * 16)
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
 }

let intervalId
// let flag = false

let startChangingColor = function(){
   document.querySelector('#start').disabled = true
   document.querySelector('#stop').disabled = false
   if(!intervalId){
      intervalId = setInterval(() => {
         document.querySelector('body').style.backgroundColor= randomColor()
     },1000) 
   }
}

let stopChangingColor = function(){
   document.querySelector('#stop').disabled = true
   document.querySelector('#start').disabled = false
   clearInterval(intervalId)
   intervalId = null
}

let ele = document.querySelector('#start')
ele.addEventListener('click', startChangingColor
,false)

document.querySelector('#stop').addEventListener('click', stopChangingColor, false)

 
