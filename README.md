# SpendWise – Budget Tracker

## 1. Project Overview

SpendWise is a personal budget tracking application developed using HTML, CSS and JavaScript.

The application collects monthly budget and expense information from users, calculates total expenses and determines the remaining budget.

This project introduces JavaScript concepts for processing budgeting information.

## 2. JavaScript Concepts Implemented

The following JavaScript concepts are implemented:

- Variables and constants.
- JavaScript data types.
- User input using `prompt()`.
- Number conversion using `Number()`.
- Arithmetic calculations.
- Reusable functions.
- Function parameters and return values.
- Output using `console.log()`.

## 3. How Variables Are Used

Variables store the budgeting information used by SpendWise.

Examples include:

- `monthlyBudget` – stores the user's monthly budget.
- `foodExpenses` – stores food expenses.
- `transportExpenses` – stores transport expenses.
- `rentExpenses` – stores rent expenses.
- `entertainmentExpenses` – stores entertainment expenses.
- `savings` – stores the savings allocation.
- `utilities` – stores utility expenses.

The application also uses constants to store the application name and currency.

## 4. How User Input Is Collected

SpendWise uses JavaScript's `prompt()` function to collect the monthly budget and expense information.

The `Number()` function converts the entered values into numbers so that JavaScript can perform calculations.

## 5. How Calculations Are Performed

The application calculates total expenses by adding:

- Food expenses.
- Transport expenses.
- Rent expenses.
- Entertainment expenses.
- Utilities.

The remaining balance is calculated by subtracting total expenses and savings from the monthly budget.

**Formula:**

Remaining Balance = Monthly Budget − Total Expenses − Savings

## 6. How Functions Organize the Code

SpendWise uses reusable functions to organize its budgeting calculations.

### calculateTotalExpenses()

Adds the expense categories and returns the total expenses.

### calculateRemainingBalance()

Accepts the monthly budget, total expenses and savings as parameters. It calculates and returns the remaining balance.

These functions make the calculation code reusable and easier to understand.

## 7. Displaying Results

The application uses `console.log()` to display clearly labelled budgeting information in the browser console.

Displayed information includes:

- Monthly budget.
- Individual expense categories.
- Total expenses.
- Savings.
- Remaining balance.

## 8. Project Files

- `index.html` – Contains the SpendWise dashboard structure and links the JavaScript file.
- `style.css` – Contains the dashboard styling and layout.
- `script.js` – Contains variables, user input, calculations and reusable functions.
- `README.md` – Documents the project and JavaScript concepts.

## 9. Technologies Used

- HTML5
- CSS3
- JavaScript

## 10. Project Status

JavaScript foundation for the SpendWise budget tracker assignment.
