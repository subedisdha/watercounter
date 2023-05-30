let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(saveEl)

function increment(){
    count += 100
// now display it to the html page
    countEl.textContent = count
}

function save(){
    let countStr = count + " - "
    // display 
    saveEl.textContent += countStr
    //reset
    countEl.textContent = 0
    count = 0
}




//
// let username = 10
// let greeting = "hello, my name is "
// let myGreeting = greeting  + username
// console.log(myGreeting)


//
// let welcomeEl = document.getElementById("welcome-el")
// let yourname = "sdha"
// let greetings = "welcome back "
// welcomeEl.innerText = greetings + yourname
// welcomeEl.innerText += "💚"



