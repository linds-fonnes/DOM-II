// Your code goes here
// #1 MOUSE OVER
const funBus = document.querySelector(".logo-heading");
funBus.addEventListener("mouseover", function (event){
    event.target.style.color = "orange";
});

// #2 MOUSE ENTER
const theNav = document.querySelector(".main-navigation")
theNav.addEventListener("mouseenter", function (event){
    event.target.style.backgroundColor = "purple";
});

//#3 MOUSE LEAVE
theNav.addEventListener("mouseleave",function(event){
    event.target.style.backgroundColor = "white";
});

//#4 MOUSE OUT
funBus.addEventListener("mouseout", function(event){
event.target.style.color = "black";
})

//#5 DOUBLE CLICK bubbles:yes
const buttons = document.querySelectorAll(".btn");

buttons[0].addEventListener("dblclick", function(event){
    event.target.style.fontSize = "3rem";
});

buttons[2].addEventListener("dblclick", function(){
    alert("PIZZA PIZZA DADDY-O");
});

//#6 SINGLE CLICK bubbles: yes
buttons[1].addEventListener('click', event => {
    buttons[1].innerHTML = `Click count: ${event.detail}`;
});

//#7 SCROLL bubbles: yes
const footer = document.querySelector('.footer');

window.addEventListener('scroll',() => {
    const scrollable = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    if (Math.ceil(scrolled) === scrollable){
        alert('You\'ve reached the bottom!')
        footer.style.backgroundColor = 'pink';
        event.stopPropagation();
    }
});

//#8 CONTEXTMENU bubbles: yes
const welcomeFunBus = document.querySelector('.intro h2');

welcomeFunBus.addEventListener('contextmenu', event => {
    event.preventDefault();
    event.target.style.backgroundColor = 'yellow';
    event.target.style.fontSize = '5rem';
})

//#9 KEYDOWN bubbles: yes
const pics = document.querySelectorAll('img');
document.addEventListener("keydown", event => {
    if (event.code === 'Enter'){
        pics[1].style.width = '3rem';

    }
});

//#10 KEYUP bubbles: yes
document.addEventListener("keyup", event => {
    if (event.code === 'Enter'){
        pics[1].style.width = '400px';
    }
});

//STOP THE NAVGIATION ITEMS FROM REFRESHING THE PAGE BY USING PREVENTDEFAULT()
Array.from(document.links).forEach(function(link){
    link.addEventListener('click', function (event){
        event.preventDefault();
    })
})

//
        
