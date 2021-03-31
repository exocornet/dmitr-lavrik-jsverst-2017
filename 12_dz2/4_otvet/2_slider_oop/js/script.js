window.onload = function () {
    var images = document.querySelectorAll('.gallery-1 .photos img');
    var slider = new Slider(images);
    
    document.querySelector('.gallery-1 .buttons .prev').onclick = function(){
        slider.prev();
    }
 
    document.querySelector('.gallery-1 .buttons .next').onclick = function(){
        slider.next();
    }
    
    var images2 = document.querySelectorAll('.gallery-2 .photos img');
    var slider2 = new Slider(images2);

    //этот вариант если не подменять this
    // setInterval (function(){
    //     slider2.next();
    // }, 1000);


    setInterval(slider2.next, 1000);
}

function Slider(images) {
    this.images = images;
    var i = 0;
    var slider = this; //подмена this

    this.prev = function () {
        slider.images[i].classList.remove('showed');
        i--;

        if (i < 0) {
            i = slider.images.length - 1;
        }

        slider.images[i].classList.add('showed');
    }

    this.next = function () {
        slider.images[i].classList.remove('showed');
        i++;

        if (i >= slider.images.length) {
            i = 0;
        }

        slider.images[i].classList.add('showed');
    }
}