function locomotiveAnimaiton() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });




    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}
locomotiveAnimaiton()


function loadingAnimation() {
    var tl = gsap.timeline()
    tl.from(".line h1", {
        opacity: 0,
        duration: 0.5,
        delay: 0.3,
        stagger: 0.2,
        y: 100

    })
    tl.from('#line1-p1 , .line h2', {
        opacity: 0,
        onStart: function () {

            var h5 = document.querySelector('#line1-p1 h5');
            var count = 0
            var counter = setInterval(() => {
                count++
                h5.textContent = count;
                if (count == 100) {
                    clearInterval(counter)
                }

            }, 25)
        }

    })
    tl.to('.line h2', {
        animationName: "anime",
        opacity: 1,
        duration: 0.5
    })
    tl.to("#loader", {
        opacity: 0,
        delay: 2.7,
        duration: 0.5
    })
    tl.from('#page1', {
        y: 1500,
        opacity: 1,
        duration: 0.3,
        delay: 0.3,
        ease: Power4
    })
    tl.to('#loader', {
        display: 'none'
    })
    tl.from('#nav', {
        opacity: 0
    })
    tl.from('#hero1 h1 ,#hero2 h1 , #hero3 h2 ,#hero4 h1', {
        y: 200,
        stagger: 0.1,
        

    })


}
loadingAnimation()

function cursorAnimation() {
    Shery.mouseFollower({
        // Parameters are optional.
        skew: true,
        ease: "cubic-bezier(0.23, 1, 0.320, 1)",
        duration: 1,
      })
    Shery.makeMagnet("#nav-p2 h4", {
    });
    var videoContainer = document.querySelector("#video-container")
    var video = document.querySelector("#video-container video")

    videoContainer.addEventListener("mouseenter",function(){
        videoContainer.addEventListener("mousemove",function(dets){
            gsap.to(".mousefollower",{
               display:"none"
            })
            gsap.to("#video-cursr",{
                left:dets.x ,
                top:dets.y 
            })
        })

    })
    videoContainer.addEventListener('mouseleave',function(){
        gsap.to(".mousefollower",{
            display:"initial"
        })
        gsap.to("#video-cursr",{
            left:"70vw",
            top:"3.8vw"
        })
    })
    var flag = 0
    videoContainer.addEventListener("click",()=>{
        if(flag==0){
            video.zindex=9999
            video.play()
        video.style.opacity=1
        gsap.to("#video-cursr",{
            scale:0.5
        })
        document.querySelector("#video-cursr").innerHTML = '<i class="ri-pause-line"></i>'
        flag = 1
        }else{
            video.pause()
            video.style.opacity=0
            document.querySelector("#video-cursr").innerHTML = ' <i class="ri-play-fill"></i>'
            gsap.to("#video-cursr",{
                scale:1
                
            })
            
        }
        
        
    })
   
}
cursorAnimation()


function sheryAnimation() {
    Shery.imageEffect(".image-div", {
        style: 5,
        config: { "a": { "value": 0.69, "range": [0, 30] }, "b": { "value": -0.86, "range": [-1, 1] }, "zindex": { "value": -9996999, "range": [-9999999, 9999999] }, "aspect": { "value": 0.6969667077681875 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.5, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.76, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 2.82, "range": [0, 10] }, "metaball": { "value": 0.53, "range": [0, 2] }, "discard_threshold": { "value": 0.76, "range": [0, 1] }, "antialias_threshold": { "value": 0.01, "range": [0, 0.1] }, "noise_height": { "value": 0.66, "range": [0, 2] }, "noise_scale": { "value": 6.87, "range": [0, 100] } },
        gooey: true,
        
    })
}
sheryAnimation()

