const emailInput = document.querySelector("#email");
const btnSubmit = document.querySelector("#btn-submit");

emailInput.addEventListener("input", (e) => {
 const emailInputValue = e.currentTarget.value;
  if( /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(emailInputValue) != true) {
    btnSubmit.style.border = "thin solid #D31414";
    emailInput.style.border = "thin solid #D31414";
    btnSubmit.style.color = "#D31414";
      
  } else {
    emailInput.style.border = "thin solid #4B9200";
    btnSubmit.style.border = "thin solid #4B9200";
    btnSubmit.style.color = "#4B9200";
    
  }
});

// Burger menu

const burgerMenu = document.getElementById('menuToggle');
const menu = document.getElementById('menu');
const overlayBurger = document.getElementById('overlay-burger');

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

function changeBackstageImg(x, y) {
  const imgBackstage = document.querySelector(".backstage__img");
  const imgPick = document.querySelectorAll(".img__arrow")
  const imgPets = document.querySelector(".pets__img-right");
  const imgTestimonials = document.querySelector(".img-right");
  const items = document.querySelectorAll(".item");
  if (x.matches) { // If media query matches
    imgBackstage.src = "../../assets/images/backstage_flower_tablet.png";
    // imgPick.forEach(img => {
    //   img.src = "../../assets/icons/pick_arr_tablet.png";
    // });
    imgTestimonials.src = "../../assets/images/Testimonials_leav_tablet.png";
    // items.forEach(item => {
    //   item.lastChild.textContent = '';
    // });
  } else {
    imgBackstage.src = "../../assets/images/flower_foto1.png";
    // imgPick.forEach(img => {
    //   img.src = "../../assets/icons/arrow.svg";
    // });
    imgTestimonials.src = "../../assets/images/leav_foto.png";
  }

  if (y.matches) {
    imgBackstage.src = "../../assets/images/backstage_flower_mobile.png";
    imgPets.src = "../../assets/images/strelitzia_mobile.png";
    imgTestimonials.src = "../../assets/images/leav_foto_mobile.png";
    // imgPick.forEach(img => {
    //   img.src = "../../assets/icons/pick_arr_tablet.png";
    // });
  } else {
    imgBackstage.src = "../../assets/images/flower_foto1.png";
    imgPets.src = "../../assets/images/strelitzia.png";
    imgTestimonials.src = "../../assets/images/Testimonials_leav_tablet.png";
    // imgPick.forEach(img => {
    //   img.src = "../../assets/icons/pick_arr_tablet.png";
    // });
  }
}

let z = window.matchMedia("(max-width: 1599px)");
let x = window.matchMedia("(max-width: 999px)");
let y = window.matchMedia("(max-width: 639px)");
changeBackstageImg(x, y); // Call listener function at run time
x.addListener(changeBackstageImg); // Attach listener function on state changes
y.addListener(changeBackstageImg);


// Slider Pets

const ITEM_LEFT = document.getElementById('item-left'); // returns NodeList
const ITEM_RIGHT = document.getElementById('item-right');
const sliderContainer = document.getElementById('slides-container');
const slideListClone = ITEM_LEFT.cloneNode(true);
let slideArray = [...slideListClone.childNodes];
const BTN_LEFT = document.querySelector("#slide-arrow-prev");
const BTN_RIGHT = document.querySelector("#slide-arrow-next");
const CAROUSEL = document.querySelector("#slides-container");

slideArray.sort();
slideArray.length = 7;
console.log(slideArray);

let shuffle = (array) => {
  slideArray.sort();
  slideArray.length = 7;
  // if(x.matches) {
  //   array.length = 4;
  // }
 
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // случайный индекс от 0 до i
    [array[i], array[j]] = [array[j], array[i]];
  }
 
  return array;
};

const moveLeft = () => {
  slideArray = slideArray.filter(item => item !== '#text');
  ITEM_LEFT.innerHTML = "";
  [].forEach.call(shuffle(slideArray), function(item) {
    ITEM_LEFT.appendChild(item);
  });
  if(x.matches) {
    CAROUSEL.classList.add("transition-left-999");
  } else {
    CAROUSEL.classList.add("transition-left");
  }
  
  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};
  
const moveRight = () => {
  slideArray = slideArray.filter(item => item !== " ");
  ITEM_RIGHT.innerHTML = "";
  [].forEach.call(shuffle(slideArray), function(item) {

    ITEM_RIGHT.appendChild(item);
 
  });

  if(x.matches) {
    CAROUSEL.classList.add("transition-right-999");
  } else {
    CAROUSEL.classList.add("transition-right");
  }

  BTN_LEFT.removeEventListener("click", moveLeft);
  BTN_RIGHT.removeEventListener("click", moveRight);
};

BTN_LEFT.addEventListener("click", moveLeft);
BTN_RIGHT.addEventListener("click", moveRight);

CAROUSEL.addEventListener("animationend", (animationEvent) => {
  let changedItem;
  if (animationEvent.animationName === "move-left" || animationEvent.animationName === "move-left-999") {
    CAROUSEL.classList.remove("transition-left");
    CAROUSEL.classList.remove("transition-left-999");
    changedItem = ITEM_LEFT;
    document.querySelector("#item-active").innerHTML = ITEM_LEFT.innerHTML;
  } else {
    CAROUSEL.classList.remove("transition-right");
    CAROUSEL.classList.remove("transition-right-999");
    changedItem = ITEM_RIGHT;
    document.querySelector("#item-active").innerHTML = ITEM_RIGHT.innerHTML;
  }
 
    [].forEach.call(shuffle(slideArray), function(item) {
      changedItem.innerHTML += `${item}`;
    });
 
  BTN_LEFT.addEventListener("click", moveLeft);
  BTN_RIGHT.addEventListener("click", moveRight);
});

// Slider Testimonials

const inputRange = document.querySelector('input[type="range"]');

let rangeValue = function(){
  let newValue = inputRange.value;
  const target = document.querySelector('.tips-container');

  if(z.matches) {
    switch(newValue) {
      case '1':
        target.style.left = '-325px';
        break;
      case '2':
        target.style.left = '-648px';
        break;
      case '3':
        target.style.left = '-972px';
        break;
      case '4':
        target.style.left = '-1297px';
        break;
      case '5':
        target.style.left = '-1621px';
        break;
      case '6':
        target.style.left = '-1945px';
        break;
      case '7':
        target.style.left = '-2269px';
        break;
      default:
        target.style.left = '0px';
    }
  } else {
    switch(newValue) {
      case '1':
        target.style.left = '-298px';
        break;
      case '2':
        target.style.left = '-595px';
        break;
      case '3':
        target.style.left = '-892px';
        break;
      case '4':
        target.style.left = '-1189px';
        break;
      case '5':
        target.style.left = '-1486px';
        break;
      case '6':
        target.style.left = '-1784px';
        break;
      case '7':
        target.style.left = '-2082px';
        break;
      default:
        target.style.left = '0px';
    }
  }
};

inputRange.addEventListener("input", rangeValue);

// Testimonials Popups

const tips = document.querySelectorAll('.tip');


tips.forEach(tip => {
  tip.addEventListener('click', (e) => {
    console.log(tip.lastElementChild);
    tip.lastElementChild.classList.toggle("close");
  });
});




