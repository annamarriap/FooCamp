# FooCamp

## Comprar un pan rollito

1. Entrar a la tienda
2. Nos paramos en el mostrador
3. Esperamos a que nos atiendan
4. vamos a pedir articuloPrincipal

``` javascript
if ( si hay articuloPrincipal ){
  console.log('compramos articuloPrincipal');
} else if ( si hay articuloSustituto ){
  console.log('compramos articuloSustituto');
}else{
  console.log('no compramos nada')
}

```
6.  nos vamos
7.  pagar
8.  tomar nuestros articulos
9.  nos vamos de la tienda.

* Serie de pasos secuenciales.
* se repite mucho la palabra si.
* podemos reemplazar los articulos.

si --> **if**
de lo contrario --> **else**
mas si --> **else if**

``` javascript
let variable = 0;
let variable2 = "hola";
const variable3 = "hola";

if ( condicion ){
  //si se cumple la condicion se ejecuta esta accion
}

if ( condicion ){
  //si se cumple la condicion se ejecuta esta accion
} else {
  // se ejecuta esta otra accion
}

if ( condicion ){
  //si se cumple la condicion se ejecuta esta accion
} else if ( segunda condicion) {
  // se ejecuta esta otra accion
} else {
  // se ejecuta esta otra accion por defecto
}

operador o
if ( condicion1 || condicion2 ){
  //si se cumple la condicion se ejecuta esta accion
}

operador and
if ( condicion1 && condicion2 ){
  //si se cumple la condicion se ejecuta esta accion
}
```

caso de la vida real
``` javascript
let resultado = 1;
if ( 2/2 === resultado ){
  console.log('se cumple');
} else {
  console.log('no se cumple');
}
```

caso del articuloPrincipal
``` javascript
if ( si hay articuloPrincipal ){
  console.log('compramos articuloPrincipal');
} else if ( si hay articuloSustituto ){
  console.log('compramos articuloSustituto');
}else{
  console.log('no compramos nada')
}
```
