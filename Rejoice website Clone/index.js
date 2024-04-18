function locoScroll(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,

  // for tablet smooth
  tablet: { smooth: true },

  // for mobile
  smartphone: { smooth: true }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length
      ? locoScroll.scrollTo(value, 0, 0)
      : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {
      top: 0,
      left: 0,
      width: window.innerWidth,
      height: window.innerHeight
    };
  }

  // follwoing line is not required to work pinning on touch screen

  /* pinType: document.querySelector("#main").style.transform
    ? "transform"
    : "fixed"*/
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
function CursorEffect() {
    
var page1Content = document.querySelector("#page1Content")
var cursor = document.querySelector("#cursor1")

page1Content.addEventListener("mousemove",(e) => {
    // cursor.style.left = e.x + "px"
    // cursor.style.top = e.y + "px"

    gsap.to(cursor,{
        left : e.x,
        top : e.y,
    })
})

page1Content.addEventListener("mouseleave" ,() =>{
    gsap.to(cursor,{
        scale : 0,
        opacity : 0,
    })
})
page1Content.addEventListener("mouseenter" ,() =>{
    gsap.to(cursor,{
        scale : 1,
        opacity : 1,
    })
})

}
function page2Animation(){
    gsap.from(".elem h1 div ",{
        y: 120,
        stagger: 0.1,
        duration: 1,
        delay: 2,
        scrollTrigger:{
            trigger: "#page2",
            scroller: "#main",
            start: "top 47%",
            end: "top 15%",
            markers: true,
            scrub: 2
        }
    })
}
function Swiperr(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: true,
          },
       
      });
}

locoScroll()
CursorEffect()
page2Animation()
Swiperr()

var t1 = gsap.timeline()
t1.from("#loader h3",{
    x: -80,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
})
t1.to("#loader h3",{
    x: 80,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
})
t1.to("#loader",{
    opacity: 0
})
t1.from("#page1Content h1 span",{
    y: 100,
    opacity: 0,
    stagger: 0.1,
    duration: 0.5,
    delay: -0.5
})
t1.to("#loader",{
    display: "none"
})