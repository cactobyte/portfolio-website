const texts = [
    "eating",
    "programming",
    "listening to music"
]

const speed = 100;
const textElement = document.querySelector(".typewriter-text")

let textIndex = 0;
let characterIndex = 0;

function typewriter(){
    if (characterIndex < texts[textIndex].length){
        textElement.innerHTML += texts[textIndex].charAt(characterIndex);
        characterIndex++;
        setTimeout(typewriter, speed); // Type Speed
    } else {
        setTimeout(eraseText, 300); // Between Type and Erase
    }
}

function eraseText(){
    if(textElement.innerHTML.length > 0){
        textElement.innerHTML = textElement.innerHTML.slice(0, -1);
        setTimeout(eraseText, 50); // Erase Speed
    } else {
        textIndex = (textIndex + 1) % texts.length;
        characterIndex = 0;
        setTimeout(typewriter, 200); // Between Erasing and Re-Type
    }
}

window.onload = typewriter;