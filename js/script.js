// Use Strict //

// model 
const model = document.querySelector("[data-model]") 
const modelCloseBtn = document.querySelector("[data-model-close]") 
const modelCloseOverLay = document.querySelector("[data-overLay]") 

// Model Function 
const modelCloseFunc = function () { model.classList.add("closed")} 

// Model eventlistener 
modelCloseOverLay.addEventListener("click", modelCloseFunc) 
modelCloseBtn.addEventListener("click", modelCloseFunc) 


//Notification toast varibles 
const notificationToast = document.querySelector("[data-toast]") 
const toastCloseBtn = document.querySelector("[data-toast-close]") 

//Notification toast eventlistener
toastCloseBtn.addEventListener("click", function () {
    notificationToast.classList.add("closed") 
})


// Mobile Menu varibles
const mobileMenuOpenBtn = document.querySelectorAll("[data-mobile-menu-open-btn]") 
const mobileMenu = document.querySelectorAll("[data-mobile-menu]") 
const mobileMenuCloseBtn = document.querySelectorAll("[data-mobile-menu-close-btn]") 
const overLay = document.querySelector("[data-overLay]") 

for (let i = 0; i < mobileMenuOpenBtn.length; i++  ) {
    
    
// mobile menu function 
const mobileMenuCloseFunc = function () { 
    mobileMenu[i].classList.remove("active")  
    overLay.classList.remove("active") 
}

mobileMenuOpenBtn[i].addEventListener("click", function() {
    mobileMenu[i].classList.add("active")
    overLay.classList.add("active")
}) 

mobileMenuCloseBtn[i].addEventListener("click", mobileMenuCloseFunc)
overLay.addEventListener("click", mobileMenuCloseFunc)
}


// accordion varibles
const accordionBtn = document.querySelectorAll("[data-accordion-btn]") 
const accordion = document.querySelectorAll("[data-accordion]") 

for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener("click", function() {
        const clickedBtn = this.nextElementSibling.classList.contains("active")

        for(let i = 0; i < accordion.length; i++) {
            if (clickedBtn) break
            if (accordion[i].classList.contains("active")) {
                accordion[i].classList.remove("active")
                accordionBtn[i].classList.remove("active")
            }
        }

        this.nextElementSibling.classList.toggle("active")
        this.classList.toggle("active")

    })
}





