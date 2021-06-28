
   
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
        swal("La suma de tus horas de conexión más hrs de apoyo no puede ser menos de...."+ "  " + Math.trunc(resultado1) +" Horas ")
    
        .then((value) => {
        swal("La suma de tus hrs de conexión más hrs de apoyo es..."+ resultado2 +" Horas ")
        .then((value) => {
        swal(" Tus horas de apoyo no pueden ser más de....  "+ resultado3 +" Horas")
    
    
});
});
});

}
