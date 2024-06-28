
// Esta funcion agrega los valores a la pantalla
function agregar(valor){
    document.getElementById('pantalla').value += valor

}

// Esta funcion borra los valores que hay en la pantalla
function borrar(){
    document.getElementById('pantalla').value = ''
}

// Esta funcion borra el ultimo valor de la pantalla
function borrarUltimoValor() {
    const pantalla = document.getElementById('pantalla');
    pantalla.value = pantalla.value.slice(0, -1);
}


// Esta funcion usa los valores de la pantalla y los calcula 
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