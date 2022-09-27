function prueba(texto){
    let numero: 1;
    return function saludo() {
        console.log(`Hola ${numero}:${texto}`);
        numero++;
    }
}


prueba('David');
prueba('Pepito');
prueba('Maria');