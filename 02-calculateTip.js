function calculateTip(billAmount, tipPercentage) {
    
  const percentage = (tipPercentage * billAmount) / 100;
  return percentage
}

console.log(calculateTip(100, 10))