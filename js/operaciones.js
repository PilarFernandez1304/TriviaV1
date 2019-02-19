// pantalla de Bienvenida 
// ingresa Datos
const btn_star=document.getElementById('btn_star');
const btn= document.getElementById('btn');
const Cambiar=document.getElementById('Cambiar');
const Cambiar2=document.getElementById('Cambiar2');
const saludo=document.getElementById('saludo');
const part1= document.getElementById('part1');
const part2 = document.getElementById('part2');
const part3 = document.getElementById('part3');
const part4 = document.getElementById('part4');
const part5 = document.getElementById('part5');
const btn_respA=document.getElementById('btn-respA');
const btn_respB=document.getElementById('btn-respB');
const correctas= document.getElementById('correctas');
const incorrectas= document.getElementById('incorrectas');
const btn_exit=document.getElementById('btn-salir');
const btn_return=document.getElementById('btn-return');

    part1.style.display='none';
    part2.style.display='none';
    part3.style.display='none';
    part4.style.display='none';
    part5.style.display='none';

btn_star.addEventListener('click',comenzar);

function comenzar(){

    saludo.style.display='none';    
    part1.style.display='block';
    part2.style.display='none';
    part3.style.display='none';
    part4.style.display='none';
    part5.style.display='none';

}
next.style.display='none'; 
btn.addEventListener('click', capturar);


function capturar (){ 
          
    const Name = document.getElementById('Name').value;
        cont_reg.style.display='none';
          next.style.display='block';

    const Cambiar2=document.getElementById('Cambiar2').innerHTML='Hola '+Name + ' pulsa siguiente';
   
    next.style.display='block';
}
next.addEventListener('click', cambia);

        function cambia(){
            
            part1.style.display='none';
            part2.style.display='block';
            part3.style.display='none';
            part4.style.display='none';
            part5.style.display='none';
        
        }   
const a=document.getElementById('A');
const b=document.getElementById('B');


a.addEventListener('click',elegir);
function elegir(){

    part2.style.display='none'; 
    part3.style.display='block';
    part5.style.display='none';
    
}

b.addEventListener('click', elegirB);

function elegirB(){
    part2.style.display='none';    
    part4.style.display='block';
    part5.style.display='none';
    
}


function contResp(){
let cont=0;
for (let i = 0; i<4; i++) {
        const opciones = document.getElementsByName('pregunta_'+i);
        for (let j = 0; j < opciones.length; j++) {
            let opcion = opciones[j];
            if (opcion.value=='correcto' && opcion.checked) {
                cont++;            
            }

            
        }
    }

    return cont;
}

btn_respA.addEventListener('click', ResultadosA);
 
function ResultadosA(){
     part3.style.display='none';
     part5.style.display='block';
     const contcorrectas = contResp();
     const contincorrectas = 3-contcorrectas;
     const correctas=document.getElementById('correctas').innerHTML= contcorrectas + ' respuestas correctas';
     const incorrectas=document.getElementById('incorrectas').innerHTML= contincorrectas + ' respuestas incorrectas'; 


 }
btn_respB.addEventListener('click', ResultadosB);
 
function ResultadosB(){

    part4.style.display='none'; 
     part5.style.display='block';
     const contcorrectas = contResp();
     const contincorrectas = 3-contcorrectas;
     const correctas=document.getElementById('correctas').innerHTML= contcorrectas + ' respuestas correctas';
     const incorrectas=document.getElementById('incorrectas').innerHTML= contincorrectas + ' respuestas incorrectas'; 
 }

 btn_exit.addEventListener('click', exit);

 function exit(){

     window.location="http://google.com"
 }
 btn_return.addEventListener('click',regresar)
 
 function regresar(){
     part5.style.display='none';
     part2.style.display='block';

 }







