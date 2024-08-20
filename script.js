function generateRandomNumber() {
  const minValue = parseInt(document.getElementById('minValue').value);
  const maxValue = parseInt(document.getElementById('maxValue').value);
  const result = document.getElementById('result');

  if (isNaN(minValue) || isNaN(maxValue)) {
      result.textContent = 'Please enter valid numbers in both fields.';
      return;
  }

  if (minValue > maxValue) {
      result.textContent = 'Minimum value cannot be greater than maximum value.';
      return;
  }

  const randomNum = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
  result.textContent = `Generated Random Number: ${randomNum}`;
}