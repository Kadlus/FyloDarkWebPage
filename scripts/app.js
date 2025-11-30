import { nums } from "./data.js";

console.log(nums);



let btnEmail = document.getElementById("btn-access");

function getEmail () {
    let inputEmail = document.getElementById("access-mail").value;
    btnEmail.classList.toggle("disabled");

    //save to object variable

    let formData = {
        id: 1, //generate random number
        mail: inputEmail,
        isLocked: false
    }

    let loadData = {...formData, linkProfile: "insert URL here"};
    console.log("new var:" + loadData.linkProfile);
    console.log(loadData);

    if (inputEmail.length === 0) {
        console.log("Empty mail");
    }
}

btnEmail.addEventListener('click', getEmail);

document.addEventListener('click', (e)=> {
    let targetElement = e.target;
    targetElement.style.color = 'black';
    console.log(targetElement);
})