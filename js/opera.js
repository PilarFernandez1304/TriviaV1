const ProcesarForm = function(){

    const Formulario= get.getElementByName('Formulario')[0];
    const elemen = Formulario.elements,
    const boton = document.getElementById('btn');
    
    const rsp;
    // validar cada una de las respuestas
    const valQues1= function(e){
        // mediante la condicion accedemos al id de cada una del formulario
        if (Formulario.resp1[0].checked == true) {
            rsp++;
                e.preventDefault();

            
    
            
    };
    // valida la una de las preguntas
    const validar = function(e){
        valQues1(e);

    };


    // ejecuta un evento en el boton para validar el formulario
    Formulario.addEventListener('submit',validar);

}