console.log("hello")
let height = document.querySelector(".height")
console.log("height");

let power = document.querySelector(".power")
console.log("power");

let quiz= document.querySelector(".quiz")
console.log("quiz");

let message= document.querySelector(".message")

let gumImg=document.querySelector(".gumImg")
gumImg.src= "gumballimg.webp";


let x= document.querySelector("h1")



quiz.onclick = function(){

let ans1 = height.value;

let ans2 = power.value;

console.log("clicked")

if (ans1 === "Tall" && ans2 === "Flight"){
    message.style.color="#f9c1ceff";
    gumImg.src= "jumpingGum.webp";
    message.innerHTML="You are Gumball!";
    console.log("tallfly")

}else if(ans1 === "Tall" && ans2 === "Time Travel"){
    message.innerHTML="You are Darwin!";
    gumImg.src="darwinimg2.png" 
    message.style.color="#f9c1ceff";
console.log("talltime")

}else if (ans1==="Short" && ans2==="Flight"){
message.innerHTML="You are Darwin!";
message.style.color="#f9c1ceff";
gumImg.src="darwinimg2.png"


}else if (ans1==="Short" && ans2==="Time Travel"){
    message.innerHTML="You are Gumball!";
    message.style.color="#f9c1ceff";
    gumImg.src= "jumpingGum.webp";
}
};

