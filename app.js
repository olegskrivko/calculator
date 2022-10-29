let allBtn = document.querySelectorAll(".btn");
let btnNumber = document.querySelectorAll(".btn-number");

let btnEqual = document.querySelector(".btn-equal");
let btnClear = document.querySelector(".btn-clear");
let btnDelete = document.querySelector(".btn-delete");

let btnPlus = document.querySelector(".btn-plus");
let btnMinus = document.querySelector(".btn-minus");
let btnMultiply = document.querySelector(".btn-multiply");
let btnDivide = document.querySelector(".btn-divide");
let btnPlusMinus = document.querySelector(".btn-plus-minus");

let inputText = document.querySelector(".input-text");
let operandText = document.querySelector(".operand-text");
let outputText = document.querySelector(".output-text");

// change bg color
let calculatorWhite = document.querySelector(".calculator-white");
let btnBgColor = document.querySelector(".btn-bg-color");
let moonBtn = document.querySelector(".moon-btn");
let sunBtn = document.querySelector(".sun-btn");

// display result on screen
// 1st row
let currentExpression = "";
// 2nd row
let previousExpression = "";
// 3rd row
let operand = "";

// button 3d effect on click
allBtn.forEach((button) => {
  button.addEventListener("click", (e) => {
    let btn = e.target;
    // animation click
    btn.classList.add("clicked");
    // animation unclick
    setTimeout(() => {
      btn.classList.remove("clicked");
    }, 200);
  });
});

