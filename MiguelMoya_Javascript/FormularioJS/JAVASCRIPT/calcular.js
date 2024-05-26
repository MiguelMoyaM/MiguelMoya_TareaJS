function calcularNota(){
    let nombreAlumno = document.getElementById("nombre").value;

    let notaEj = document.getElementById("notaEj").value*0.20;
    let notaTeorico=document.getElementById("notaTeorico").value*0.20;
    let notaPractico=document.getElementById("notaPractico").value*0.30;
    let notaProyecto=document.getElementById("notaProyecto").value*0.30;

    let notaFinal = notaEj+notaTeorico+notaPractico+notaProyecto;

    if(notaFinal>=5){
        document.getElementById("resultadoMensaje").textContent="Has aprobado "+ nombreAlumno+", con una nota final de "+notaFinal
        document.getElementById("resultado").style.backgroundColor="lightgreen";
    }else{
        document.getElementById("resultadoMensaje").textContent="Has suspendido "+ nombreAlumno+", con una nota final de "+notaFinal
        document.getElementById("resultado").style.backgroundColor="lightcoral";
    }
    document.getElementById("resultado").style.display="block";
}

function borrar(){
    document.getElementById("resultado").style.display="none";
    document.getElementById("nombre").value=null;
    document.getElementById("notaEj").value=0;
    document.getElementById("notaTeorico").value=0;
    document.getElementById("notaPractico").value=0;
    document.getElementById("notaProyecto").value=0;

}