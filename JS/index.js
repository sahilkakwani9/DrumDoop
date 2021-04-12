//to detect button press
for(i=0;i<document.querySelectorAll("button").length;i++) {
    document.querySelectorAll("button")[i].addEventListener("click",function() {
        var buttonName = this.innerHTML;
        findButton(buttonName);
        makeAnimation(buttonName);
        
    })
}

//to detect keyboard press
document.addEventListener("keydown",function (event) {
    findButton(event.key);
    makeAnimation(event.key);
})


//finding the button and making sound
function findButton(button) {
    switch(button){
        case "k":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break
        case "l":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break
        case "s":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break

    }
}

function makeAnimation(key){
    var button = document.querySelector("."+key);
    button.classList.add("pressed");
    setTimeout(function(){
        button.classList.remove("pressed")
    },100);
}