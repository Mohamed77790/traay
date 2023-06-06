let prénom = document.getElementById('prénom');
let nom = document.getElementById('nom');
let password = document.getElementById('password');
let se_connecter = document.getElementById('se_connecter');

let getprénom = localStorage.getItem('prénom');
let getnom = localStorage.getItem('nom');
let getpassword = localStorage.getItem('password');

se_connecter.addEventListener('click' , function(e) {

    e.preventDefault();

    if(prénom.value === '' || nom.value === '' || password.value === '' ) {

        note.innerHTML = 'بجاه ربي ركز متقليش نسيت الزحح ؟؟ <i class="fa-solid fa-circle-exclamation"></i>' ;

        setTimeout(() => {

            note.innerHTML = '' ;
       }, 3000);
       
    } else {

        if(prénom.value && prénom.value === 'محمد الهادي ميري' && nom.value && nom.value === 'أمل جدلي' && password.value && password.value === '16-07-2022') {

            window.location = "page1.html"
        } else {
            
            note.innerHTML = 'identifiant ou mot de passe incorrect <i class="fa-solid fa-circle-exclamation"></i>' ;

            setTimeout(() => {
    
                note.innerHTML = '' ;
           }, 2000);
        }
    }
});



/**************click_to_top*****************/
{
    
    let up = document.querySelector('.top');
    
    window.onscroll = function() {
        if (window.scrollY >= 10) {
            
            up.classList.add('show');
            
        } else {
            
            up.classList.remove('show');
            
        }
        
    }
    
    up.onclick = function() {
        
        window.scrollTo({
            
            top: 0,
            behavior: 'smooth'
        })

}


}
/**************end*****************/