function abc(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#pg"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#pg", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#pg").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();


}

abc();

gsap.to("#img1",{
    scrollTrigger:{
        scroller:"#pg",
        trigger: "#img1",
        start: "top 1%",
        // markers:true,   
        pin: true,
        scrub:1,
        end: "top -485%"
    },
    rotate: -15,
    duration: 1,
    delay:1    
})
gsap.to("#img1",{
    scrollTrigger:{
        scroller:"#pg",
        trigger: "#img1",
          //  markers: true,
         scrub:3,   
        start: 2900
    },
     scale:0.3,

})

gsap.from("#nav",{
    scrollTrigger:{
        scroller:"#pg",
        trigger:"#nav",
        pin:true,
        start:"top 0%",
        end:"top -480%"
    }
})

gsap.from("#nav2",{
    scrollTrigger:{
        scroller:"#pg",
        trigger:"#nav2",
        pin:true,
        start:"top 0%",
        end:"top -474.7%"
    }
})

