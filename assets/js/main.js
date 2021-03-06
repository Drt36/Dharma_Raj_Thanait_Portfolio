/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
  
  /*Remove menu mobile*/
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction));





/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000
});

/*SCROLL HOME*/
sr.reveal('.home__title'); 
sr.reveal('.button'); 
sr.reveal('.home__img'); 
sr.reveal('.home__social-icon'); 
sr.reveal('.home__social-icon'); 

/*SCROLL ABOUT*/
sr.reveal('.about__img'); 
sr.reveal('.about__subtitle'); 
sr.reveal('#about__text'); 
sr.reveal('.education_text'); 
sr.reveal('.education_title'); 


/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle'); 
sr.reveal('.skills__text'); 
sr.reveal('.skills__data'); 
sr.reveal('.skills__img');

/*SCROLL WORK*/
sr.reveal('.work__img'); 

/*SCROLL CONTACT*/
sr.reveal('.contact__form'); 

/*SCROLL Thank you page*/
sr.reveal('.display-3'); 
sr.reveal('.lead'); 
sr.reveal('.btn btn-success btn-sm'); 





