const display = document.getElementById("display");
const secondDisplay = document.getElementById("secondDisplay")
const toDisplay = document.querySelectorAll(".toDisplay"); 
const clearBtn = document.getElementById("clear");
const deleteBtn = document.getElementById("delete");
display.textContent = display.textContent.trimEnd();



let workingOperation = "";





const calculate = (firstNumber, secondNumber, operation) => {

    //Parsing the arguments so they become js numbers.

    firstNumber = parseFloat(firstNumber);
    secondNumber = parseFloat(secondNumber);

    let result = null;

    switch(operation) {
        case "+":
            console.log("add calculated")
            result = firstNumber + secondNumber;
        break;
        
        case "-":
            console.log("subtract calculated")
            result = firstNumber - secondNumber;
        break;
        case "*":
            console.log("multiply calculated")
            result = firstNumber * secondNumber;
        break;

        case "/":
            console.log("divide calculated")
            result = firstNumber / secondNumber;
        break;

        // case "+":

        // break;

        // case "+":

        // break;

        default:
            console.log("Can't handle this operation")
    }
    return result.toString()
};


const symbols = ["/", "*", "-", "+"];


let trailResult = "0";


toDisplay.forEach(btn => {

    let char = btn.textContent;


    btn.addEventListener("click", () => {


        if(display.textContent === "0" && symbols.indexOf(char) === -1) {
            if(char === ".") {
                display.textContent = "0."
            }
            else {
                display.textContent = char;
            }
        }
        else if (symbols.indexOf(char) >= 0) {
            // console.log("Dealing with an operation.")
            if(workingOperation === "") {
                 workingOperation = char;
                 trailResult = display.textContent;
                 display.textContent = "0"
            }
           else {               
               trailResult = calculate(trailResult, display.textContent, workingOperation);
               secondDisplay.textContent = trailResult
               display.textContent = "0";
               workingOperation = char;
           } 
        } 
        else if (char === "=") {
            display.textContent = calculate(trailResult, display.textContent, workingOperation);
            trailResult = display.textContent;     
            workingOperation = "";
        }
        else if (char === ".") {
            // console.log("Decimal was clicked.")
            if(display.textContent.indexOf(".") === -1) {
                display.textContent += "."
            } else {
                console.log("Only one decimal is allowed.")
            }
        }
        else {
            display.textContent += char
        }
        // console.log(workingOperation)
        console.log(trailResult, "   <== Trail result", display.textContent, "   <== Display", workingOperation, "<== Working operation")
    })
});





//Just the clear and delete button's.

clearBtn.addEventListener("click", () => {
    workingOperation = ""
    trailResult = "0"
    display.textContent = "0"
    secondDisplay.textContent = "";
})

deleteBtn.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
})
