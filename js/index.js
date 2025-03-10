const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");
const cartholder = document.querySelectorAll(".sec-7-cart");
loadbtn = document.getElementById('sec-button')
var countiteam = 3


const active_border = document.querySelectorAll(".section-6-part2-holder");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());


active_border.forEach(element => {

  element.addEventListener('click', () => {
    active_border.forEach(el => {
      el.firstElementChild.classList.remove('sec-6-line2')
      el.firstElementChild.classList.add('sec-6-line')


    })
    element.firstElementChild.classList.add('sec-6-line2')
    element.firstElementChild.classList.remove('sec-6-line')
    console.log(element.firstElementChild)



  })
});


loadbtn.addEventListener('click', () => {
  for (let i = countiteam; i < countiteam + 3; i++) {
    cartholder[i].style.display = 'block'

  }
  countiteam = countiteam + 3
  if (countiteam == cartholder.length) {
    loadbtn.style.cursor = "not-allowed"
  }

})


// console.log(cartholder[5].style)

