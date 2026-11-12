const btn = document.getElementById('btn')
const nome = document.getElementById('nome')

btn.addEventListener('click', function(){
    const valor = nome.value
    alert ("Hello: "+valor)
})
