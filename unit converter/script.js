function convert() {
    const value = parseFloat(document.getElementById('value').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;
  
    if (isNaN(value)) {
      alert('Please enter a valid number.');
      return;
    }
  
    let result;
  
    if (fromUnit === 'meters') {
      if (toUnit === 'kilometers') {
        result = value / 1000;
      } else if (toUnit === 'miles') {
        result = value / 1609.34;
      } else {
        result = value; // Meters to Meters
      }
    } else if (fromUnit === 'kilometers') {
      if (toUnit === 'meters') {
        result = value * 1000;
      } else if (toUnit === 'miles') {
        result = value / 1.60934;
      } else {
        result = value; // Kilometers to Kilometers
      }
    } else if (fromUnit === 'miles') {
      if (toUnit === 'meters') {
        result = value * 1609.34;
      } else if (toUnit === 'kilometers') {
        result = value * 1.60934;
      } else {
        result = value; // Miles to Miles
      }
    }
  
    document.getElementById('result').value = result;
  }
  