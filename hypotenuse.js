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
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value), Number(sides[1].value));
    const hypotenuse = Math.sqrt(sumOfSquares);
    outputElement.innerText = "Hypotenuse value is " + hypotenuse;
}


hypotenuseBtn.addEventListener("click", calculateHypotenuse);