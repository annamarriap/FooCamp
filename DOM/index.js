console.log('Hola')
//Decalar variables
const itemListClass = 'js-item-list'
const formId = 'js-form'
const inputSelector = '#js-input-name'

//Elementos del Dom se declaran con $ al principio
const $itemsListContainer = document.getElementsByClassName(itemListClass)[0]

const $form = document.getElementById(formId)
//Buscar el elemento desde su padre más cercano | Formulario
const $input = $form.querySelector(inputSelector)

//Variable que itera dentro de los items de mercado
let idItemIterator = 0

const createListElement = value => {
    console.log(value)
}

const handleSubmit = event => {
    // Elimina por defectos del evento
    event.preventDefault()
    console.log('lalala')
    if($input.value !== ''){
        createListElement($input.value)
        $input.value = ''
    }
}

const initListeners =  () => {
    $form.addEventListener('submit', handleSubmit)

}

// Función para inicializar
const main = () => {

}

//Ejecuta la función
main()