btnNumber.forEach((button) => {
  button.addEventListener("click", (e) => {
    // limit to 9 digits or -9 digits
    if (
      (currentExpression.startsWith("-") && currentExpression.length <= 9) ||
      currentExpression.length <= 8
    ) {
      if (previousExpression.length !== 0 && operand.length === 0) {
        return;
      } else {
        let btnValue = e.target.innerText;
        // make float number
        // dont allow insert period as first character, only allow after number
        // period as last symbol is truncated in operand functions
        if (btnValue in [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
          currentExpression += btnValue;
        } else if (btnValue === ".") {
          if (
            currentExpression.length !== 0 &&
            !currentExpression.includes(".") &&
            !currentExpression.endsWith("-")
          ) {
            currentExpression += ".";
          }
        }

        console.log("previous value: ", previousExpression);
        console.log("current value: ", currentExpression);
        inputText.innerHTML = currentExpression;
      }
    }
  });
});

btnPlus.addEventListener("click", () => {
  if (
    currentExpression.length !== 0 &&
    previousExpression.length !== 0 &&
    operand.length !== 0
  ) {
    return;
  } else if (
    currentExpression.length !== 0 &&
    currentExpression !== "-" &&
    previousExpression.length === 0 &&
    operand.length === 0
  ) {
    operand = "+";
    operandText.innerHTML = operand;

    previousExpression = currentExpression;
    outputText.innerHTML = previousExpression;

    currentExpression = ""; // ?
    inputText.innerHTML = currentExpression;
  } else if (
    currentExpression.length === 0 &&
    previousExpression.length !== 0 &&
    operand.length === 0
  ) {
    // add operand
    operand = "+";
    operandText.innerHTML = operand;
    // console.log("last block");
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  }
});

// minus
btnMinus.addEventListener("click", () => {
  if (
    currentExpression.length !== 0 &&
    previousExpression.length !== 0 &&
    operand.length !== 0
  ) {
    return;
  } else if (
    currentExpression.length !== 0 &&
    currentExpression !== "-" &&
    previousExpression.length === 0 &&
    operand.length === 0
  ) {
    operand = "-";
    operandText.innerHTML = operand;

    previousExpression = currentExpression;
    outputText.innerHTML = previousExpression;

    currentExpression = ""; // ?
    inputText.innerHTML = currentExpression;
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  } else if (
    currentExpression.length === 0 &&
    previousExpression.length !== 0 &&
    operand.length === 0
  ) {
    // add operand
    operand = "-";
    operandText.innerHTML = operand;
    // console.log("last block");
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  }
});

btnMultiply.addEventListener("click", () => {
  if (
    currentExpression.length !== 0 &&
    previousExpression.length !== 0 &&
    operand.length !== 0
  ) {
    return;
  } else if (
    currentExpression.length !== 0 &&
    currentExpression !== "-" &&
    previousExpression.length === 0 &&
    operand.length === 0
  ) {
    operand = "*";
    operandText.innerHTML = operand;

    previousExpression = currentExpression;
    outputText.innerHTML = previousExpression;

    currentExpression = ""; // ?
    inputText.innerHTML = currentExpression;
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  } else if (
    currentExpression.length === 0 &&
    previousExpression.length !== 0 &&
    operand.length === 0
  ) {
    // add operand
    operand = "*";
    operandText.innerHTML = operand;
    // console.log("last block");
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  }
});

btnDivide.addEventListener("click", () => {
  if (
    currentExpression.length !== 0 &&
    previousExpression.length !== 0 &&
    operand.length !== 0
  ) {
    return;
  } else if (
    currentExpression.length !== 0 &&
    currentExpression !== "-" &&
    previousExpression.length === 0 &&
    operand.length === 0
  ) {
    operand = "/";
    operandText.innerHTML = operand;

    previousExpression = currentExpression;
    outputText.innerHTML = previousExpression;

    currentExpression = ""; // ?
    inputText.innerHTML = currentExpression;
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  } else if (
    currentExpression.length === 0 &&
    previousExpression.length !== 0 &&
    operand.length === 0
  ) {
    // add operand
    operand = "/";
    operandText.innerHTML = operand;
    // console.log("last block");
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  }
});

btnPlusMinus.addEventListener("click", () => {
  if (
    currentExpression.length !== 0 &&
    previousExpression.length !== 0 &&
    operand.length !== 0
  ) {
    return;
  } else if (
    currentExpression.length === 0 &&
    previousExpression.length === 0 &&
    operand.length === 0
  ) {
    currentExpression += "-";
    inputText.innerHTML = currentExpression;
  } else if (
    currentExpression.length === 0 &&
    previousExpression.length !== 0 &&
    operand.length !== 0
  ) {
    currentExpression += "-";
    inputText.innerHTML = currentExpression;
    // console.log("last block");
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  }
});

// function updateDisplay() {
//   currentExpression = "";
//   inputText.innerHTML = currentExpression;
//   outputText.innerHTML = previousExpression;
// }

// calculate function taken from aliens *** manage deletion by 0
function compute(previous_value, operand, current_value) {
  if (operand === "+") {
    return Number(previous_value) + Number(current_value);
  } else if (operand === "-") {
    return Number(previous_value) - Number(current_value);
  } else if (operand === "*") {
    return Number(previous_value) * Number(current_value);
  } else if (operand === "/") {
    return Number(previous_value) / Number(current_value);
  }
}

// compute
btnEqual.addEventListener("click", () => {
  if (
    currentExpression.length !== 0 &&
    previousExpression.length !== 0 &&
    operand.length !== 0
  ) {
    let result = compute(previousExpression, operand, currentExpression);
    operand = "";
    operandText.innerHTML = "";

    currentExpression = "";
    previousExpression = result;

    inputText.innerHTML = currentExpression;
    outputText.innerHTML = result;

    // console.log("equal");
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  }
});

// clear all display values and their variables
btnClear.addEventListener("click", () => {
  currentExpression = "";
  previousExpression = "";
  operand = "";
  operandText.innerHTML = operand;
  inputText.innerHTML = currentExpression;
  outputText.innerHTML = previousExpression;
});

// delete last symbol *** (after equal result it doesnt work)
btnDelete.addEventListener("click", () => {
  if (currentExpression.length !== 0) {
    console.log("current expr", currentExpression);
    let currentExprValue = currentExpression.toString().slice(0, -1);
    currentExpression = currentExprValue;
    inputText.innerHTML = currentExpression;
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  } else if (currentExpression.length === 0 && operand.length !== 0) {
    operand = "";
    operandText.innerHTML = operand;
  } else if (
    previousExpression.length !== 0 &&
    operand.length === 0 &&
    currentExpression.length === 0
  ) {
    currentExpression = previousExpression;
    previousExpression = "";
    inputText.innerHTML = currentExpression;
    outputText.innerHTML = previousExpression;
    // console.log("previous expr", previousExpression);
    // console.log("operand", operand);
    // console.log("current expr", currentExpression);
  }
});

// change bg color
btnBgColor.addEventListener("click", () => {
  changeBackgroundTheme();
});

function changeBackgroundTheme() {
  calculatorWhite.classList.toggle("calculator-dark");
  sunBtn.classList.toggle("swap-btn-icon");
  moonBtn.classList.toggle("swap-btn-icon");
}

// to fix
// division by 0
// it is possible to end expression with .
// -+ operand need to be fixed (add check all operands)
// can add brackets
