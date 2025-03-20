console.log("hello")
let height = document.querySelector(".height")
console.log("height");
let power = document.querySelector(".power")
console.log("power");
let quiz= document.querySelector(".quiz")
console.log("quiz");
let message= document.querySelector(".message")

quiz.onclick = function(){

let ans1 = height.value;
let ans2 = power.value;

console.log("clicked")
if (ans1 === "Tall" && ans2 === "Flight"){
    message.innerHTML="You are Gumball!";
    console.log("tallfly")
}else if(ans1 === "Tall" && ans2 === "Time Travel"){
    message.innerHTML="You are Darwin!";
console.log("talltime")
}else if (ans1==="Short" && ans2==="Flight"){
message.innerHTML="You are Darwin!";
}
};
