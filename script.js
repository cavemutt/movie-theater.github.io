// DISABLE CONTEXT MENU AND COPYING to not interfere with little fun things
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
}, false)


// CUSTOM CURSOR -- hollow star
let newCursor = document.querySelector('.cursor')
// let hoverItems = document.querySelector('.hover-items')

document.addEventListener('mousemove', (e) => {
    newCursor.style.top = e.pageY +  'px'
    newCursor.style.left = e.pageX +  'px'
})

// PRELOADER
const preloader = document.querySelector('.preloader')

// OPENING HERO ANIMATION using basic GSAP
window.addEventListener('load', () => {
    preloader.classList.add('preloader-end')
    if(screen.availWidth >= 860){
        go()
    } else {
        goSmall()
    }
    
    if (history.scrollRestoration) {
        history.scrollRestoration = 'manual';
    } else {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        }
    }
})

const heroSection = document.querySelector('#hero-section')
const welcomeText = document.querySelector('#welcome-text')
const the = document.querySelector('#the')
const elm = document.querySelector('#elm')
const star = document.querySelector('#star')
const draught = document.querySelector('#draught')
const preHero = document.querySelector('.pre-hero-section')
const food = document.querySelector('#food-container')
const reel = document.querySelector('#reel')
const quote = document.querySelector('#quote')
const quoteLine = document.querySelector('#quote-line')
const author = document.querySelector('#author')
const mainNav = document.querySelector('#main-nav')
const navItems = document.querySelectorAll('#main-nav li')
const cta = document.querySelector('#cta')
const info = document.querySelectorAll('#info h3')
const heroWelcome = document.querySelector('#hero-welcome')
       
