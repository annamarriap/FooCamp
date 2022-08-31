// 1. Arrays

function fillArray (numeroInicial, numeroFinal) {
    let myArray= [];
    for (n = numeroInicial; n <= numeroFinal; n++) {
        myArray.push(n);
    }
    return myArray;
}

let numericArray = fillArray(0, 10);
console.log(numericArray)


// 2. Arrays

numericArray = fillArray(0, 16);

const fizzBuzzArray = numericArray.map((number) => {
    if (number % 3 === 0 && number % 5 === 0) {
         return number = 'fizzBuzzArray';
    } else if (number % 3 === 0)  {
        return number = 'Fizz';

    } else if (number % 5 === 0) {
        return number = 'Buzz';
    } else {
        number = number.toString()
        return number
    }
  });
  
  console.log(fizzBuzzArray);


// 1. Objetos

function newPerson (nombre,edad,profesion,color,altura,hobbies) {

    const PERSONA = {
        nombre: nombre,
        edad: edad,
        profesion: profesion,
        color: color,
        altura: altura,
        hobbies: hobbies,
        saludo: function() {
            let hobbies_list = hobbies.join(', ');
            let last_hobby = hobbies.splice(-1,1);
                console.log(`Hola mi nombre es ${nombre}, tengo ${edad} años, mido ${altura}cm, estudié ${profesion} mi color favorito es el ${color} y mis hobbies son ${hobbies_list} y ${last_hobby}.`);
                },
      };
      return PERSONA.saludo();
};

const mokoto = newPerson('Motoko Kusanagi',31,'ciberseguridad','morado,', 168, ['bucear', 'filosofar', 'manejar']);