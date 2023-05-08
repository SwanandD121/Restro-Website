// Active Navbar
let nav = document.querySelector(".navigation-wrap");
window.onscroll = function () {
    if(document.documentElement.scrollTop  > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");
    }
}


// Navbar Hide

// Youtuber's  Code:
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListner("click", function(){
//         navCollapse.classList.remove("show");
//     })
// }
// ) 


// Stack Overflow Solution:
const navLinks = document.querySelectorAll('.nav-link')
const menuToggle = document.getElementById('navbarText')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})

// Counter Design

document.addEventListener('DOMContentLoaded',  () => {
    function counter(id, start, end, duration) {
        let obj = document.getElementById(id),
        current = start,
        range = end - start,
        increment = end > start ? 1 : -1,
        step = Math.abs(Math.floor(duration / range)),
        timer = setInterval(() => {
            current += increment;
            obj.textContent = current;
            if(current == end) {
                clearInterval(timer);
            }
    }, step);
}

counter("count1", 0, 1254, 3000);
counter("count2", 0, 566, 2500);
counter("count3", 0, 864, 3000);
counter("count4", 0, 2000, 3000);

});