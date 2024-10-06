document.addEventListener("DOMContentLoaded", function () {
    console.log("Document is ready!");
    const display = document.getElementById("calc-display");
    const buttons = document.getElementsByClassName("btn");
    let currenValue = "";


    function evaluate() {
    const convertedValue=currenValue
    .replace('%','*0.01')
    .replace('sin','Math.sin')
    .replace('cos','Math.cos')
    .replace('ln','Math.log')
    .replace('π','Math.PI')
    .replace('log','Math.log10')
    .replace('e','Math.E')
    .replace('tan','Math.tan')
    .replace('√','Math.sqrt')
    const result=eval(convertedValue)
      currenValue = result.toString();
      display.value = currenValue;
    }
    for (let i = 0; i < buttons.length; i++) {
      const button = buttons[i];
      button.addEventListener("click", function () {
        const value = button.innerText;
      try{
        if (value == "AC") {
            currenValue = "";
            display.value = currenValue;
          } else if (value == "=") {
            evaluate();
          } else {
            currenValue += value;
            display.value = currenValue;
          }
      } catch(error){
console.error(error)
currenValue="ERROR"
display.value=currenValue
      }
      });
    }
  });