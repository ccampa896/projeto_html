function start() {
  var buttonCalculateImc = document.querySelector('#button-calculate-imc');
  buttonCalculateImc.addEventListener('click', handleButtonClick);

  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  inputWeight.addEventListener('input', handleButtonClick);
  inputHeight.addEventListener('input', handleButtonClick);

  handleButtonClick();
}

function calculateImc(weight, height) {
  return weight / (height * height);
}

function handleButtonClick() {
  var inputWeight = document.querySelector('#input-weight');
  var inputHeight = document.querySelector('#input-height');

  var imcResult = document.querySelector('#imc-result');
  var imcType = document.querySelector('#type-imc');

  var weight = Number(inputWeight.value);
  var height = Number(inputHeight.value);

  var imc = calculateImc(weight, height);
  var formattedImc = imc.toFixed(2).replace('.', ',');
  imcResult.textContent = formattedImc;

  if (imc >= 16 && imc <= 16.9) {
    imcType.textContent = 'Muito abaixo do peso';
  } else if (imc >= 17 && imc <= 18.4) {
    imcType.textContent = 'Abaixo do peso';
  } else if (imc >= 18.5 && imc <= 24.9) {
    imcType.textContent = 'Peso normal';
  } else if (imc >= 25 && imc <= 29.9) {
    imcType.textContent = 'Acima do peso';
  } else if (imc >= 30 && imc <= 34.9) {
    imcType.textContent = 'Obesidade grau I';
  } else if (imc >= 35 && imc <= 40) {
    imcType.textContent = 'Obesidade grau II';
  } else if (imc > 40) {
    imcType.textContent = 'Obesidade grau III';
  } else {
    imcType.textContent = 'inválido';
  }
}

start();
