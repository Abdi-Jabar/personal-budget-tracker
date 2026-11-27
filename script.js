// ======================================
// SPENDWISE - INTERACTIVE BUDGET TRACKER
// ======================================

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


// STEP 3: CALCULATE TOTAL EXPENSES

function calculateTotalExpenses() {

    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}


// STEP 4: DISPLAY EXPENSE RECORDS

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
            expense.name + " - KES " + expense.amount;

        expenseList.appendChild(expenseItem);
    }
}


// STEP 5: UPDATE DASHBOARD

function updateDashboard() {

    const totalExpenses = calculateTotalExpenses();

    const remainingBalance = monthlyBudget - totalExpenses;

    document.getElementById("totalExpenses").textContent =
        "KES " + totalExpenses;

    document.getElementById("remainingBalance").textContent =
        "KES " + remainingBalance;

    displayExpenses();
}


// STEP 6: CONNECT THE FORM TO JAVASCRIPT

const expenseForm = document.getElementById("expenseForm");

const expenseNameInput = document.getElementById("expenseName");

const expenseAmountInput = document.getElementById("expenseAmount");


expenseForm.addEventListener("submit", function(event) {

    // Prevent the page from refreshing
    event.preventDefault();

    // Get values entered by the user
    const name = expenseNameInput.value.trim();

    const amount = Number(expenseAmountInput.value);

    // Validate user input
    if (name === "" || !Number.isFinite(amount) || amount <= 0) {

        document.getElementById("budgetMessage").textContent =
            "Please enter a valid expense name and amount greater than zero.";

        return;
    }

    // Add the new expense to the array
    expenses.push({
        name: name,
        amount: amount
    });

    // Clear the form
    expenseForm.reset();

    // Refresh the dashboard
    updateDashboard();

    document.getElementById("budgetMessage").textContent =
        "Expense added successfully!";
});


// STEP 7: INITIAL DASHBOARD DISPLAY

console.log(appName + " loaded successfully!");

updateDashboard();
