gsap.registerPlugin(ScrollTrigger);

let panels = gsap.utils.toArray(".panel");
// we'll create a ScrollTrigger for each panel just to track when each panel's top hits the top of the viewport (we only need this for snapping)
let tops = panels.map(panel => ScrollTrigger.create({trigger: panel, start: "top top"}));

panels.forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: () => panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom", // if it's shorter than the viewport, we prefer to pin it at the top
    pin: true, 
    pinSpacing: false 
  });
});


var menu = document.querySelector(".ri-menu-4-fill")
var cross = document.querySelector(".ri-close-line")


var tl1 = gsap.timeline()

tl1.to(".full",{
    right:0,
    duration:0.5
})
tl1.from(".full h4",{
    x:150,
    duration:0.4,
    stagger:0.2,
    opacity:0
})
tl1.from(".full i",{
    opacity:0,
    duration:0.1
})
 tl1.pause()

 menu.addEventListener("click", function(){
    console.log("hehe");
    tl1.play()
 })
 cross.addEventListener("click",function(){
    tl1.reverse()
 })

var tl = gsap.timeline();

function initAnimations() {
    var screenWidth = window.innerWidth;

    if(screenWidth <= 480) {
        // Adjust animations for smaller screens
        tl.from("span",{
            y:20, // Less movement
            opacity:0,
            duration:0.8, // Faster
            stagger:0.1 // Less delay
        })
        .from("h2",{
            y:-20,
            opacity:0,
            duration:0.3
        });
    } else {
        // Default animations for larger screens
        tl.from("span",{
            y:30,
            opacity:0,
            duration:1,
            stagger:0.2
        })
        .from("h2",{
            y:-30,
            opacity:0,
            duration:0.4
        });
    }
}

// Call this function on page load and on window resize
initAnimations();
window.addEventListener('resize', initAnimations);


gsap.from(".projects h1",{
    y:-60,
    opacity:0,
    duration:0.5,
    stagger:0.2,
    scrollTrigger:{
        trigger:".projects h1",
        scrolller:"body",
        // markers: true,
        start:"top 60%",
        end:"top 30%",
        scrub:1
    }
})
