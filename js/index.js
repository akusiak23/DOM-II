// Your code goes here


 // Element References

const button = document.querySelectorAll('.destination div');
const hoverBanner = document.querySelector('.banner');
const mainNav = document.querySelector('.main-navigation');
const pageName = document.querySelector('.logo-heading');
const destinationPic = document.querySelector('.content-destination img');
const mainHeader = document.querySelector('.welcome')
const background = document.querySelector('body');
const footer = document.querySelector('.footer');
const squareImg = document.querySelector('.img-fluid rounded');


// Event Listeners
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', (event) => {
        console.log('button was clicked!');
        alert('Congrats on taking your first step towards taking a sweet vacation!');
    });
}

hoverBanner.addEventListener('mouseover', (event) => {
    hoverBanner.classList.toggle('blur');
    console.log("blur");
});

window.addEventListener('load', (event) => {
    console.log('This website is very cool');
})

mainNav.addEventListener('mouseenter', (event) => {
    event.currentTarget.style.border = '5px solid orange'; 
    event.preventDefault();
});

pageName.addEventListener('mousemove', (event) => {
    event.currentTarget.style.border = '5px solid orange'; 
    event.stopPropagation();
})

footer.addEventListener('dblclick', (event) => {
    event.currentTarget.style.background = '#52AFF7';
});

destinationPic.addEventListener('contextmenu', (event) => {
    alert(`Don't steal my pics bro`);
});

pageName.addEventListener('mouseenter', (event) => {
    pageName.style.fontWeight = "900";
    pageName.style.cursor = "pointer";
});

pageName.addEventListener('mouseleave', (event) => {
    pageName.style.fontWeight = '100';
});

background.addEventListener('keydown', (event) => {
    background.style.backgroundColor = 'purple';
    background.style.color = 'white';
});

background.addEventListener('keydown', (event) => {
    
});


mainHeader.addEventListener('click', () => {
    TweenMax.to("h2.welcome", 1, {opacity:0.3});
});


