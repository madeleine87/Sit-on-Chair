document.addEventListener("DOMContentLoaded", function () {

    /* Slider */
    slider();

    /* Znikające divy na obrazku */
    hideDivs();

    /* Drop down list */
    addClicktoDdl();

});

/* Slider */
function slider() {
    var next = document.querySelector('#nextPicture');
    var prev = document.querySelector('#prevPicture');
    var li = document.querySelectorAll('.slider li');
    var index = 0;

    li[index].classList.add('visible');

    next.addEventListener('click', function () {
        li[index].classList.remove('visible');
        index++;
        if (index > li.length - 1) {
            index = 0;
        }
        li[index].classList.add('visible');
    });

    prev.addEventListener('click', function () {
        li[index].classList.remove('visible');
        index--;
        if (index < 0) {
            index = li.length - 1;;
        }
        li[index].classList.add('visible');
    });
}

/* Znikające divy na obrazku */
function hideDivs() {
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
}

/* Drop down list */
function addClicktoDdl() {
    var ddlists = document.querySelectorAll(".drop_down_list");
    for (i = 0; i < ddlists.length; i++) {
        ddlists[i].addEventListener("click", function (event) {
            var ul = this.querySelector(".list_panel");
            var isBlock = ul.style.display != "block";

            var uls = document.querySelectorAll(".list_panel");
            for (i = 0; i < uls.length; i++) {
                uls[i].style.display = "none";
            }

            if (isBlock == true) {
                ul.style.display = "block";
            }
        });
    }
}