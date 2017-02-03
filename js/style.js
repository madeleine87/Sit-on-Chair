document.addEventListener("DOMContentLoaded", function () {

    var image = document.querySelectorAll(".dis_child");
    for (i = 0; i < image.length; i++) {
        image[i].addEventListener("mouseover", function (event) {
            var child = this.querySelector(".transparent");
            child.style.display = "none";
        });

        image[i].addEventListener("mouseout", function (event) {
            var child = this.querySelector(".transparent");
            child.style.display = "block";
        });
    }

});