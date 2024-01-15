let btn = document.querySelector("#add");
let reset = document.getElementById("reset");
let sub = document.getElementById("sub");

let count = 0;
// console.log(count);
btn.addEventListener("click", (e) => {
//   console.log(count);
  count++;
  if(count > 0){
    document.querySelector(".display").style.color = "green";
  }else if(count == 0){
    document.querySelector(".display").style.color = "black";
  }
//   console.log(count);
  document.querySelector(".display").innerText = count;
});

sub.addEventListener("click", () => {
  count--;
  if(count < 0){
    document.querySelector(".display").style.color = "red";
  }else if(count == 0){
    document.querySelector(".display").style.color = "black";
  }
  document.querySelector(".display").innerText = count;
});

reset.addEventListener("click", () => {
  count = 0;
  document.querySelector(".display").innerText = count;
});
