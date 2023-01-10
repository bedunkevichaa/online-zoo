//Mask for "Another amount" input

const amountInput = document.querySelector("#amount");
const dollar = document.querySelector(".dollar");

amountInput.addEventListener("focus", () => {
  dollar.style.color = "#4B9200";
  amountInput.style.color = "#4B9200";
  //amountInput.style.border = "border: 10px solid #4B9200";
});

amountInput.addEventListener("input", (e) => {
  let amountInputValue = e.currentTarget.value;
  const icons = document.querySelectorAll("#icon");
  amountInput.value = amountInput.value.replace(/[^0-9]/g, '');
 
  console.log('$' + amountInput.value);
  inputs.forEach(input => {
    if(('$'+ amountInput.value) === input.nextElementSibling.innerHTML) {
      input.checked = true;
      icons.forEach(icon => {
        icon.setAttribute('style', 'visibility: hidden;');
      });
      input.previousElementSibling.firstElementChild.setAttribute('style', 'visibility: visible;');
    } else {
      input.previousElementSibling.firstElementChild.setAttribute('style', 'visibility: hidden;');
    }
  });
  
});


// default radioinput "Monthly"
let radBtnDefault = document.getElementById("Once");
radBtnDefault.checked = true;

//check mask for email input

const emailInput = document.querySelector("#email");
const btnSubmit = document.querySelector("#btn-submit")

emailInput.addEventListener("input", (e) => {
 const emailInputValue = e.currentTarget.value;
  if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true) {
    btnSubmit.style.border = "thin solid #D31414";
    emailInput.style.border = "thin solid #D31414";
    btnSubmit.style.color = "#D31414";
   
      
  } else {
    emailInput.style.border = "thin solid #4B9200";
    btnSubmit.style.border = "1px solid #333B41";
    btnSubmit.style.color = "#333B41";
    
    btnSubmit.addEventListener("click", () => {
      btnSubmit.style.border = "1px solid #4B9200";
      btnSubmit.style.color = "#4B9200";
    });
  }

  

});

// Style radio with Pic by click
const circles = document.querySelectorAll(".circle");
const labeles = document.querySelectorAll(".label");
const inputs = document.querySelectorAll(".input");
const inputDefault = document.getElementById('seventh');
const labelDefault = document.querySelector('.label-seventh');



inputDefault.checked = true;
inputDefault.previousElementSibling.firstElementChild.setAttribute('style', 'visibility: visible;');
//inputDefault.previousElementSibling.firstElementChild.style.visibility = 'visible';
console.log(inputDefault.previousElementSibling.firstElementChild);

circles.forEach(circle => {
  circle.addEventListener('click', (e) => {
    console.log(circle.nextElementSibling.nextElementSibling.innerHTML);
    circle.nextElementSibling.checked = true;
    amountInput.value = circle.nextElementSibling.nextElementSibling.innerHTML;
  });
});

inputs.forEach(input => {
  input.addEventListener('click', (e) => {
    console.log(input.nextElementSibling.innerHTML);
    amountInput.value = input.nextElementSibling.innerHTML;
  });
});

const chceckboxes = document.querySelector('.chceckboxes');

chceckboxes.onclick = function(e) {
  const icons = document.querySelectorAll("#icon");
  const labels = document.querySelectorAll(".label");
  //console.log(e.target);
  if(e.target.className !== "chceckboxes") {
    icons.forEach(icon => {
      icon.setAttribute('style', 'visibility: hidden;');
    });
  }
  
  e.target.setAttribute('style', 'visibility: visible;');

  if(e.target.firstElementChild !== null) {
    e.target.firstElementChild.setAttribute('style', 'visibility: visible;');
  }

  if(e.target.matches('input')) {
    e.target.previousElementSibling.firstElementChild.setAttribute('style', 'visibility: visible;');
  }
};

// Burger menu

const burgerMenu = document.getElementById('menuToggle');
const overlayBurger = document.getElementById('overlay-burger');
const menu = document.getElementById('menu');

burgerMenu.addEventListener('click', function() {
  this.classList.toggle("close");
  menu.classList.toggle("overlay");
  overlayBurger.classList.toggle("open");
});

overlayBurger.addEventListener('click', () =>{
  burgerMenu.classList.toggle("close");
  menu.classList.toggle("overlay");
  overlayBurger.classList.toggle("open");
});

// Media Queries

// function changeBackstageImg(x, y) {
//   const inputDefault = document.getElementById('seventh');
  
//   if (x.matches) { // If media query matches
//     inputDefault.checked = true;
//     //inputDefault.previousElementSibling.firstElementChild.setAttribute('style', 'visibility: visible;');
//   } else {
//     inputDefault.checked = false;
//     inputDefault.previousElementSibling.firstElementChild.setAttribute('style', 'visibility: hidden;');
//   }
// }


// let x = window.matchMedia("(max-width: 999px)");
// //let y = window.matchMedia("(max-width: 639px)");
// changeBackstageImg(x); // Call listener function at run time
// x.addListener(changeBackstageImg); // Attach listener function on state changes
// //y.addListener(changeBackstageImg);



