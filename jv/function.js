function opbasicas(){
    var n1;
    var n2;
    var suma;
    var resta;
    var multiplicacion;
    var division;
    n1= parseInt(prompt("ingrese numero 1"));
    n2= parseInt(prompt("ingrese numero 2"));
    suma=n1+n2;
    resta=n1-n2;
    multiplicacion=n1*n2;
    division=n1/n2;
  alert ("resultado suma es :"+ suma);
  alert ("resultado resta es :"+ resta);
  alert ("resultado multiplicacion es :"+ multiplicacion);
  alert ("resultado division es :"+ division); 
  }

function cuadrado(){
    var A = 0;
    var C = 0;
   
   A = parseInt(prompt("ingrese numero a validar"));
   
   C = A * A;
   
   alert ("el cuadrado del numero ingresado es:" + C);
   

}

function triangulo(){
    var A = 0;
var B = 0;
var C;

A = parseInt(prompt("ingrese numero base"));
B = parseInt(prompt("ingrese numero altura"));

C = A * B / 2;

alert("el area del triangulo es:" + C);
}

function unidades(){
    var A = 0;
var B = 0;

A = parseInt(prompt("ingrese numero en pulgadas"));

C = A * 2,54;
E = A * 10-5;

alert("los centimetros son:" + C);
alert("los kilometros son:" + E);

}
 

 function militar(){
    alert("algoritmo para saber si soy apto para prestar servico militar");
    var EDAD = parseInt(prompt("ingrese su edad"));
    var GENERO = parseInt(prompt("ingrese su genero femenino o masculino"));

    if (GENERO == "femenino") {
    alert("no eres apto para el servicio militar");
    }else{
       if (EDAD>17 && EDAD>25) {
        alert("eres apto para prestar servicio militar"); 
       }else{
        alert("no eres apto por a edad");
       }
    }
 }

 function edad(){
    var E = 0
    var A = 2022
    

    E = parseInt(prompt("ingrese su edad"));
     
    C = E - A;

    alert("el año en que nacio es: " + C);
    

 }

 function promedio(){
    var A = 0
    var B = 0
    var C = 0
    var D = 0
    var E = 0
    var F = 0
    var G = 0
A = parseInt(prompt("ingrese calificacion 1:"));
B = parseInt(prompt("ingrese calificacion 2:"));
C = parseInt(prompt("ingrese calificacion 3:"));
D = parseInt(prompt("ingrese calificacion 4:"));
F = parseInt(prompt("ingrese calificacion 5:"));
G = parseInt(prompt("ingrese calificacion 6:"));

H = A + B + C + D + E + F + G /7
alert("su promedio es:" + H);

if (PROMEDIO>3 && PROMEDIO<3) {
    alert("APROBO"); 
   }else{
    alert("REPROBO");
   }
 

 }
 
 function inversion(){
    var A = 0
    var B = 0
      
    A = parseInt(prompt("ingrese cantidad que desea invertir:"));
    B = parseInt(prompt("ingrese años que desea su inversion:"));


 }


