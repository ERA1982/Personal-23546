

/*
        //Muestra en consola
            console.log("Hola Mundo Javascript desde js");


        //cartel de ingreso con texto   
            prompt("Ingrese su nombre");
*/

/*
        //creacion de variables y la carga
            var nombre ="Tomas";
        //Muestra el contenido de la variable anterior
            alert(nombre);
        //Reingresa otro valor en la variable anterior
            var nombre ="Cris";
        //Lo mostramos nuevamente
            console.log(nombre);

        //creamos otra variable - mostramos cartel contexto para ingresar dato y
        //se lo asignamos a la variable
            var nombre2= prompt("Ingrese su nombre por favor:");
        //mostramos cartel con texto fijo y le concatenamos lo que ingrersamos antes
            alert("Bienvenid@ " + nombre2);
*/

/*
         //creeamos una constante y le asignamos valor   
            const edad= 27;
         //La mostramos   
            alert(edad);
*/

 /*           
        // creamos variable - parceamos a entero el valor ingresado en el PROMPT
            var edad = parseInt(prompt("ingrece su edad actual"));
        // mostramos texto fijo concatenado a la edad
            console.log("su edad actual es: "+ edad);
        //Sumamos a la edad 1 y lo asignamos a la misma variable    
            edad = edad + 1;
        // mostramos texto fijo concatenado el calculo de edad    
            console.log("su edad el año siguiente sera: "+ edad);
        // nuevamente Sumamos a la edad 1 y lo asignamos a la misma variable y mostramos el calculo     
            edad = edad + 1;
            console.log("su edad dentro de dos años sera: "+ edad);
*/


        //Condicional
        //IF - ELSE
        //Hacer que la web le pregunte la edad a un husuario.
        //Si es >= a 18, le mostramos un mensaje de bien venida. 
        //Sino le pediremos que ingrese cuando sea mayor de edad.

        //preguntamos la edad al usuario
/*
        var edad = prompt("Ingrese su edad por favor:");
        console.log (edad);

        if(edad >= 18){
            console.log("Bien Venido.....")

        }
        else{
            console.log("a tu casa niño!!!")
        }
*/
/*
        //switch
        //Pedimos al uduario una letra del abcdario.
        //y devolveremos el valor en el que se encuentra el mismo.

        var letra = prompt("Ingrese una letra")
        switch (letra)
        {
            case 'a':
                console.log("1");
                break;
            case 'b':
                console.log("2");
                break;
            case 'c':
                console.log("3");
                break;
            default:
                console.log("tiraste fruta")
                break;
        }
*/

/*
// chequeo de grupos :D
        var grupo =prompt("ingrese cuantaspersonas son en el grupo")
        if (grupo < 4) {
            console.log("Pedile al grupo 5 que seguro tiene de mas");
            
        }

        if (grupo >=4) {
            
            if (grupo <=5) {
                console.log("Tu grupo esta perfecto");
            }
            else{
                console.log("Tu grupo esta excedido")
            }
        }
*/

const est = 80;
const trai = 50;
const jun = 15;
const vTicket = 200;
var tipoE="llenar con estudiante"
var porcentaje= 0;
var ahorro= 0;
var costo= 0;



 do {
repetir = 0; 

        //seleccion de producto
        var tipo =parseInt (prompt ("Por favor, seleccione la categoria de ticket. Ingrese ☛1 Para estudiante ☛2 Para Trainee ☛3 Para Junior"));
        console.log (tipo);

        //armado de calculos y variables de texto para muestra
        switch (tipo) {
            case tipo=1:
                    tipoE = "estudiante";
                    porcentaje = est;
                    ahorro = (vTicket*porcentaje)/100;
                    costo = vTicket - (vTicket*porcentaje)/100;
            break;
        
            case tipo=2:
                    tipoE = "trainee";
                    porcentaje = trai;
                    ahorro = (vTicket*porcentaje)/100;
                    costo = vTicket - (vTicket*porcentaje)/100;
            break;

            case tipo=3:
                    tipoE = "junior";
                    porcentaje = jun;
                    ahorro = (vTicket*porcentaje)/100;
                    costo = vTicket - (vTicket*porcentaje)/100;
            break;


            default:
                    alert ("Ingrese algunas de las opciones que ofrecemos");
                    repetir = 1;
            break;   
        }
} while (repetir == 1);

console.log(tipoE + trai + vTicket + costo + ahorro)

//muestra de el producto con sus descuentos
alert("Seleccionaste "+tipoE+", con el descuento del "+porcentaje+
"% que te ofrecemos las entrasas que antes estaban $"+vTicket+
" Te quedan a solo: $"+ costo+" ahorrandote: $"+ahorro+"!!!!");


//seleccion de cantidad
var Cantidad =parseInt (prompt ("Por favor ingrese la cantidad de tickets que decea comprar:"));
console.log (Cantidad);

pagoTotal = costo * Cantidad;
ahorroTotal  = ahorro * Cantidad;


alert("Estas comprando "+Cantidad+" tickets categoria "+tipoE+". El valor a pagar va a ser de: "+pagoTotal+
"$. Te estas ahorrando $"+ahorroTotal+". ¿queres continuar?");