function toggleVisibilityFirst() {
    let element = document.getElementById('development');
    let button = document.querySelector(`.read-more-btn-1`);

    if (element.style.display === "none") {
        element.style.display = "block";
        button.textContent = "მაჩვენე ნაკლები";
    } else {
        element.style.display = "none";
        button.textContent = "მაჩვენე მეტი";
    }
}

function toggleVisibilitySecond() {
    let element = document.getElementById('courses');
    let button = document.querySelector(`.read-more-btn-2`);

    if (element.style.display === "none") {
        element.style.display = "block";
        button.textContent = "მაჩვენე ნაკლები";
    } else {
        element.style.display = "none";
        button.textContent = "მაჩვენე მეტი";
    }
}