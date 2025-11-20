var tl = gsap.timeline()
tl.from(" nav div",{
    opacity:0,
    y:-50,
    duration:2,
    
})
tl.from("nav #rnav a",{
    opacity:0,
    y:-50,
    duration:1,
    stagger:.5
})
tl.from(" main h1",{
    opacity:0,
    x:-500,
    duration:1.5,
    stagger:1,
    delay:1
})
tl.from("main img",{
     opacity:0,
    x:50,
    duration:1.5,
    rotate:270,
    stagger:1,
    delay:.5,
    stagger:1.5
})
tl.from(" main footer",{
    opacity:0,
    y:500,
    duration:1.5,
    stagger:1,
    delay:1
})