
const itemsListClass = "js-items-list";
const formId = "js-form";
const inputSelector = "#js-input-name";
const saveButton = "js-input-save";

const $itemsListContainer = document.getElementsByClassName(itemsListClass)[0];
const $form = document.getElementById(formId);
const $input = $form.querySelector(inputSelector);

let idItemsIterator = 0; //Este iterador será usado para identificar cada uno de los checkbox y sus label

// Valida si input check cambia, recibe por parametro el $item que queremos manipular
const handleCheck = ($item) => {
  const $input = $item.getElementsByTagName("input")[0]; //Identificamos el input dentro del item, accedemos a la posición 0 porque getElementsByTagName nos devuelve un array de un solo elemente en este caso
  const inputValue = $input.checked; //La propiedad "checked" nos dice si el input está chequeado o no (boolean)

  if (inputValue) {
    $itemsListContainer.prepend($item); //Si el input se chequeó, quiero que se añada antes que todos los elementos hijos de $itemsListContainer
  } else {
    $itemsListContainer.append($item); //Si el input se des-chequeó, quiero que se añada al final que todos los elementos hijos de $itemsListContainer
  }
};

// Declara vaiable que guarda lista
const $saveButton = document.getElementById(saveButton);


// Eliminar item, recibe por parametro el elemento que queremos manipular
const handleRemoveButton = ($item) => {
  $item.remove(); //el método remove() elimina el elemento del DOM
};

// Elementos que vamos a añadir al DOM, el parametro "value" será el texto que tendrá el label
const createListElement = (value) => {
  console.log('pochisss');
  const $newListElement = document.createElement("li"); //esto nos crea un elemento <li><li/>
  const $checkButton = document.createElement("input"); //esto nos crea un elemento <input />
  const $checkLabel = document.createElement("label"); //esto nos crea un elemento <label><label/>

  const checkButtonId = `list-item-${idItemsIterator}`; //Identifica cada check input y si label

  $checkButton.id = checkButtonId; //Sobrescribimos la propiedad id de $checkButton
  $checkButton.name = checkButtonId; //Sobrescribimos la propiedad name de $checkButton
  $checkButton.type = "checkbox"; //Sobrescribimos la propiedad type de $checkButton

  $checkLabel.htmlFor = checkButtonId; //Sobrescribimos la propiedad for de $checkLabel
  $checkLabel.innerText = value + " "; //Sobrescribimos el texto interno de $checkLabel

  $newListElement.appendChild($checkButton); //Añadimos el <input /> al elemento <li>
  $newListElement.appendChild($checkLabel); //Añadimoa el <label> al elemento <li>

  $itemsListContainer.appendChild($newListElement); //Añadimos el elemento <li> con todos sus hijos al listado <ul>

  idItemsIterator++; //Aumentamos 1 unidad el iterador para que el próximo elemento que se va a crear tenga otro id

  $checkButton.addEventListener("change", () => handleCheck($newListElement)); //escuchamos si $checkButton cambia de valor, y le enviamos a la función handleCheck el elemento que queremos manipular

  const $deleteButton = document.createElement("button"); //Creamos un elemento <button></button>
  $deleteButton.innerText = "x"; //Al elemento button le agregamos el texto intero "x"
  $newListElement.appendChild($deleteButton); //Agegamos ese botón al elemento <li>

  $deleteButton.addEventListener("click", () =>{
    handleRemoveButton($newListElement);
  });

  //Habilita Botón guardar
  $saveButton.disabled = false;
};

// Controla agregador items a listado, el parámetro "e" recibido es el evento que dispara el eventListener
const handleSubmit = (e) => {
  e.preventDefault(); //Acá evitamos que el formulario refresque la página, ya que ese es su comportamiento por defecto

  if ($input.value !== "") {
    //Con la propiedad value, podemos saber cual es el valor actual escrito en el input. en nuestro caso, si el input es igual a string vacio, no queremos que haga nada, pero si es diferente a string vacio...
    createListElement($input.value); //invocamos la función encargada de crear cada uno de los elementos y le pasamos el valor actual del input
    $input.value = ""; //Reiniciamos el valor del input para que el usuario no tenga que borrar lo que escribio cada vez que agregó un nuevo elemento

  }

};

// Inicializa los eventos que necesitamos escuchar desde el principio
const initListeners = () => {
  $form.addEventListener("submit", handleSubmit); //Este evento escucha cuando demos enter estando parados en el input o cuando le demos click al boton "Agregar +" y llama la función handleSubmit
};

// Guarda items en localstorage
const saveList = () => {

  //Create an array to store the li values
  let listStorage = [];
  let listValues = document.querySelectorAll('li');
  //Cycle through the li array
  listValues.forEach((item) => {
    listStorage.push(item.innerHTML);
  });

  // set items on localstorage
  localStorage.setItem('itemsList', JSON.stringify(listStorage));

};

// Al cargar, obtiene los items almacenados en localstorage
window.onload = loadList;
function loadList() {

  // Obtiene los items de la lista del localStorage y los convierte en un array
  const storedList = Array.from(JSON.parse(localStorage.getItem('itemsList')));

  // Active save button if items in memory
  if (storedList.length > 0) {
    $saveButton.disabled = false;
  }

  // Loop through the list and add them to the li element
  const $list = document.querySelector("ul");
  Object.values(storedList).forEach(val => {
        const $li = document.createElement("li");
        $li.innerHTML = val;
        $list.append($li);
  });

  // Eliminar items de las lista del localstorage
  const $deleteButton = $itemsListContainer.querySelectorAll('button');

  $deleteButton.forEach((item) => {
    item.addEventListener("click", () =>{
      item.parentElement.remove();
    });
  });

  // Modifica orden de los items
  const $checkButton = $itemsListContainer.querySelectorAll('input'); 

  $checkButton.forEach((item) => {
    item.addEventListener("change", () => handleCheck(item.parentElement));
  });

}

//Función principal
const main = () => {
  initListeners();

  // document.addEventListener('click', e => {
  //   const el = e.target;
  //   if (el.classList.contains('delete')){ 
  //     deleteFromList(el.getAttribute('key'));
  //   }
  // });

};
main();
