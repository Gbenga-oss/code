function add(income, amount) {
    return Number(income) + Number(amount);
}

function minus(income, amount) {
    return expenses = income - amount;
}

function balance(income, expenses) {
    console.log(typeof income, income, expenses);
    // console.log(typeof expenses);
    
    return Number(income) - Number(expenses);
}

function addincomeItem(description, amount) {
    let desc = document.createElement('span');
    let amt = document.createElement('span');
    let div = document.createElement('div');
    div.appendChild(desc.appendChild(document.createTextNode(description)));
    div.appendChild(amt.appendChild(document.createTextNode(amount)));
    return div;
}

let form = document.querySelector('#add-form');


form.addEventListener('submit', onsubmit);

function onsubmit (e) {
    e.preventDefault();
    let amount = document.querySelector('.add-value').value;
    let currentBalance = document.querySelector('.budget-value');
    let income = document.querySelector('.budget-income-value').textContent;
    let expenses = document.querySelector('.budget-expenses-value').textContent;
    let operator = document.querySelector('.options');

    if (operator.value === '+') {
        let newIncome = add(income, amount);
        document.querySelector('.budget-income-value').textContent = newIncome;

        let incList = document.querySelector('#inc-items');
        let description   = document.querySelector('.add-description').value;
        let incItem = addincomeItem(description, amount);
        incList.appendChild(incItem).style.borderBottom = '1px solid #ccc'; 
        
        currentBalance.textContent = balance(newIncome, expenses)
    } else {
        let newExpense = minus(amount, expenses);
        document.querySelector('.budget-expenses-value').textContent = newExpense;
    
        let expList = document.querySelector('#exp-items');
        let description   = document.querySelector('.add-description').value;
        let expItem = addincomeItem(description, amount);
        expList.appendChild(expItem).style.borderBottom = '1px solid #ccc';

        
        currentBalance.textContent = balance(income, newExpense)
    }
}