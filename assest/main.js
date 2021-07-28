// class
class HTMLUI {
  insertBudget(budget) {
    budgetTotal.innerHTML = budget
    budgetLeft.innerHTML = budget
  }

  showError(msg) {
    const div = document.createElement('div')
    div.classList.add('error')
    div.appendChild(document.createTextNode(msg))

    const input = document.querySelector('#forError')

    input.insertBefore(div, form)

    setTimeout(function() {
      div.remove()
    }, 3000);

    form.reset()
  }

  insertIntoExpensesList(name, amount) {
    const expenses = document.querySelector('#expenses ul')

    let li = document.createElement('li')
    li.classList.add('li')
    li.innerHTML = `
      ${name}
      <span class="span">${amount}$</span>
    `
    expenses.appendChild(li)
  }

  showresidualBudget(amount) {
    const showLeftBudget = budget.subBudg(amount)
    budgetLeft.innerHTML = `${showLeftBudget}`
    
    if((budget.budget / 4) >= showLeftBudget) {
      budgetLeft.parentElement.classList.remove('color', 'color1')
      budgetLeft.parentElement.classList.add('color2')
    } else if ((budget.budget / 2) >= showLeftBudget) {
      budgetLeft.parentElement.classList.add('color1')
    }

  }
}

class Budget {
  constructor(budget) {
    this.budget = budget
    this.budgetLeft = this.budget
  }

  subBudg(amount) {
    return this.budgetLeft -= amount
  }
}


// variable
let userBudget;
const html = new HTMLUI()
let budgetTotal = document.querySelector('span#total')
let budgetLeft = document.querySelector('span#residual')
const form = document.querySelector('#add-expense')
let budget;


// eventListeners
eventListeners()
function eventListeners() {
  document.addEventListener('DOMContentLoaded', function() {
    userBudget = prompt('Enter Your Budget')
    
    if (userBudget === '' || userBudget === '0' || userBudget === null) {
      window.location.reload()
    } else {
      budget = new Budget(userBudget)
      html.insertBudget(budget.budget)
    }
    form.addEventListener('submit', function(e) {
      e.preventDefault()

      const expense = document.querySelector('#expense').value
      const amount = document.querySelector('#amount').value

      if(expense == '' || amount == '') {
        html.showError('Please Complete All Fields')
      } else {
        html.insertIntoExpensesList(expense, amount)
        html.showresidualBudget(amount)
      }
    })
  })
}