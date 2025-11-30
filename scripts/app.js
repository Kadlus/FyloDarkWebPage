import { nums } from "./data.js";

console.log(nums);



let btnEmail = document.getElementById("btn-access");
let inputEmail = document.getElementById("access-mail");

function getEmail () {
    let loadEmail = document.getElementById("access-mail").value;
    inputEmail.classList.toggle("disabled");

    //uložení objektu do proměnné

    let formData = {
        id: 1, //najděte funkci, která vygeneruje náhodné kladné číslo
        mail: inputEmail,
        isLocked: false,
        length: loadEmail.length
    }
    //rest operátor - vložení atributu do objektu, spojení objektů
    let loadData = {...formData, linkProfile: "insert URL here"};
    console.log("new var:" + loadData.linkProfile);
    console.log(loadData);

    if (inputEmail.length === 0) {
        console.log("Empty mail");
    }
}

//načtení vstupu mail
//vložení již definované funkce v souboru
btnEmail.addEventListener('click', getEmail);
inputEmail.addEventListener('mouseover', (e) => {
    let loadInput = e.target;
    loadInput.style.background = "red";
    console.log(loadInput);
})

//anonymní funkce
document.addEventListener('click', (e)=> {
    let targetElement = e.target;
    targetElement.style.color = 'black';
    console.log(targetElement);
})

//vytvořte jinou událost na libovolném elementu webu

