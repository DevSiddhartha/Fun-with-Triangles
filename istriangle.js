const inputs = document.querySelectorAll(".angle-input");
console.log(inputs[0]);
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const outputElement = document.querySelector("#output");

function calculateSumOfAngles()
{
    var sumOfAngles = parseInt(inputs[0].value) + parseInt(inputs[1].value) + parseInt(inputs[2].value);
    console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle()
{
    if (inputs[0].value === '' || inputs[1].value === '' || inputs[2].value === '')
    {
        outputElement.innerText = "Please fill out all the fields!";
        return;
    }
    if (inputs[0].value < 0 || inputs[1].value < 0 || inputs[2].value < 0)
    {
        outputElement.innerText = "Please fill out non negative values for every field";
        return;
    }
    if (inputs[0].value === '0' || inputs[1].value === '0' || inputs[2].value === '0')
    {
        outputElement.innerText = "Please fill out non zero values for every field!";
        return;
    }
    var sumOfAngles = calculateSumOfAngles();
    if (sumOfAngles === 180)
    {
        outputElement.innerText = "Angles form a triangle"
    } else
    {
        outputElement.innerText = "Angles don't form a triangle";
    }

}

isTriangleBtn.addEventListener("click", isTriangle);