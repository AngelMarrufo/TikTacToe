var turno= false;
var contador = 0;

function activo(boton){
    boton.disabled= true;


        if (!turno) {
            boton.value= "X";
            document.getElementById("turno").innerHTML = "Turno O";
        } else {
            boton.value= "O";
            document.getElementById("turno").innerHTML = "Turno X";
        }
    turno = !turno;
    verificar(); 

}

function verificar(){
    var botones = document.querySelectorAll("input[type='button']");
    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        bloquear();
        const style = document.createElement('style');
        style.textContent =`
        tr:nth-child(1)::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 20px;
        background-color: black;
        z-index: 1;
        pointer-events: none;
        }`;
        document.head.appendChild(style);
    }else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[3].value}`;
        bloquear();
        const style = document.createElement('style');
        style.textContent =`
        tr:nth-child(2)::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 20px;
        background-color: black;
        z-index: 1;
        pointer-events: none;
        }`;
        document.head.appendChild(style);
    }else if(botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[6].value}`;
        bloquear();
        const style = document.createElement('style');
        style.textContent =`
        tr:nth-child(3)::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        right: 0;
        height: 20px;
        background-color: black;
        z-index: 1;
        pointer-events: none;
        }`;
        document.head.appendChild(style);
    }else if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        bloquear();
        const style = document.createElement('style');
        style.textContent =`
        td:nth-child(1)::after{
            content: "";
            position: absolute;
            top: -20px;
            bottom: -20px;
            left: 50%;/*coloca la linea centrada hotizontalmente*/
            width: 20px;/*ancho o grueso de la linea dibujada*/
            background-color: black;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(style);


    }else if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[1].value}`;
        bloquear();
        const style = document.createElement('style');
        style.textContent =`
        td:nth-child(2)::after{
            content: "";
            position: absolute;
            top: -20px;
            bottom: -20px;
            left: 50%;/*coloca la linea centrada hotizontalmente*/
            width: 20px;/*ancho o grueso de la linea dibujada*/
            background-color: black;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(style);
    }else if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;
        bloquear();
        const style = document.createElement('style');
        style.textContent =`
        td:nth-child(3)::after{
            content: "";
            position: absolute;
            top: -20px;
            bottom: -20px;
            left: 50%;/*coloca la linea centrada hotizontalmente*/
            width: 20px;/*ancho o grueso de la linea dibujada*/
            background-color: black;
            z-index: 1;
            pointer-events: none;
        }`;
        document.head.appendChild(style);
    }else if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        bloquear();
        const style = document.createElement('style');
        style.textContent =`
        table::after{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: calc(100% * 1.414);
        height: calc(100% * 1.414);
        border-top: 20px solid black;
        transform: rotate(45deg);
        transform-origin: top left;
        z-index: 1;
        pointer-events: none;

        }`;
        document.head.appendChild(style);
        
    }else if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value !=""){
        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;
        bloquear();
        const style = document.createElement('style');
        style.textContent =`
        table::before{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        width: calc(100% * 1.414);
        height: calc(100% * 1.414);
        border-top: 20px solid black;
        transform: rotate(-45deg);
        transform-origin: top right;
        z-index: 1;
        pointer-events: none;
        }`;
        document.head.appendChild(style);
    }
    contador ++;
    if (contador == 9) {
        document.getElementById("turno").innerHTML = "EMPATE!";
    }
}

function bloquear() {
    var botones = document.querySelectorAll("input[type='button']");
    for (let i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
        
    }
}

function reiniciar() {
    window.location.reload()
    
}