

//const myName =- window.prompt("Whats your name?");
//console.log("")


document.addEventListener('DOMContentLoaded', init);

function init(){
    let query = window.matchMedia("(min-width: 601px)");
    if(query.matches){
        //if the page is wider than 600px
        document.querySelector('body');
    } else {
        // if the page is narrower than 601px
        document.querySelector('body');
    }
}

document.getElementById("myButton").onclick = function(){

    const myName = document.getElementById("myText").value;
    console.log("Hello",myName);
}





const options = [
    'Say less',
    'It is what it is',
    'No doubt',
    'Yes most def',
    'my mom said yes',
    'Hell yes',
    'I mean... I guess so',
    'Outlook good',
    'SHEEESH',
    'Signs point to yes',
    'Reply hazy, try again',
    'Ask again later',
    'Better not tell you now',
    'Cant connect to the internet right now',
    'please ask again',
    "I Don't think so ",
    'Hell no',
    'My sources say no',
    'My mom said no',
    'Bad Vibes'
]
const magicBall = document.getElementById("mb-container")
const response = document.getElementById("response")

magicBall.addEventListener("click",function(){
    
    const index=Math.floor(Math.random()*20)
    const message = options[index]
    magicBall.className='magicball__outer animate'
    setTimeout(()=>{
        response.textContent=message;
        response.style.fontSize ='1.1rem'
        magicBall.className='magicball__outer'
    },3000)
})
