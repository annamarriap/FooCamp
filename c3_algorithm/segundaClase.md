| numero | aticuloPrincipal | articuloSustituto |
| ----------- | ----------- | ----------- |
| ~~0~~ | 🍖 | 🍗 |
| ~~1~~ | 🍎 | 
| ~~2~~ | 🍓 | 🍒 |
| ~~3~~ | 🍉 | 🍈 |

1. Entrar a la tienda
2. Nos paramos en el mostrador
3. Esperamos a que nos atiendan
4. vamos a pedir articuloPrincipal
5. mientras no hayamos preguntado todos los articulos de la lista
   
``` javascript
let articulosPrincipales = [ "🍖", "🍎", "🍓", "🍉" ];
let articulosSustituos = [ "🍗", "", "🍒", "🍈" ];
let articuloActual = 0;
let articulosTotales = articulosPrincipales.length
while( articuloActual < articulosTotales ){
  if ( donPedritoTiene === articulosPrincipales[articuloActual] ){
    console.log('compramos articuloPrincipal');
  } else if ( donPedritoTiene === articulosSustitutos[articuloActual] ){
    console.log('compramos articuloSustituto');
  }else{
    console.log('no compramos nada')
  }
  articuloActual += 1;
}

```
1. volver a **5.**
2.  pagamos
3.  tomar nuestros articulos
4.  nos vamos de la tienda.

ciclos o bucles
``` javascript
while( condicion ){
  //se va a ejecutar esta accion
}
```

Vida real
``` javascript
let numero = 0;

while( numero < 10 ){
  //se va a ejecutar esta accion
  console.log(numero);
  numero = numero + 1
}
```