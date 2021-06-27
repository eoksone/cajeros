
   
    var suma = function(numero1, numero2) {
        var numero1 = parseFloat(document.getElementById("numero1").value);
        var numero2 = parseFloat(document.getElementById("numero2").value);
        var numero3 = parseFloat(document.getElementById("numero3").value);

        var resultado = numero2 + numero3;
        var resultado1 = numero1 * 0.8;
        var resultado2 = numero1;
        var resultado3 = numero1 * 0.5;


   

    
        swal("La suma de tus horas es de.. " + resultado +" Horas ")
        .then((value) => {
        swal("Tus horas no pueden ser menor a..  "+ "  " + Math.trunc(resultado1) +" Horas ")
    
        .then((value) => {
        swal(" No puedes superar las... "+ resultado2 +" Horas ")
        .then((value) => {
        swal(" Tus horas de apoyo no pueden ser más de....  :"+ resultado2 +" Horas")
    
    
});
});
});

}
