let modeBtn = document.querySelector("#mode");
let currmode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
  //   console.log("mode clicked");
  if (currmode === "light") {
    currmode = "Dark";
    // document.querySelector("body").style.backgroundColor = "black";
    body.classList.add("dark");
    body.classList.remove("white");
  } else {
    currmode = "light";
    // document.querySelector("body").style.backgroundColor = "#fff";
    body.classList.add("white");
    body.classList.remove("dark");
  }
  console.log(currmode);
});

// let btn1 = document.querySelector(".btn-text");

// btn1.onclick = (e) => {
//   console.log("btn1 clicked");
//   console.log(e.type);
//   console.log(e.target);
// console.log(e.clientX);
// console.log(e.clientY);
// };

// btn1.addEventListener("click", () => {
//   console.log("btn1 clicked");
// });

// btn1.addEventListener("click", () => {
//   console.log("btn2 clicked");
// });

// const handler3 = () => {
//   console.log("btn3 clicked");
// };

// btn1.addEventListener("click", handler3);

// btn1.addEventListener("click", () => {
//   console.log("btn4 clicked");
// });

// btn1.removeEventListener("click", handler3);
