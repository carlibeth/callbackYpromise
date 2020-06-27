
// Respuesta 3

// Callback hell es el anidamiento que se produce cuando se resuelve un llamado que
//  depende de la respuesta de un primer llamado y asi sucesivamente, este enfoque genera
//  un codigo dificil de leer.

function getName (cb = () => {}) {
    setTimeout(function() {
        const names = ["jose", "marco", "pedro"];
        cb(names);
    }, 1000)
}
function getNumber (cb = () => {}){
    setTimeout(function(){
        const numbers = [100, 200, 300];
        cb(numbers)
    }, 1000)
}

getName((names) => {
    console.log(names);
    getNumber((numbers) => {
        console.log(numbers);

    });
    
});
