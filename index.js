const contactbutton = document.querySelector(".contact-button");
const contactinput = document.querySelectorAll(".contact-input");

contactbutton.addEventListener("click", () => {
    contactinput.style.display = "none";
})