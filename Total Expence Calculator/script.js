document.getElementById('expenseForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const rent = parseInt(document.getElementById('rent').value);
    const grocery = parseInt(document.getElementById('grocery').value);
    const units = parseInt(document.getElementById('electricityUnits').value);
    const unitPrice = parseInt(document.getElementById('unitPrice').value);
    const water = parseInt(document.getElementById('water').value);
    const recharge = parseInt(document.getElementById('recharge').value);
    const other = parseInt(document.getElementById('other').value);
    const members = parseInt(document.getElementById('members').value);
  
    const electricityBill = units * unitPrice;
    const totalExpense = rent + grocery + electricityBill + water + recharge + other;
    const perPerson = Math.floor(totalExpense / members);
  
    document.getElementById('output').innerHTML = `
      <strong>Total Monthly Expense:</strong> ₹${totalExpense}<br />
      <strong>Per Person Contribution:</strong> ₹${perPerson} per month
    `;
  });
  