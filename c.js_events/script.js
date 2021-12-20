// JS Events
 
const h1 = document.querySelector('h1')
const h4 = document.querySelector('h4')

//(tipo de evento, function a ser executada)
h1.addEventListener('click', print)

//outra forma de adicionar eventos
//(tipo de evento, function a ser executada)
h4.onclick = print
//desta forma, ele atribui apenas uma função por vez


function print() {
    console.log("print")
}