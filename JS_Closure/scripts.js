function toggle(posibilidades) {
    let alternador = 0;
    return function () {
        let posibilidad = posibilidades[alternador];
        let posibilidadesLongitud = posibilidades.length;
        alternador++
        if (alternador == posibilidadesLongitud) {
            alternador = 0;
        }
        return posibilidad;
    }
}

const hello = toggle(['hello']);
const onOff = toggle(['on', 'off']);
const speed = toggle(['slow', 'medium', 'fast']);

console.log(hello()); // "hello"
console.log(hello()); // "hello"

console.log(onOff()); // "on"
console.log(onOff()); // "off"
console.log(onOff()); // "on"
console.log(onOff()); // "off"

console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"
console.log(speed()); // "slow"
console.log(speed()); // "medium"
console.log(speed()); // "fast"