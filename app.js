const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const fecha = document.querySelector('.fecha')

button.addEventListener('click', () => {
    popup.style.display = 'block'
})
popup.addEventListener('click', event => {
    let elementockicado = event.target.classList[0]
    console.log(elementockicado)
    const volorParaFechar = elementockicado =='popup-wrapper'|| elementockicado == 'fecha'|| elementockicado == 'link'
    if(volorParaFechar){
        popup.style.display = 'none'
    }
})