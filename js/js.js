function menuoculto() {
    
    let menumobile = document.getElementById ('mobile-menu-item')
    if (menumobile.classList.contains('open')){
        menumobile.classList.remove('open')

    }else {
        menumobile.classList.add('open')
    }
}