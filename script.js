const btn = document.getElementById('btn')
const nome = document.getElementById('nome')

btn.addEventListener('click', function(){
    const nome = Number (prompt ("Seu nome "))
    alert ("Hello: "+nome)
})
