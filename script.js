// ==========================================
// SPENDWISE - INTERACTIVE BUDGET TRACKER
// ==========================================


// STEP 1: APPLICATION DATA

const appName = "SpendWise";

const monthlyBudget = 50000;


// STEP 2: STORE EXPENSES IN AN ARRAY

let expenses = [
    { name: "Food", amount: 8500 },
    { name: "Transport", amount: 3200 },
    { name: "Rent", amount: 12000 },
    { name: "Entertainment", amount: 2500 },
    { name: "Utilities", amount: 1800 }
];


// STEP 3: CALCULATE TOTAL EXPENSES USING A LOOP

function calculateTotalExpenses() {

    let total = 0;

    for (let expense of expenses) {

        total += expense.amount;

    }

    return total;
}


// STEP 4: DISPLAY EXPENSE RECORDS ON THE PAGE

function displayExpenses() {

    const expenseList = document.getElementById("expenseList");

    expenseList.innerHTML = "";

    if (expenses.length === 0) {

        expenseList.textContent = "No expenses added yet.";

        return;
    }

    for (let expense of expenses) {

        const expenseItem = document.createElement("p");

        expenseItem.textContent =
            expense.name + " - KES " + expense.amount.toLocaleString();

        expenseList.appendChild(expenseItem);

    }
}


// STEP 5: BUDGET DECISION-MAKING WITH CONDITIONALS

function updateBudgetMessage(remainingBalance) {

    const budgetMessage = document.getElementById("budgetMessage");

    if (remainingBalance < 0) {

        budgetMessage.textContent =
            "Warning: You have exceeded your monthly budget!";

    } else if (remainingBalance === 0) {

        budgetMessage.textContent =
            "Your monthly budget has been fully used.";

    } else if (remainingBalance <= monthlyBudget * 0.2) {

        budgetMessage.textContent =
            "Caution: Your remaining budget is getting low.";

    } else {

        budgetMessage.textContent =
            "Good job! You are managing your budget well.";

    }
}


// STEP 6: UPDATE DASHBOARD INFORMATION

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();

    const remainingBalance = monthlyBudget - totalExpenses;

    document.getElementById("totalExpenses").textContent =
        "KES " + totalExpenses.toLocaleString();

    document.getElementById("remainingBalance").textContent =
        "KES " + remainingBalance.toLocaleString();

    updateBudgetMessage(remainingBalance);

    displayExpenses();

}


// STEP 7: CONNECT HTML FORM ELEMENTS TO JAVASCRIPT

const expenseForm = document.getElementById("expenseForm");

const expenseNameInput = document.getElementById("expenseName");

const expenseAmountInput = document.getElementById("expenseAmount");


// STEP 8: ADD EVENT LISTENER TO THE FORM

expenseForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get information entered by the user
    const name = expenseNameInput.value.trim();

    const amount = Number(expenseAmountInput.value);


    // Validate the entered information
    if (name === "" || !Number.isFinite(amount) || amount <= 0) {

        document.getElementById("budgetMessage").textContent =
            "Please enter a valid expense name and an amount greater than zero.";

        return;
    }


    // Add the new expense to the array
    expenses.push({

        name: name,

        amount: amount

    });


    // Clear the form after submission
    expenseForm.reset();


    // Update dashboard information
    updateDashboard();

});


// STEP 9: INITIALIZE THE APPLICATION

console.log(appName + " loaded successfully!");

updateDashboard();