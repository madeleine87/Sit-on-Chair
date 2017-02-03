document.addEventListener("DOMContentLoaded", function () {

    /* Slider */
    slider();

    /* Toggle divs */
    hideDivs();

    /* Drop down list */
    addClicktoDdl();

    addChairsToSummary();
    addColorToSummary();
    addPatternToSummary();
    addTransportToSummary();
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

/* Toggle divs */
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

function addChairsToSummary() {
    var chairs = document.querySelectorAll(".ddl_title li");
    var myChoice = document.querySelector(".title");
    var chairPrice = document.querySelector(".title.value");
    for (i = 0; i < chairs.length; i++) {
        chairs[i].addEventListener("click", function (event) {
            myChoice.innerText = this.innerText;
            chairPrice.innerText = 200;
            calculateSum();
        });
    }
}

function addColorToSummary() {
    var colors = document.querySelectorAll(".ddl_color li");
    var myChoice2 = document.querySelector(".color");
    var colorPrice = document.querySelector(".color.value");
    for (i = 0; i < colors.length; i++) {
        colors[i].addEventListener("click", function (event) {
            myChoice2.innerText = this.innerText;
            colorPrice.innerText = 40;
            calculateSum();
        });
    }
}

function addPatternToSummary() {
    var patterns = document.querySelectorAll(".ddl_pattern li");
    var myChoice3 = document.querySelector(".pattern");
    var patternPrice = document.querySelector(".pattern.value");
    for (i = 0; i < patterns.length; i++) {
        patterns[i].addEventListener("click", function (event) {
            myChoice3.innerText = this.innerText;
            patternPrice.innerText = 40;
            calculateSum();
        });
    }
}

function addTransportToSummary() {
    var transport = document.querySelector("#transport");
    var myChoice4 = document.querySelector(".transport");
    var transportPrice = document.querySelector(".transport.value");

    transport.addEventListener("click", function (event) {
        if (transport.checked) {
            myChoice4.innerText = "Transport";
            transportPrice.innerText = 50;
        } else {
            myChoice4.innerText = "";
            transportPrice.innerText = "";
        }
        calculateSum();
    });
}

function calculateSum() {
    var chairPrice = document.querySelector(".title.value").innerText;
    var colorPrice = document.querySelector(".color.value").innerText;
    var patternPrice = document.querySelector(".pattern.value").innerText;
    var transportPrice = document.querySelector(".transport.value").innerText;
    var sum = document.querySelector(".sum");

    sum.innerText = Number(chairPrice) + Number(colorPrice) + Number(patternPrice) + Number(transportPrice);
}