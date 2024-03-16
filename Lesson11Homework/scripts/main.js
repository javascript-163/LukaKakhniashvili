function searchProduct() {
    let searchPhrase = document.getElementById("searchInput").value.toUpperCase();
    let productNames = document.querySelectorAll(".product_name")
    productNames.forEach((prod) => {
        if (prod.innerText.toUpperCase().indexOf(searchPhrase) > -1) {
            console.log(prod.innerText.toUpperCase().indexOf(searchPhrase))
            prod.parentElement.style.display = "flex";
        } else {
            prod.parentElement.style.display = "none";
        }
    })
}

let slidesContainer = document.querySelectorAll(".image_wrapper.auto_slider");
for (let container of slidesContainer) {
    let slideIndex = 0;
    showSlides(container.children, slideIndex);
}

function showSlides(slides, index) {
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    index = index + 1;
    if (index > slides.length) {
        index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(() => {
        showSlides(slides, index)
    }, 1500)
}

let slidesManualContainer = document.querySelectorAll(".image_wrapper.manual_slider");
for (let container of slidesManualContainer) {
    let indexManual = -1;

    container.querySelector(".fa-chevron-left").addEventListener("click", () => {
        showSlidesManual(-1)
    })
    container.querySelector(".fa-chevron-right").addEventListener("click", () => {
        showSlidesManual(1)
    })
    function showSlidesManual(n) {
        let slides = container.querySelectorAll(".product_img.manual");
        indexManual += n;
        if (indexManual > slides.length) {
            indexManual = 1;
        }
        if (indexManual < 1) {
            indexManual = slides.length;
        }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slides[indexManual - 1].style.display = "block";
    }
    showSlidesManual(2)
}