function go() {
    const tl = new gsap.timeline();
    tl

    .set(welcomeText, {y: '-10vw', opacity: 0})
    .set(the, {x: '-=20vw', opacity: 0, scale: 0.2})
    .set(elm, {x: '+=20vw', opacity: 0, scale: 0.2})
    .set(star, {x: '-=40vw', opacity: 0, scale: 0.2})
    .set(draught, {y: '+=10vh', opacity: 0, scale: 0.2})
    .set(heroSection, {opacity: 0})
    .set(heroWelcome, {opacity: 0})
    .set(reel, {opacity: 0, scale: 0})
    .set(quote, {x: '+=20vw', y: '40vh', opacity: 0})
    .set(quoteLine, {scale: 0, opacity: 0})
    .set(author, {x: '+=20vw', opacity: 0})
    .set(navItems, {x: '+=50vw', scale:0.2, opacity: 0})
    .set(food, {scale: 0, opacity: 0})
    .set(cta, {x: '+=50vw', opacity: 0})
    .set(info, {y: '+=20vh', opacity: 0})

    .to(preHero, {duration: 1.1})
    .to(welcomeText, {y: '+=9vh', duration: 1, opacity: 1, scale: 1, ease: 'power4.out'})
    .to(the, {x: '+=20vw', duration: 1, opacity: 1, scale: 1, ease: 'power4.out'}, '-=0.5')
    .to(elm, {x: '-=20vw', duration: 1, opacity: 1, scale: 1, ease: 'power4.out'}, '-=0.7')
    .to(draught, {y: '-=10vh', duration: 1, opacity: 1, scale: 1, ease: 'power4.out'}, '-=0.6')
    .to(star, {x: '+=40vw', duration: 1, opacity: 1, scale: 1, ease: 'power4.in'}, '-=0.5')
    .fromTo(star, {scale: 1, rotationY:0, duration: 1.5}, {scale: 1, rotationY: '720deg', duration: 1.5}, '-=0.2')
    .to(star, {scale: 80, duration: 1.9, ease: "elastic.inOut(1, 1)"}, '-=0.1')
    .to(star, {scale: 0, opacity: 1, duration: 0.4})
    .to(preHero, {duration: 0.5, opacity: 0, scale:0}, '-=0.3')
    .to(preHero, {duration: 0.5, top: '-100vh', height: 0})
    .to(heroSection, {opacity: 1, duration: 0.5}, '-=0.3')
    .fromTo(heroWelcome,{opacity: 0, scale: 0.2}, {opacity: 1, scale: 1, duration: 0.5})
    .to(reel, {opacity: 1, scale: 1, duration: 0.2, ease: 'power1.out'})
    .to(quote, {x: '0', y: '-=40vh', opacity: 1, scale: 1.2, duration: 0.5, absolute: true, ease: 'power1.inOut'}, '-=0.5')
    .to(author, {x: '0', opacity: 1, scale: 1.2, duration: 0.5, absolute: true, ease: 'power1.inOut'})
    .to(quote, {x: '0', y: '0', scale: 1, duration: 0.4, absolute: true, ease: 'power4.out'}, '+=0.1')
    .to(author, {x: '0', y: '0', scale: 1, duration: 0.8, absolute: true, ease: 'power4.out'}, '-=0.8')
    .to(quoteLine, {scale: 1, opacity: 1, duration: 0.8, ease: 'power4.out'})
    .to(navItems, {x: '0', opacity: 1, scale:1, duration: 1, stagger: 0.2}, '-=1.5')
    .to(cta, {x: '0', opacity: 1, duration: 0.5, ease: 'power2.out'})
    .to(info, {y: '-=20vh', opacity: 1, stagger: 0.3, rotationX: '1400deg', duration: 1}, '-=0.4')
    .to(food, {scale: 1, opacity: 1, duration: 1, ease: 'elastic.out(1, 0.4)'}, '+=0.5')
     
    return tl
}
// smaller screens
function goSmall() {
    const tlSmall = new gsap.timeline();

    tlSmall
    .set(welcomeText, {y: '-10vw', opacity: 0})
    .set(the, {x: '-=20vw', opacity: 0, scale: 0.2})
    .set(elm, {x: '+=20vw', opacity: 0, scale: 0.2})
    .set(star, {x: '-=40vw', opacity: 0, scale: 0.2})
    .set(draught, {y: '+=10vh', opacity: 0, scale: 0.2})
    .set(heroSection, {opacity: 0})
    .set(heroWelcome, {opacity: 0})
    .set(reel, {opacity: 0, scale: 0})
    .set(food, {scale: 0, opacity: 0})
    .set(info, {y: '+=20vh', opacity: 0})

    .to(preHero, {duration: 1.1})
    .to(welcomeText, {y: '+=10vw', duration: 1, opacity: 1, scale: 1, ease: 'power4.out'})
    .to(the, {x: '+=20vw', duration: 1, opacity: 1, scale: 1, ease: 'power4.out'}, '-=0.5')
    .to(elm, {x: '-=20vw', duration: 1, opacity: 1, scale: 1, ease: 'power4.out'}, '-=0.7')
    .to(draught, {y: '-=10vh', duration: 1, opacity: 1, scale: 1, ease: 'power4.out'}, '-=0.6')
    .to(star, {x: '+=40vw', duration: 1, opacity: 1, scale: 1, ease: 'power4.in'}, '-=0.5')
    .fromTo(star, {scale: 1, rotationY:0, duration: 1.5}, {scale: 1, rotationY: '720deg', duration: 1.5}, '-=0.2')
    .to(star, {scale: 80, duration: 1.9, ease: "elastic.inOut(1, 1)"}, '-=0.1')
    .to(star, {scale: 0, opacity: 1, duration: 0.4})
    .to(preHero, {duration: 0.5, opacity: 0, scale:0}, '-=0.3')
    .to(preHero, {duration: 0.5, top: '-100vh', height: 0})
    .to(heroSection, {opacity: 1, duration: 0.5}, '-=0.3')
    .fromTo(heroWelcome,{opacity: 0, scale: 0.2}, {opacity: 1, scale: 1, duration: 0.5})
    .to(reel, {opacity: 1, scale: 1, duration: 0.2, ease: 'power1.out'})
    .to(food, {scale: 1, opacity: 1, duration: 1.5, ease: 'elastic.out(1, 0.4)'}, '+=0.1')
    .to(info, {y: '0', opacity: 1, stagger: 0.3, rotationX: '1400deg', duration: 1}, '-=0.5')

    return tlSmall
}

// STICKY NAV - top bar on larger screens, side nav on smaller screens
const burgerIcon = document.querySelector('.burger-container');
const burger = document.querySelectorAll('.burger');
const stickyNav = document.querySelector('#sticky-nav');
const stickyNavItems = document.querySelectorAll('.sticky-nav li');
const stickyNavItem = Array.from(document.querySelectorAll('.sticky-nav li'));
const sections = Array.from(document.querySelectorAll('section'))
const sectionShowing = document.querySelector('.now-showing')

// show top nav bar if not at top of page - hero section
window.addEventListener('scroll', () => {
    stickyNav.classList.toggle("show", window.scrollY > 10)
})

// close side nav if click on a section link when burger menu open
stickyNavItem.forEach(item => {
    item.addEventListener('click', () => {
        stickyNav.setAttribute('data-visible', false)
        burgerIcon.setAttribute('aria-expanded', false)    
        burgerIcon.classList.remove('openMenu')
    })
})

