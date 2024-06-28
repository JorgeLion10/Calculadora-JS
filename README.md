

## Funciones Principales

### `agregarALaPantalla(value)`

Esta función se encarga de agregar el valor proporcionado a la pantalla de la calculadora. Recibe un parámetro `value` que representa el valor que se debe agregar. Utiliza `document.getElementById('pantalla')` para obtener el elemento de la pantalla por su identificador y luego actualiza el valor del campo `value` concatenando el nuevo valor.

    function agregarALaPantalla(value) {
        document.getElementById('pantalla').value += value;
    }

### `calcular()`

La función `calcular()` se ejecuta cuando se presiona el botón de igual (=) en la calculadora. Primero, obtiene el valor actual de la pantalla utilizando `document.getElementById('pantalla').value`. Luego, utiliza la función `eval()` para evaluar la expresión matemática representada por el valor de la pantalla. El resultado se almacena en la variable `result`. Finalmente, se actualiza el valor de la pantalla con el resultado calculado.

    function calcular(){
    const pantalla = document.getElementById('pantalla');
    if (pantalla.value === '') {
        pantalla.value = '0';  
    } else {
        try {
            pantalla.value = eval(pantalla.value);
        } catch (e) {
            pantalla.value = '0';
        }
    }
       
   
   }

Es importante tener en cuenta que el uso de `eval()` puede presentar riesgos de seguridad si se permite que los usuarios ingresen código arbitrario. En este caso, asumimos que el código solo se ejecutará en un entorno seguro.

### `limpiarPantalla()`

La función `limpiarPantalla()` se utiliza para borrar el contenido de la pantalla de la calculadora. Simplemente asigna una cadena vacía al campo `value` del elemento de la pantalla.

    function limpiarPantalla() {
        document.getElementById('pantalla').value = '';
    }



### `borrarUltimoValor() `

La funcion `borrarUltimoValor() ` se usa para borrar el ultimo valor de la pantalla de la calculadora.

     function borrarUltimoValor() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
   }
