const inputs = document.querySelectorAll(".inputs-area");
const areaBtn = document.querySelector("#area-btn");
const outputElement = document.querySelector("#output");

function calculateArea()
{
    const area = (Number(inputs[0].value) * Number(inputs[1].value)) / 2;
    outputElement.innerText = "The area of the triangle is " + area + " cm²"
}

areaBtn.addEventListener("click", calculateArea);