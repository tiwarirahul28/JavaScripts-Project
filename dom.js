let attr = document.querySelector("div");
attr.style.fontSize = "26px";


// inserting button`
let newBtn = document.createElement("button");
newBtn.innerText = "Click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

let div = document.querySelector(".box");
// div.append(newBtn);
div.prepend(newBtn);


// inserting para class
let p = document.querySelector("p");
p.classList.add("newpara")


// inserting heading
let newheading = document.createElement("h1");
newheading.innerHTML = "Click me";
document.querySelector('body').prepend(newheading);

// newheading.remove()