function handleFormSubmit(event) {
    event.preventDefault();

    const expenseAmount = document.getElementById('expenseAmount').value;
    const expenseDescription = document.getElementById('expenseDescription').value;
    const expenseCategory = document.getElementById('expenseCategory').value;

    const expense = {
        expenseAmount: expenseAmount,
        expenseDescription: expenseDescription,
        expenseCategory: expenseCategory,
    };

    saveExpense(expense);
    displayUserInfo(expense);
    clearForm();
}

function saveExpense(expense) {
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
}

function displayUserInfo(expense) {
    const parent1 = document.getElementById('listOfItems');
    const child1 = document.createElement('li');
    child1.textContent = expense.expenseAmount + '-' + expense.expenseDescription + '-' + expense.expenseCategory;
    parent1.appendChild(child1);
}

function clearForm() {
    document.getElementById('expenseAmount').value = '';
    document.getElementById('expenseDescription').value = '';
    document.getElementById('expenseCategory').value = '';
}
