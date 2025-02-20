/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*== menu show ===*/

if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*=== menu hidden ==*/

if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}


/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message')

const sendEmail = (e) => {
  e.preventDefault()

  
  emailjs.sendForm('service_8h3kajk','template_9o6cwnl', '#contact-form', 'aKM7869J0J4SuxVMk')
    .then(() =>{
      //show sent msg
      contactMessage.textContent = 'Message sent successfully🤝'

      //remove msg after 5secs 
      setTimeout( () => {
        contactMessage.textContent = ''
      }, 5000)

      //clear input fields
      contactForm.reset()

    }, () => {
      //err msg
      contactMessage.textContent = 'Message not sent ❌'
    })
}

contactForm.addEventListener('submit', sendEmail)

/*=============== SHOW SCROLL UP ===============*/ 

const scrollUp = () =>{
  const scrollUp = document.getElementById('scroll-up')
  this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                                          : scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
  const scrollY = window.pageXOffset

  sections.forEach(current =>{
    const sectionHeight = current.offSetHeight, 
          sectionTop = current.offsetTop -58,
          sectionId = current.getAttribute('id'),
          sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      sectionsClass.classList.add('active-link')
    }else{
      sectionsClass.classList.remove('active-link')
    }
  
  })

}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr =ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400, 
  // reset: true //
})

sr.reveal(`.home__data, .home__social, .contact__container, .about__container, .skills__container, .footer__container`)
sr.reveal(`.home__image`, {origin: 'bottom'})
sr.reveal(`.about__data`, `.skills__data`, {origin: 'left'})
sr.reveal(`.about__image`, `.skills__content` , {origin: 'right'})
sr.reveal(`.education__card`, `.workexperience__card`, {interval: 100})






/* ===carousel====== */
function nextSlide(button) {
    const carousel = button.closest('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const totalSlides = carouselInner.children.length;
    const slideWidth = carouselInner.children[0].offsetWidth;
    const currentTransform = getTransformValue(carouselInner);
    const newTransform = currentTransform - slideWidth;
  
    if (Math.abs(newTransform) < totalSlides * slideWidth) {
      carouselInner.style.transform = `translateX(${newTransform}px)`;
    } else {
      // Loop to the start
      carouselInner.style.transform = `translateX(0px)`;
    }
  }
  
  function prevSlide(button) {
    const carousel = button.closest('.carousel');
    const carouselInner = carousel.querySelector('.carousel-inner');
    const slideWidth = carouselInner.children[0].offsetWidth;
    const currentTransform = getTransformValue(carouselInner);
    const newTransform = currentTransform + slideWidth;
  
    if (newTransform <= 0) {
      carouselInner.style.transform = `translateX(${newTransform}px)`;
    } else {
      // Loop to the end
      const totalSlides = carouselInner.children.length;
      carouselInner.style.transform = `translateX(${-slideWidth * (totalSlides - 1)}px)`;
    }
  }
  
  function getTransformValue(element) {
    const transformMatrix = getComputedStyle(element).transform;
    if (transformMatrix === 'none') {
      return 0;
    }
    const matrixValues = transformMatrix.match(/matrix.*\((.+)\)/)[1].split(', ');
    return parseFloat(matrixValues[4]);
  }
  