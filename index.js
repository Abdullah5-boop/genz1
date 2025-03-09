const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const active_border = document.querySelectorAll(".section-6-part2-holder");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


active_border.forEach(element => {
  
  element.addEventListener('click',()=>{
    active_border.forEach(el=>{
      el.firstElementChild.classList.remove('sec-6-line2')
      el.firstElementChild.classList.add('sec-6-line')
      

    })
    element.firstElementChild.classList.add('sec-6-line2')
    element.firstElementChild.classList.remove('sec-6-line')
    console.log(element.firstElementChild)



  })
});


// const accordionItemh = document.querySelectorAll(".ko-accordion-item-header");
// accordionItemh.forEach((accordionItemh) => {
//   accordionItemh.addEventListener("click", (event) => {

//     accordionItemh.classList.toggle("active");
//     const accordionItemBody = accordionItemh.nextElementSibling;
//     if (accordionItemh.classList.contains("active")) {
//       accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
//     } else {
//       accordionItemBody.style.maxHeight = 0;
//     }
//   });
// });
