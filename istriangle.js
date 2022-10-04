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