//1. Crear constantes de la pantalla y todos los botones- seleccionar clase screen y todos los elementos de la clase button con nombre buttons
const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll(".btn");

//cuando apretamos botones pasan cosas si los llamamos con adeventlistener
//con los botones se nos hace un array
//con el primer button declaramos el button y luego de la flecha lo usamos
buttons.forEach(btn => {
    //que haga cierta funcion cuando hagamos click en button
    btn.addEventListener("click", () => { // click() es un metodo de javaScript que admite elementos como<input o <button
        const btnPress = btn.textContent;

        if (btn.id === "c") {
            screen.textContent = "0";
            return; //detiene la funcion y no ejecuta lo que sigue 
        }

        if (btn.id == "delete") {
            if (screen.textContent.length === 1 || screen.textContent === "Error!") {
                screen.textContent = "0";
            } else {
                screen.textContent = screen.textContent.slice(0, -1);//slice corta los numeros desde atras
            }
            return;
        }

        if (btn.id === "equal") {
            try {
                screen.textContent = eval(screen.textContent);//eval lee las operaciones matematicas en un string 
            } catch {
                screen.textContent = "Error!";
            }
             return;
        }

        if (screen.textContent === "0" || screen.textContent === "Error!"){
            screen.textContent = btnPress; //si la pantalla esta en 0 lo reemplaza el numero por 0
        }
        else{
            screen.textContent += btnPress; //si no hay 0 entonces agrega al lado el contenido
        }
    });
});

//que haga cierta funcion cuando APRETEMOS EL TECLADO 
document.addEventListener("keydown", function (event){

    //c
    if (event.code == "Escape") {
        screen.textContent = "0";
        return;
    }

   //delete
    if (event.code == "Backspace") {
        if (screen.textContent.length === 1 || screen.textContent === "Error!") {
            screen.textContent = "0";
        } else {
            screen.textContent = screen.textContent.slice(0, -1);
        }
        return;
    }

    //sum, subtraction, multip. y division
    if (event.key == "+"){
        if (screen.textContent === "0" || screen.textContent === "Error!"){
            screen.textContent = btnPress; 
        }
        else{
            screen.textContent += "+"; 
        }
        return;
    }

    if (event.code == "Slash"){
        if (screen.textContent === "0" || screen.textContent === "Error!"){
            screen.textContent = btnPress; 
        }
        else{
            screen.textContent += "-"; 
        }
        return;
    }

    if (event.key == "*"){
        if (screen.textContent === "0" || screen.textContent === "Error!"){
            screen.textContent = btnPress; 
        }
        else{
            screen.textContent += "*"; 
        }
        return;
    }

    if (event.key == "/"){
        if (screen.textContent === "0" || screen.textContent === "Error!"){
            screen.textContent = btnPress; 
        }
        else{
            screen.textContent += "/"; 
        }
        return;
    }

    //result Enter or =
    if (event.key == "Enter" || event.key == "=") {
        try {
            screen.textContent = eval(screen.textContent);
        } catch {
            screen.textContent = "Error!";
        }
         return;
    } 

    //numbers and signs
    function numbers () {
        if (event.key == "1"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "1"; 
            }
            else{
                screen.textContent += "1"; 
            }
            return;
        }

        if (event.key == "2"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "2"; 
            }
            else{
                screen.textContent += "2"; 
            }
            return;
        }
        if (event.key == "3"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "3"; 
            }
            else{
                screen.textContent += "3"; 
            }
            return;
        }
        if (event.key == "4"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "4"; 
            }
            else{
                screen.textContent += "4"; 
            }
            return;
        }
        if (event.key == "5"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "5"; 
            }
            else{
                screen.textContent += "5"; 
            }
            return;
        }
        if (event.key == "6"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "6"; 
            }
            else{
                screen.textContent += "6"; 
            }
            return;
        }
        if (event.key == "7"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "7"; 
            }
            else{
                screen.textContent += "7"; 
            }
            return;
        }
        if (event.key == "8"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "8"; 
            }
            else{
                screen.textContent += "8"; 
            }
            return;
        }
        if (event.key == "9"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "9"; 
            }
            else{
                screen.textContent += "9"; 
            }
            return;
        }
        if (event.key == "0"){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "0"; 
            }
            else{
                screen.textContent += "0"; 
            }
            return;
        }
        if (event.key == "."){
            if (screen.textContent === "0" || screen.textContent === "Error!"){
                screen.textContent = "."; 
            }
            else{
                screen.textContent += "."; 
            }
            return;
        }
    }

    numbers();

    //commit test
})
