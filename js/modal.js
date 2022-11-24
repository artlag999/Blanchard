
let swiperSlides = document.querySelector(".gallery").querySelectorAll(".swiper-slide");
let modal = document.querySelector(".gallery__modal");
let modalBtn = modal.querySelector(".modal__btn");
swiperSlides.forEach(el => {
  el.addEventListener("click", function() {
    let img = this.querySelector("img");
    let link = img.getAttribute("src");
    console.log(modal.querySelector("img"));
    animation(modal, "modal-active", "play");
    modal.querySelector("img").setAttribute("src", link);
    document.querySelector(".body").classList.add("body-hidden");
  })
})
modalBtn.addEventListener("click", function() {
  animation(modal, "modal-active", "reverse");
  document.querySelector(".body").classList.remove("body-hidden");
});

function animation(el, Class, flag) {
  if (flag === "play") {
    el.style.display = "flex";
    setTimeout(function() {
      el.classList.add(Class);
    }, 50)
  } else if (flag === "reverse") {
    el.classList.remove(Class);
    setTimeout(function() {
      el.style.display = "none";
    }, 700)
  }
}