// highlight nav item for active section
const navOptions = {
    threshold: 0,
    rootMargin: '10px 0px 10px 0px'
}
const navObserver = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if(!entry.isIntersecting) {return;}
        stickyNavItems.forEach(item => {
            if(entry.target.id === item.dataset.nav) {
                item.classList.add('active')
                console.log(item.dataset.nav)
            } else {
                item.classList.remove('active')
            }
        })
    })
}, navOptions)

sections.forEach(section => {
    navObserver.observe(section)
})

// open and close side nav on smaller screens with burger menu
burgerIcon.addEventListener('click', () => {
    burgerIcon.classList.toggle('openMenu');
    const visibility = stickyNav.getAttribute('data-visible')

    if (visibility === "false") {
        stickyNav.setAttribute('data-visible', true)
        burgerIcon.setAttribute('aria-expanded', true)
    } else {
        stickyNav.setAttribute('data-visible', false)
        burgerIcon.setAttribute('aria-expanded', false)
    }

})

// ANIMATIONS ON SCROLL
const fadeUps = document.querySelectorAll('.fade-up')
const sliders = document.querySelectorAll('.slide-in')

const appearOptions = {
    threshold: 0,
    rootMargin: "3vh 0vh 0vh 0vh"
}
const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {return;}

        entry.target.classList.add('appear')
        appearOnScroll.unobserve(entry.target)
    }, appearOptions)
})

fadeUps.forEach(fader => {
    appearOnScroll.observe(fader)
})
sliders.forEach(slider => {
    appearOnScroll.observe(slider)
})

// SOUND EFFECTS on certain elements
const cheezez = document.querySelectorAll('.cheez')

cheezez.forEach((cheez) => {
    cheez.addEventListener('click', () => {
        const sound = new Audio(cheez.dataset.audio);
        sound.volume = 0.3;
        sound.play();
        setTimeout(function() {
            sound.pause()
        }, 7000)
    })    
})

// POPCORN singles in Menu Section - movement reacting to mouse
const popcorns = document.querySelectorAll('.layer')

window.addEventListener('mousemove', (e) => {
    popcorns.forEach(popcorn => {
        const speed = popcorn.dataset.speed

        const r = (window.innerWidth - e.pageY * speed)/50
        const x = (window.innerWidth - e.pageX * speed)/30
        const y = (window.innerWidth - e.pageY * speed)/50
        
        popcorn.style.transform = `translateX(${x}px) translateY(${y}px) rotate(${r}deg)`        
    })
})

// CALENDAR MODAL open and close
const body = document.querySelector('body')
const openModal = document.querySelector('.calendar-wrapper')
const closeModal = document.querySelector('.close')
const modal = document.querySelector('#modal')

openModal.addEventListener('click', () => {
    modal.showModal();
    body.style.overflowY = 'hidden'
})
closeModal.addEventListener('click', () => {
    modal.close();
    body.style.overflowY = 'auto'
})

// MENU MODAL open and close
const menu = document.querySelector('#menu-modal')
const menuImg = document.querySelector('#menu-img')
const menuBtn = document.querySelector('#menu-button')

menuImg.addEventListener('click', () => {
    menu.showModal()
    body.style.overflowY = 'hidden'
})
menuBtn.addEventListener('click', () => {
    menu.close()
    body.style.overflowY = 'auto'
})



// ABOUT SECTION - CAROUSEL

const carouselSlide = document.querySelector('.carousel-slide')
const carouselImgs = document.querySelectorAll('.carousel-slide img')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const arrows = document.querySelectorAll('.arrow')
const slides = Array.from(carouselSlide.children);

// resize elements in carousel according to device width
window.onresize = () => location.reload();

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (carouselSlide, currentSlide, targetSlide) => {
    carouselSlide.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current')
    targetSlide.classList.add('current')
}

nextBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 250ms ease-in-out'
    const currentSlide = carouselSlide.querySelector('.current')
    let nextSlide = currentSlide.nextElementSibling;
    if(currentSlide === carouselSlide.lastElementChild) {
        carouselSlide.style.transition = 'none'
        nextSlide = carouselSlide.firstElementChild
    }
    moveToSlide(carouselSlide, currentSlide, nextSlide)
})
prevBtn.addEventListener('click', () => {
    carouselSlide.style.transition = 'transform 250ms ease-in-out'
    const currentSlide = carouselSlide.querySelector('.current')
    let prevSlide = currentSlide.previousElementSibling;
    if(currentSlide === carouselSlide.firstElementChild) {
        carouselSlide.style.transition = 'none'
        prevSlide = carouselSlide.lastElementChild

    }
    moveToSlide(carouselSlide, currentSlide, prevSlide)
})
