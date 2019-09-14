// Your code goes here
const funColor = document.getElementsByClassName('logo-heading')
funColor[0].addEventListener('mouseover', function(event){
   event.target.style.color = 'blue';
});



const btn = document.querySelectorAll('.destination .btn');
btn[1].addEventListener('click', function(event) {
   event.target.style.color = 'pink';    
 });

 const highLight = document.querySelectorAll('.destination h4')
 highLight[0].addEventListener('wheel', function(event) {
   alert('hello');    
 });

//  highLight[1].addEventListener('click', function(event) {
//   alert('hello');    
// });
 

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

 const foot = document.querySelector('.footer p')
     foot.addEventListener('click', function(event) {
       event.target.style.fontSize = '10rem';
       event.stopPropagation();
     })

     const footGrey = document.querySelector('.footer')
     footGrey.addEventListener('click', function(event) {
       event.target.style.backgroundColor = 'grey';
       
     })


const anchor = document.querySelector('.nav');
anchor.addEventListener('click', function (event) {
  console.log('I was clicked');
  event.preventDefault();
}) 



