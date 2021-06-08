const btnMenu = document.getElementById('btnMobile');

function toggleMenu(event) {
    if (event.type ===  'touchstart') event.preventDefaut();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);

    if(active) event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
    else event.currentTarget.setAttribute('aria-label', 'Abrir Menu');

}


btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);  


// ANIMATION INTRO CONTRAINER


// CRIAR FUNÇÃO QUE ANIMA A CONST baixarApp APARTIDO DO MOUSE 

function animationButton() {
    console.log("Event")
    baixarApp.classList.add('anima');
}




// SELECTIONAR O BOTÃO DA INTRODUÇÃO

const btnCta = document.querySelector('.linkCta');

// SELECIONAR A CLASSE .BAIXAR (PARA SELECIONAR O PARAGRAFO E A ARROW.SVG)

const baixarApp = document.querySelector('.baixar');

btnCta.addEventListener("mouseleave", animationButton);
