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


// STEP 3: CALCULATE TOTAL EXPENSES USING A LOOP

function calculateTotalExpenses() {

    let total = 0;

    for (let expense of expenses) {
        total += expense.amount;
    }

    return total;
}


// STEP 4: DISPLAY EXPENSE RECORDS USING DOM MANIPULATION

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

    let totalExpenses = calculateTotalExpenses();

    let remainingBalance = monthlyBudget - totalExpenses;

    document.getElementById("totalExpenses").textContent =
        "KES " + totalExpenses;

    document.getElementById("remainingBalance").textContent =
        "KES " + remainingBalance;

    displayExpenses();
}


// STEP 6: INITIAL DASHBOARD DISPLAY

console.log(appName + " loaded successfully!");

updateDashboard();
