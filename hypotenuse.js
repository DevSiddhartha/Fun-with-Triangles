const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");
const outputElement = document.querySelector("#output");

function calculateSumOfSquares(a, b)
{
    const sumOfSquares = a ** 2 + b ** 2;
    return sumOfSquares;
}

function calculateHypotenuse()
{
    if (sides[0].value === '' || sides[1].value === '')
    {
        outputElement.innerText = "Please fill out all the fields!";
        return;
    }
    if (sides[0].value < 0 || sides[1].value < 0)
    {
        outputElement.innerText = "Please fill out non negative values for every field";
        return;
    }
    if (sides[0].value === '0' || sides[1].value === '0')
    {
        outputElement.innerText = "Please fill out non zero values for every field!";
        return;
    }

    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const hypotenuse = Math.sqrt(sumOfSquares);
    outputElement.innerText = "Hypotenuse value is " + hypotenuse.toFixed(2);
}


hypotenuseBtn.addEventListener("click", calculateHypotenuse);