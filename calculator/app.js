// When user hits submit
document.getElementById('calc-form').addEventListener('submit', function(i){
  document.getElementById('results').style.display = 'none';
  document.querySelector('.spinner-border').style.display = 'block';
  setTimeout(calculateResults, 2000);
  i.preventDefault();
});

// Calculations
function calculateResults(){
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  const principal = parseFloat(amount.value);
  const interestEquation = parseFloat(interest.value) / 100 / 12;
  const paymentEquation = parseFloat(years.value) * 12;
  // Monthly Payments
  const power = Math.pow(1 + interestEquation, paymentEquation);
  const monthly = (principal * power * interestEquation) / (power - 1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * paymentEquation).toFixed(2);
    totalInterest.value = ((monthly * paymentEquation) - principal).toFixed(2);
    document.getElementById('results').style.display = 'block';
    document.querySelector('.spinner-border').style.display = 'none';
  } else {
    showError('Please re-check your numbers');
  }
}
// Create Error Message
function showError(error){
  document.getElementById('results').style.display = 'none';
  document.querySelector('.spinner-border').style.display = 'none';
  const errorBox = document.createElement('div');
  const card = document.querySelector('.card');
  const header = document.querySelector('.heading');
  errorBox.className = 'alert alert-danger';
  errorBox.appendChild(document.createTextNode(error)); // Create Text node and append to div
  card.insertBefore(errorBox, header); // Insert error above heading
  setTimeout(clearError, 3000);
}
// Clear Error
function clearError(){
  document.querySelector('.alert').remove();
}
