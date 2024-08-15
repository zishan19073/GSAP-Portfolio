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

tl.from("span",{
    y:30,
    opacity:0,
    duration:1,
    stagger:0.2
})
tl.from("h2",{
    y:-30,
    opacity:0,
    duration:0.4
})

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
