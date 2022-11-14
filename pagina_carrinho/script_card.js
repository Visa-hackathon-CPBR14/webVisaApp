let check = document.querySelector('#defaultCheck1').value

let tab1 = document.querySelector('.beneficios').style.display = "block"
let tab2 = document.querySelector('.beneficioVisa').style.display = "none"

check.addEventListener('click', function(){
    tab2.style.display = "block"

})
