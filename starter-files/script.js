//Input de la pregunta
const input = document.getElementById("input");
//Output de la respuesta
const answer = document.getElementById("answer");

//Botón 
const boton = document.getElementById("button");
boton.addEventListener("click", function (element) {
    //Pa' reset funciones que pudieran venir por defecto
    element.preventDefault();
    //validamos que la pregunta sea mayor a 5 caracteres sin espacios al principio o al final
    if (input.value.trim().length > 5) {
        //reset de respuesta para no acumularse
        answer.innerHTML = "";
        getData();
        //para borrar en 5 segundos
        setTimeout(() => {
            answer.innerHTML = "";
            input.value = "";
        }, 5000);

    } else {
        //para indicar que no cumple con la validación de 5 caracteres
        answer.innerHTML = "Khe?";
    }
})

function getData() {
    let promesa = fetch("https://yesno.wtf/api", {method: "GET"});

    promesa
        .then((response) => {
            response.json()
                .then((data) => {
                    //inserta la respuesta consumida de la API
                    answer.insertAdjacentHTML("afterbegin", `${respuesta.answer}`);
                })
                .catch((error) => {
                    console.error(error, "Ups! error en JSON");
                })
        })
        .catch((error) => {
            console.error(error, "Ups! error");
        });
};//getData




