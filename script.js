// let elements=document.querySelectorAll("p");
// console.dir(elements)
// let headings=document.querySelectorAll(".heading");
// console.dir(headings)
// console.dir(document.body.firstChild);
// let heading=document.querySelector("h1");
// console.dir(heading.innerText);
// heading.innerText=heading.innerText+" From Bhattarai Family";
// let divs=document.querySelectorAll(".box");
// console.dir(divs)
// let index=1;
// for(div of divs){
//     div.innerText=`new Unique value ${index}`
//     index++
// }
// let div = document.querySelector(".box");
// console.dir(div.style);
// div.style.backgroundColor="green";
// div.style.fontSize="26px";
// div.innerText="changed"

// let heading=document.querySelector("#head");
// console.dir(div)
// let value=div.getAttribute("class");
// console.log(value);
// heading.setAttribute("class","headclass");

//Adding new element 
// let newbtn= document.createElement("button");
// newbtn.innerText="Sign Up";
// let div=document.querySelector("div");
// // div.before(newbtn);
// let p=document.querySelector("p")
// p.after(newbtn);
//  let newheading=document.createElement("h1");
//  newheading.innerHTML="<i>HELLO EVERYONE</i>";
//  div.before(newheading);
//  div.remove();
//  newheading.remove();
// let newbtn=document.createElement("button");
// newbtn.style.backgroundColor="blue"
// newbtn.style.color="white"
// newbtn.innerText="Click me !";
// document.querySelector("body").prepend(newbtn);

// let para=document.querySelector("p");
// para.classList.add("newClass");
function getCities(country){
    let countryPlaceholder = document.querySelector("#country");
    let cityPlaceholder=document.querySelector("#city");
    let citiesDropDown = document.querySelector("#cities");
  
    if(country.trim() === ""){
       citiesDropDown.disabled = true;
       citiesDropDown.selectedIndex = 0;
       return false;
    }
  
    // AJAX request with fetch()
    fetch("countries.json")
    .then(function(response){
       return response.json();
    })
    .then(function(data){
       let cities = data[country];
       let out = "";
       out += `<option value="">Choose a city</option>`;
       for(let city of cities){
          out += `<option value="${city}">${city}</option>`;
       }
       citiesDropDown.innerHTML = out;
       citiesDropDown.disabled = false;
       countryPlaceholder.innerHTML=country;
       cityPlaceholder.innerHTML=`${country}'s city selected`;
    });
 }
















