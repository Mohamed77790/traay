let iLearn = 'Hey Im ';
i = 1;


function myAnimation() {

    document.querySelector('.write').textContent = iLearn.slice(0 , i);

    i++;


    if(i > iLearn.length) {
        i = 1;
    }
}

setInterval(function(){

    myAnimation();

},300);

