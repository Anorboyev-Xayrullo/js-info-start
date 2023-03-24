

let text = document.querySelectorAll("h1")
let button = document.querySelector("button")


// console.log(button);
console.log(text);

button.onclick =() =>{
for(let i = 0 ; i <= text.length -1; i++){
      text[i].style.color = "red"
      text[i].style.textAlign= "center"
    }
    console.log(text[i]);
}

