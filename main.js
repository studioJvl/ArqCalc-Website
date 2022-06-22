function getValue(inputUp, inputDown, resultID) {
  let siteSize = document.getElementById(inputUp);
  let siteValue = siteSize.value;

  let dimensionSize = document.getElementById(inputDown);
  let dimensionValue = dimensionSize.value;

  let resultInput = document.getElementById(resultID);

  let result = (dimensionValue / siteValue) * 100;

  result = result.toFixed(2);

  resultInput.value = result + "%";
}

function getValueIA() {
  let siteSize = document.getElementById("IAinput-up-id");
  let siteValue = siteSize.value;

  let dimensionSize = document.getElementById("IAinput-down-id");
  let dimensionValue = dimensionSize.value;

  let resultInput = document.getElementById("IAresult-id");

  let result = dimensionValue / siteValue;

  result = result.toFixed(2);

  resultInput.value = result;
}

function getValueCD() {
  let firstInfo = document.getElementById("CDinput-A-id");
  let firstValue = firstInfo.value;

  let secondInfo = document.getElementById("CDinput-B-id");
  let secondValue = secondInfo.value;

  let thirdInfo = document.getElementById("CDinput-C-id");
  let thirdValue = thirdInfo.value;

  let fourthInfo = document.getElementById("CDinput-D-id");
  let fourthValue = fourthInfo.value;

  let fifthInfo = document.getElementById("CDinput-E-id");
  let fifthValue = fifthInfo.value;

  let resultInput = document.getElementById("CDresult-id");

  let result = firstValue * secondValue * thirdValue * fourthValue * fifthValue;

  resultInput.value = result + "L";
}

function eraseValue(resultOne, inputUp, inputDown) {
  document.getElementById(resultOne).value = "";
  document.getElementById(inputUp).value = "";
  document.getElementById(inputDown).value = "";
}

function eraseValueCD(resultOne, inputA, inputB, inputC, inputD, inputE) {
  document.getElementById(resultOne).value = "";
  document.getElementById(inputA).value = "";
  document.getElementById(inputB).value = "";
  document.getElementById(inputC).value = "";
  document.getElementById(inputD).value = "";
  document.getElementById(inputE).value = "";
}

function getNumberCalc(idButton, inputID) {
  let calculadoraInput = document.getElementById(inputID);
  let numberButton = document.getElementById(idButton);
  let numberValue = numberButton.innerText;

  calculadoraInput.value = calculadoraInput.value + numberValue;
}

function addInput(calculadoraId, inputID) {
  let calculadoraInput = document.getElementById(calculadoraId);
  let valorTotal = calculadoraInput.value;

  let siteSize = document.getElementById(inputID);
  siteSize.value += valorTotal;

  calculadoraInput.value = "";
}

function addInputCD(calculadoraId, inputID) {
  let calculadoraInput = document.getElementById(calculadoraId);
  let valorTotal = calculadoraInput.value;

  let siteSize = document.getElementById(inputID);
  siteSize.value += valorTotal;

  calculadoraInput.value = "";
}

function deleteValue(calculadoraId) {
  let calculadoraInput = document.getElementById(calculadoraId);
  calculadoraInput.value = "";
}
