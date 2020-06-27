// Respuesta 2 
// Una Promesa es un objeto que nos ayuda a saber, cuando un llamado
// asíncrono se resolvió o se rechazó.

// Para crear una promesa se hace a través del objeto "Promise",
// Este recibe como parámetro una función callback, que retorna la
// función resolve y la función reject .

// ejemplo promesa:
const getName = new Promise (function(resolve, reject){
    return setTimeout(function(){
        const names = ["jose", "marco", "pedro"];
        resolve(names)
    }, 1000)

})

const getName = new Promise (function(resolve, reject){
    return setTimeout(function(){
        const names = ["jose", "marco", "pedro"];
        reject(names)
    }, 1000)

})