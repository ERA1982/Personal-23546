


document.addEventListener('DOMContentLoaded'Function clicenvio() {
       
        console.log ("PRUEBA DEL BOTON!!!");   

                //Ingresa el nombre y se guarda en constante

                const datoNombre= document.getElementById("imputNombre");
                console.log (datoNombre);

                //Ingresa el apellido y se guarda en constante
                const datoApellido= document.getElementById("imputApellido");
                console.log (datoApellido);

                //Ingresa el email y se guarda en constante
                const datoCorreo= document.getElementById("imputCorreo");
                console.log (datoCorreo);

                //Ingresa el cantidad de entradas y se guarda en constante
                const datoCantidadT= document.getElementById("cantidadTiket");
                console.log (datoCantidadT);

                //Ingresa el tipo de entradas y se guarda en constante
                const datoTipoT= document.getElementById("tipoTiket");
                console.log (datoTipoT);


}


/*
                //Ingresa el nombre y se guarda en constante

                const datoNombre= document.getElementById("imputNombre");
                console.log (datoNombre);

                //Ingresa el apellido y se guarda en constante
                const datoApellido= document.getElementById("imputApellido");
                console.log (datoApellido);

                //Ingresa el email y se guarda en constante
                const datoCorreo= document.getElementById("imputCorreo");
                console.log (datoCorreo);

                //Ingresa el cantidad de entradas y se guarda en constante
                const datoCantidadT= document.getElementById("cantidadTiket");
                console.log (datoCantidadT);

                //Ingresa el tipo de entradas y se guarda en constante
                const datoTipoT= document.getElementById("tipoTiket");
                console.log (datoTipoT);

*/


//console.log(document.getElementById("canthtml"));
        const est = 80;
        const trai = 50;
        const jun = 15;
        const vTicket = 200;
        var tipoE="llenar con estudiante"
        var porcentaje= 0;
        var ahorro= 0;
        var costo= 0;


/*
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

*/