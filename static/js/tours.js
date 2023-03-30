// Observe the top of the calendar to know when it reaches the top, and stick it in place
const aside = document.getElementById('aside-bottomsection')

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            aside.classList.add('fixed');
        }
    });
}, { threshold: 1.0, rootMargin: "0px 0px 100000px 0px" });

observer.observe(aside);



//Oberserve the elements above the calendar to know when it reaches the top, and unstick it
const asideTop= document.getElementById('aside-topsection')

const observer2 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aside.classList.remove('fixed');
        }
    });
});

observer2.observe(asideTop);


//Observe the footer to know when the calendar reaches the bottom, and unstick it
const footer = document.getElementById('footer')

const observer3 = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aside.classList.add('bottom');
        } else {
            aside.classList.remove('bottom');
        }
    });
}, { threshold: 0.6, rootMargin: "0px 0px 0px 0px" });

observer3.observe(footer);