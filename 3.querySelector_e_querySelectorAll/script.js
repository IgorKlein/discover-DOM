// querySelector: retorna sempre apenas o primeiro elemento html

const element = document.querySelector('meta')

//Retorna um objeto do tipo HTML
console.log(element)


// querySelectorAll

const elements = document.querySelectorAll('meta')

//Retorna uma coleção do nós (Node List)
console.log(elements)

//Com uma Node Lits, é possível percorrer o array através do forEach, o que não é possível com um HTML Collection.
elements.forEach(el => console.log(el))

