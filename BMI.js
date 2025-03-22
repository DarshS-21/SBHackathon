function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      document.getElementById('result').innerText = 'Please enter valid positive numbers for weight and height.';
      return;
    }

    const bmi = weight * 703/ (height * height);
    let category = '';

    if (bmi < 18.5) {
      category = 'Underweight';
    } else if (bmi < 25) {
      category = 'Normal weight';
    } else if (bmi < 30) {
      category = 'Overweight';
    } else {
      category = 'Obesity';
    }

    document.getElementById('result').innerText = `Your BMI is: ${bmi.toFixed(2)}\nCategory: ${category}`;
  }