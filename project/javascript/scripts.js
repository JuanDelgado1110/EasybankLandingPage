const navBar = document.querySelector(".mainHeader__navBar");
const headerIcon = document.getElementById("headerIcon");

headerIcon.addEventListener("click", () => {
    if (headerIcon.attributes.src.value == "./assets/images/mobile/icon-hamburger.svg") {
        headerIcon.attributes.src.value = "./assets/images/mobile/icon-close.svg";
    } else {
        headerIcon.attributes.src.value = "./assets/images/mobile/icon-hamburger.svg";
    }

    if (navBar.classList.contains("mainHeader__navBar--hidden")) {
        navBar.classList.replace("mainHeader__navBar--hidden", "mainHeader__navBar--show");
    } else {
        navBar.classList.replace("mainHeader__navBar--show", "mainHeader__navBar--hidden");
    }
});
