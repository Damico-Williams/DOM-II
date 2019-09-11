// Your code goes here
const funColor = document.getElementsByClassName('logo-heading')
funColor[0].addEventListener('mouseover', function(event){
   event.target.style.color = 'blue';
});



const btn = document.querySelectorAll('.destination .btn');
btn[1].addEventListener('click', function(event) {
   event.target.style.color = 'pink';    
 });

 const highLight = document.querySelector('.destination h4')
 hightLight[1].addEventListener('cut', function(event) {
   event.target.style.color = 'yellow';    
 });
 

 const lg = document.querySelector('.text-content h2')
 lg.addEventListener('dblclick', function(event) {
   event.target.style.fontSize = '4rem';    
 });


 window.addEventListener('keydown', function(event) {
    if(event.keyCode == 79){
     event.target.style.backgroundColor = 'orange'
    }
 });

const pTags = document.getElementsByTagName('p')
 window.addEventListener('resize', function(event) {
    pTags[0].textContent = 'hahahaha!'
    
});

const ghost = document.querySelector('.nav')
 ghost.addEventListener('copy', function(event) {
   event.target.style.display = 'none';    
 });

 window.addEventListener('keyup', function(event) {
   if(event.keyCode == 66){
    event.target.style.width = '50rem'
   }
});

const invis = document.querySelector('.intro img')
 invis.addEventListener('contextmenu', function(event) {
   event.target.style.display = 'none';    
 });

 const foot = document.querySelector('.footer')
     foot.addEventListener('mouseleave', function(event) {
       event.target.style.backgroundColor = 'yellow';
     })


     //  btn[0].addEventListener('focus', function(event) {
//    event.target.style.background = 'pink';    
//  },true);
 
//  btn[0].addEventListener('blur', function(event) {
//    event.target.style.background = 'red';    
//  },true);


