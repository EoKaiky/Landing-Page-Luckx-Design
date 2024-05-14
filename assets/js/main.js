
window.revelar = ScrollReveal({reset:true})

const form = document.querySelector('#form')

//PRIMEIRA SEÇÃO SITE
function escopo (){ 
ScrollReveal().reveal('.efeitoText1', {
    duration: 2000,
    distance: '100px',
    origin: 'left'
})

ScrollReveal().reveal('.efeitoImg1', {
    delay: 500,
    duration: 2000,
    distance: '100px'
})

ScrollReveal().reveal('.efeitoText2', {
    duration: 2000,
    distance: '100px',
    origin: 'right'
})

ScrollReveal().reveal('.efeitoImg4', {
    duration: 2000,
    distance: '100px',
    delay: 400,
    origin: 'top'
})

ScrollReveal().reveal('.efeitoImg2', {
    duration: 2000,
    distance: '100px',
    delay: 700,
    origin: 'top'
})

ScrollReveal().reveal('.efeitoImg3', {
    duration: 2000,
    distance: '100px',
    delay: 1500,
    origin: 'top'
})

ScrollReveal().reveal('.efeitoText3', {
    duration: 2000,
    distance: '100px',
    origin: 'top'
})

ScrollReveal().reveal('.efeitoText4', {
    duration: 2000,
    distance: '100px',
    delay: 500,
    origin: 'top'
})

ScrollReveal().reveal('.efeitoBalon1', {
    duration: 2000,
    distance: '100px',
    origin: 'right'
})

ScrollReveal().reveal('.efeitoBalon2', {
    duration: 2000,
    distance: '100px',
    delay: 500,
    origin: 'right'
})

ScrollReveal().reveal('.efeitoBalon3', {
    duration: 2000,
    distance: '100px',
    delay: 1000,
    origin: 'right'
})

ScrollReveal().reveal('.efeitoText5', {
    duration: 2000,
    distance: '100px',
    origin: 'top'
})

ScrollReveal().reveal('.efeitoText6', {
    duration: 2000,
    distance: '100px',
    delay: 500,
    origin: 'top'
})

ScrollReveal().reveal('.efeitoInput', {
    duration: 2000,
    distance: '100px',
    origin: 'top'
})

ScrollReveal().reveal('.efeitoInput2', {
    duration: 2000,
    distance: '100px',
    delay: 300,
    origin: 'top'
})

ScrollReveal().reveal('.efeitoInput3', {
    duration: 2000,
    distance: '100px',
    delay: 1000,
    origin: 'top'
})

ScrollReveal().reveal('.efeitoInput4', {
    duration: 2000,
    distance: '100px',
    delay: 1800,
    origin: 'top'
})

ScrollReveal().reveal('.efeitoButton', {
    duration: 2000,
    distance: '100px',
    delay: 1300 ,
    origin: 'top'
})

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.querySelector('#nomeIn')
    const email = document.querySelector('#emailIn')
    const telefone = document.querySelector('#telefoneIn')
    const descricao = document.querySelector('#descricao')
    const enviaBtn = document.querySelector('#enviar')
    
    //strings que recolhe os dados do form
    const nomeValue = nome.value
    const emailValue = email.value
    const telefoneValue = telefone.value
    const descricaoValue = descricao.value

    enviaBtn.addEventListener('click', function(){
        console.log("botão clicado")

        //pega os dados do form e transforma em um array
        const message = `Olá meu nome é ${nomeValue}, meu email e telefone para contato são: ${emailValue} e ${telefoneValue},
        queria fazer um orçamento de um projeto: ${descricaoValue}`
        //codifica a mensagem e guarda na variavel
        const mensagem = encodeURIComponent(message)
        //console.log(dadosEnviar)
        const phone = "11952926847"

        function enviaValor () {
            window.open(`https://wa.me/${phone}?text=${mensagem}`, "_blank")
        }
        enviaValor()

    })
 });
}
escopo()