let prénom = document.getElementById('prénom');
let nom = document.getElementById('nom');
let inlineFormCustomSelect = document.getElementById('inlineFormCustomSelect');
let date_de_naissance = document.getElementById('date_de_naissance');
let inlineFormCustomSelecte = document.getElementById('inlineFormCustomSelecte');
let letat = document.getElementById('letat');
let num_tel = document.getElementById('num_tel');
let email = document.getElementById('email');
let password = document.getElementById('password');
let conf_password = document.getElementById('conf_password');
let enregistré = document.getElementById('enregistré');
let exampleCheck1 = document.getElementById('exampleCheck1');
let note     = document.getElementById('note');

enregistré.addEventListener('click' , function(e) {

    e.preventDefault();
    
    if(prénom.value === '' || nom.value === '' || inlineFormCustomSelect.value === '' || date_de_naissance.value === '' || inlineFormCustomSelecte.value === '' || letat.value ==='' || num_tel.value ==='' || email.value === '' || password.value === '' || conf_password.value === '' || exampleCheck1.value === '' ) {

        note.innerHTML = 'Vous devez remplir tous les champs <i class="fa-solid fa-circle-exclamation"></i>' ;

        setTimeout(() => {

            note.innerHTML = '' ;
       }, 2000);
       
    } else {

        localStorage.setItem('prénom' ,prénom.value );
        localStorage.setItem('nom' ,nom.value );
        localStorage.setItem('inlineFormCustomSelect' ,inlineFormCustomSelect.value );
        localStorage.setItem('date_de_naissance' ,date_de_naissance.value );
        localStorage.setItem('inlineFormCustomSelecte' ,inlineFormCustomSelecte.value );
        localStorage.setItem('letat' ,letat.value );
        localStorage.setItem('num_tel' ,num_tel.value );
        localStorage.setItem('email' ,email.value );
        localStorage.setItem('password' ,password.value );
        localStorage.setItem('conf_password' ,conf_password.value );
        localStorage.setItem('exampleCheck1' ,exampleCheck1.value );

        setTimeout(() => {

            window.location = 'login__inscription.html'
            
        }, 2000);
    }
});