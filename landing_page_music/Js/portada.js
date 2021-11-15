function formulario(){
    var inputCampo = document.getElementById("campo"); 
    // pasamos el valor introducido en el campo a una variable
    var alertaInputCampo = document.getElementById("alertaNombre");

    if (inputCampo.value.length==0){
   
    // Si el campo está vacío
    
    alertaInputCampo.style.display = "block";
   
        console.log(1);
    }else {
        
        alertaInputCampo.style.display = "none";
   
        console.log(2);
    }

}