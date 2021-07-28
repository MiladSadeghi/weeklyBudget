// class
class HTMLUI {
  insertBudget(budget) {
    budgetTotal.innerHTML = budget
    budgetLeft.innerHTML = budget
  }
}


// variable
let userBudget;
const html = new HTMLUI()
let budgetTotal = document.querySelector('span#total')
let budgetLeft = document.querySelector('span#residual')


// eventListeners
eventListeners()
function eventListeners() {
  document.addEventListener('DOMContentLoaded', function() {
    userBudget = prompt('Enter Your Budget')
    
    if (userBudget === '' || userBudget === '0' || userBudget === null) {
      window.location.reload()
    } else {
      html.insertBudget(userBudget)
    }
  })
}