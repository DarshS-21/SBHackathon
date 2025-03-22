function calcBodyFat() {
    const body = parseFloat(document.getElementById('body').value);
    const Age = parseFloat(document.getElementById('Age').value);
    const Gender = document.getElementById('Gender').value.trim().toLowerCase();


    if (isNaN(Age) || isNaN(body) || Age <= 0 || body <= 0 ) {
      document.getElementById('final').innerText = 'Please enter valid positive numbers for age, and BMI.';
      return;
    }
    let bodyfat=0;
    if(Gender==="female")
    {
    bodyfat = (1.20*body)+(0.23*Age)+(10.8)-5.4;
    }
    else if(Gender==="male")
    {
    bodyfat= (1.20*body)+(0.23*Age)-5.4;
    }
    else
    {
    document.getElementById('final').innerText = 'Please enter gender.';
    return;
    }

    document.getElementById('final').innerText = `${body.toFixed(2)}%`;
  }