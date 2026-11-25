// ==================================
// SPENDWISE JAVASCRIPT FOUNDATION
// ==================================

// STEP 1: APPLICATION VARIABLES

const appName = "SpendWise";
const currency = "KES";

let isBudgetActive = true;


// STEP 2: COLLECT USER INPUT

let monthlyBudget = Number(
    prompt("Enter your monthly budget in KES:")
);

let foodExpenses = Number(
    prompt("Enter your food expenses in KES:")
);

let transportExpenses = Number(
    prompt("Enter your transport expenses in KES:")
);

let rentExpenses = Number(
    prompt("Enter your rent expenses in KES:")
);

let entertainmentExpenses = Number(
    prompt("Enter your entertainment expenses in KES:")
);

let savings = Number(
    prompt("Enter your savings in KES:")
);

let utilities = Number(
    prompt("Enter your utilities expenses in KES:")
);


// STEP 3: PERFORM BUDGET CALCULATIONS

let totalExpenses =
    foodExpenses +
    transportExpenses +
    rentExpenses +
    entertainmentExpenses +
    utilities;

let remainingBalance = monthlyBudget - totalExpenses - savings;


// STEP 4: DISPLAY RESULTS

console.log("========== " + appName + " ==========");

console.log("Currency:", currency);

console.log("Monthly Budget:", monthlyBudget);

console.log("Total Expenses:", totalExpenses);

console.log("Savings:", savings);

console.log("Remaining Balance:", remainingBalance);

console.log("Budget Active:", isBudgetActive);
