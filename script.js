const homeButton = document.getElementById("homeButton");

homeButton.addEventListener("click", function (event) {

    event.preventDefault();

    document.body.classList.add("fadeOut");

    setTimeout(function () {

        window.location.href = "home.html";

    },1000);

});
