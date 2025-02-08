const heroButtonEl = document.querySelector(".main-button");
const closeButtonEl = document.querySelector(".modal__button");
const backdropEl = document.querySelector(".backdrop");
const formEl = document.querySelector(".main-button--submit");
document.addEventListener("keydown", isClosedModalbyEscape);

heroButtonEl.addEventListener("click",isOpenModal);
closeButtonEl.addEventListener("click", isOpenModal);



function isOpenModal() {
    backdropEl.classList.toggle("is-hidden");
};


function isClosedModalbyEscape(e) {
    if (e.code === "Escape") {
        backdropEl.classList.add("is-hidden");
    }
    else return  
};



formEl.addEventListener("submit", (e) => e.preventDefault());