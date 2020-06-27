// Respuesta 1
// Un callback es una función que se ejecuta después de un evento asíncrono, 
// se pasa como argumento a otra función, esta función se ejecutará luego de resolver
//  la asincronía lo que puede generar un anidamiento y hacer que el programador pueda perderse y 
//  no comprender que camino ha tomado la ejecución, por lo cual hay que evitarlo.

// ejemplo callback: 

function getName (cb = () => {}) {
    setTimeout(function() {
        const names = ["jose", "marco", "pedro"];
        cb(names);
    }, 1000)
}

getName(function(names){
    console.log('names', names)
});
