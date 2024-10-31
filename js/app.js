//console.log("Hola mundo")
//let nombre = "Wilson"
//let edad = 18
//console.log("Hola soy " +  nombre + " y tengo " + edad + " zaños")
//definicion de una función 
function suma( numero1 ,  numero2){
    return numero1 + numero2 
}

//llamado a la función 
let resultado= suma (5,8)

console.log(resultado) 
const persona = {
 nombre : "Juan" , 
 edad : 9 , 
 anioDeNacimiento : 2015

}

console.log(" Hola soy " +  persona.nombre + " y tengo " +  persona.edad  + " nací en el "  + persona.anioDeNacimiento +  " y estoy feliz de estar aquí" )

const textoHeader =  document.querySelector ("#heading")

console.log(textiHeader)
textoHeader.textcontent = " Nuevo Texto"
textoHeader.classList.add("nueva-clase")
const enlaces = document.querySelectorAll("navegacion a" )
console.log(enlaces[0]) 
console.log(textoHeader)

textoHeader.textContent = "Nuevo Texto"

textoHeader.classList.add('nueva-clase')



console.log(enlaces[0])

enlaces[1].textContent= "Nuevo enlace"
const btnForm = document.querySelector(".formulario input[type=submit]")
console.log(btnForm)
btnForm.addEventListener("click", function(){

})//
brnForm.addEventListener("click", imprimirClick())
function imprimirCLick(e){
    e.preventDefault()
    console.log("click")
}
const contacto=document.querySelector(".h3")
contacto.addEventListener("click", cambiarClase)
function cambiarClase(){
    contacto.classList.toggle("nueva-clase")
    contacto.textContent ="Error"
}