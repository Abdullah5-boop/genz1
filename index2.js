
const accordionItemh = document.querySelectorAll(".ko-accordion-item-header");
accordionItemh.forEach((accordionItemh) => {
  accordionItemh.addEventListener("click", (event) => {

    accordionItemh.classList.toggle("active");
    const accordionItemBody = accordionItemh.nextElementSibling;
    if (accordionItemh.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});
