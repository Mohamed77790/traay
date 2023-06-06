let tabs = document.querySelectorAll('.tabs li');
let tabsArray = Array.from(tabs);

let divs = document.querySelectorAll('.content div');
let divsArray = Array.from(divs);


tabsArray.forEach((tab)=> {

    tab.addEventListener('click' , function(e){

        tabsArray.forEach((item)=>{

            item.classList.remove('active');
            this.classList.add('active');

        });

        divsArray.forEach((div)=>{

            div.style.display = 'none';

        });

        let xx = document.querySelector(e.currentTarget.dataset.lang)
        xx.style.display = 'block'
    });

});