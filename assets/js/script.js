"use strict";

// Function to toggle the 'active' class on an element
const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Event listener to toggle sidebar on mobile
sidebarBtn.addEventListener("click", function () {
    elementToggleFunc(sidebar);
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Function to toggle testimonials modal
const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
};

// Add click event to all testimonial items to open modal
for (let i = 0; i < testimonialsItem.length; i++) {
    testimonialsItem[i].addEventListener("click", function () {
        modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
        modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
        modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
        modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

        testimonialsModalFunc();
    });
}

// Add click event to modal close button and overlay to close modal
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-select-value]");
// const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Event listener to toggle select dropdown
// select.addEventListener("click", function () {
//     elementToggleFunc(this);
// });

// Add event to all select items to update select value and filter
// for (let i = 0; i < selectItems.length; i++) {
//     selectItems[i].addEventListener("click", function () {
//         let selectedValue = this.innerText.toLowerCase();
//         selectValue.innerText = this.innerText;
//         elementToggleFunc(select);
//         filterFunc(selectedValue);
//     });
// }

// // Filter variables
// const filterItems = document.querySelectorAll("[data-filter-item]");

// // Function to filter items based on selected value
// const filterFunc = function (selectedValue) {
//     for (let i = 0; i < filterItems.length; i++) {
//         if (selectedValue === "all") {
//             filterItems[i].classList.add("active");
//         } else if (selectedValue === filterItems[i].dataset.category) {
//             filterItems[i].classList.add("active");
//         } else {
//             filterItems[i].classList.remove("active");
//         }
//     }
// };

// Add event to all filter button items for large screen
// let lastClickedBtn = filterBtn[0];
// for (let i = 0; i < filterBtn.length; i++) {
//     filterBtn[i].addEventListener("click", function () {
//         let selectedValue = this.innerText.toLowerCase();
//         selectValue.innerText = this.innerText;
//         filterFunc(selectedValue);

//         lastClickedBtn.classList.remove("active");
//         this.classList.add("active");
//         lastClickedBtn = this;
//     });
// }

// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields to enable/disable form button based on validation
for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].addEventListener("input", function () {
        if (form.checkValidity()) {
            formBtn.removeAttribute("disabled");
        } else {
            formBtn.setAttribute("disabled", "");
        }
    });
}

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all navigation links to switch pages and highlight active link
for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener("click", function () {
        for (let i = 0; i < pages.length; i++) {
            if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
                pages[i].classList.add("active");
                navigationLinks[i].classList.add("active");
                window.scrollTo(0, 0); // Scroll to top of the page
            } else {
                pages[i].classList.remove("active");
                navigationLinks[i].classList.remove("active");
            }
        }
    });
}