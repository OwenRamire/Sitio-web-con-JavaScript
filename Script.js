 
if (confirm("Presiona aceptar si sabes programar"))
{
    var tam = prompt("Indica el tamaño de tu array","");
    var vector =[tam];
    for (i=0;i<tam;i++)
    {
        vector.push(prompt("Dame tus colores",""));
    }
    
    alert("Tus colores son "+ vector.sort());
}
 else
 {
    var nombre = prompt("Dame tu nombre:" , "");
    alert("Bienvenido " + nombre + " a la programacion");
 }