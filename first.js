console.log("hello");
let para= document.querySelector("p");


let newbtn=document.createElement("button");
newbtn.style.backgroundColor= "green";
newbtn.style.color="white";
newbtn.innerText="Click Me !";
para.append(newbtn);
  let btn=document.querySelector("#btn");
  btn.onclick =()=> {
    console.log(" Button was Clicked");
    document.querySelector("body").style.backgroundColor="pink";
    let a=28;
    a++;
    console.log(a);
  }
  let box=document.querySelector("div");
  box.onmouseover= () =>
  {
   
    console.log(" mouse entered");

  }