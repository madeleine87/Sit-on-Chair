document.addEventListener("DOMContentLoaded", function () {
    
   /* Slider */ 
    var next = document.querySelector('#nextPicture');
    var prev = document.querySelector('#prevPicture'); 
    var li = document.querySelectorAll('.slider li');
    var index = 0;
    
    li[index].classList.add('visible');
    
    next.addEventListener('click', function(){
        li[index].classList.remove('visible');
        index++;
        if(index > li.length - 1){
            index = 0;
        }
        li[index].classList.add('visible');
    });
    
    prev.addEventListener('click', function(){
        li[index].classList.remove('visible');
        index--;
        if(index < 0) {
            index = li.length-1;;
        }
        li[index].classList.add('visible');
    });
    
    
/* Znikające divy na obrazku */
    
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