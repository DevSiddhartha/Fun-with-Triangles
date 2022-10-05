const inputs = document.querySelectorAll(".inputs-area");
const areaBtn = document.querySelector("#area-btn");
const outputElement = document.querySelector("#output");

function calculateArea()
{
    if (inputs[0].value === '' || inputs[1].value === '')
    {
        outputElement.innerText = "Please fill out all the fields!";
        return;
    }
    if (inputs[0].value < 0 || inputs[1].value < 0)
    {
        outputElement.innerText = "Please fill out non negative values for every field";
        return;
    }
    if (inputs[0].value === '0' || inputs[1].value === '0')
    {
        outputElement.innerText = "Please fill out non zero values for every field!";
        return;
    }

    const area = (Number(inputs[0].value) * Number(inputs[1].value)) / 2;
    outputElement.innerText = "The area of the triangle is " + area + " cm²"
}

areaBtn.addEventListener("click", calculateArea);