

 window.addEventListener('keyup', function(evt){
  if(evt.keyCode == 68){
   evt.target.style.width = '35rem'
    }
});


window.addEventListener('keydown', function(evt) {
  if(evt.keyCode == 87){
    evt.target.style.backgroundColor = 'pink';
  }
});


const reSize = document.querySelector('.text-content h2');
 reSize.addEventListener('dblclick', function(evt) {
     evt.target.style.fontSize = '7rem';    
  });


  const btnColor = document.querySelectorAll('.destination .btn');
btnColor[2].addEventListener('click', function(evt) {
   evt.target.style.color = 'maroon';    
 });


 const funColor = document.getElementsByClassName('logo-heading');
funColor[0].addEventListener('mouseover', function(evt){
    evt.target.style.color = 'purple';
});

 const noNav = document.querySelector('.nav');
 noNav.addEventListener('copy', function(evt){
   evt.target.style.display = 'none';    
 });


 const alertWheel = document.querySelectorAll('.destination h4');
 alertWheel[1].addEventListener('wheel', function() {
   alert('hello');    
 });


 const noImg = document.querySelector('.intro img');
   noImg.addEventListener('contextmenu', function(evt) {
     evt.target.style.display = 'none';    
 });



 const pTags = document.getElementsByTagName('p')
 window.addEventListener('resize', function() {
    pTags[0].textContent = '안녕하세요'
  });

  const imgDrag = document.querySelector('.content-destination img');
  imgDrag.addEventListener('drag', function(evt) {
    evt.target.style.width = '10rem';    
});


const footSize = document.querySelector('.footer p')
  footSize.addEventListener('click', function(evt) {
       evt.target.style.fontSize = '5rem';
       evt.stopPropagation()
     })

const Grey = document.querySelector('.footer')
  Grey.addEventListener('click', function(evt) {
       evt.target.style.backgroundColor = 'grey';
       });


const anchor = document.querySelector('.nav');
    anchor.addEventListener('click', function (event) {
         console.log('Action Denied.');
         event.preventDefault();
       }); 