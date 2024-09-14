const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});

// top level element main el

function helloji() {
  window.addEventListener("mousemove", function (dets) {
    document.querySelector(
      "#minicircle"
    ).style.transform = `translate(${dets.clientX}px,${dets.clientY}px)`;
  });
}

helloji();

function firstpageAnim() {
  var t1 = gsap.timeline();

  t1.from("#nav", {
    y: "-10",
    opacity: 0,
    duration: 2,

    ease: Expo.easeInOut,
  }).to(".boundingelem", {
    y: 0,

    duration: 2,

    stagger: 0.2,
    ease: Expo.easeInOut,
  });
}

firstpageAnim();

//   elem.addEventListener("mousemove",function(details){

//     gsap.to(elem.querySelector("img"),{
//       opacity:1,
//       ease:Power1,
//      }
//   })
// })
document.querySelectorAll(".elem-container").forEach(function (elem) {
  var rotate = 0;
  var diffrot = 0;

  elem.addEventListener("mouseleave", function (dets) {
    gsap.to(elem.querySelector("img"), {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  elem.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - elem.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(elem.querySelector("img"), {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });
});

let newdate = new Date();
document.querySelector("#time").textContent = newdate;
