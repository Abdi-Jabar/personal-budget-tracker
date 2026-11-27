# SpendWise – Interactive Budget Tracker

## Project Overview

SpendWise is an interactive budget tracking application built using HTML, CSS, and JavaScript.

The application allows users to add expenses, calculate total spending, monitor their remaining monthly budget, and receive budget status messages.

## Improvements Made This Week

The main improvement was transforming SpendWise from a static dashboard into an interactive application.

The following features were implemented:

- Added an interactive expense form.
- Added JavaScript arrays to store multiple expense records.
- Implemented loops to calculate total expenses and display records.
- Added conditional statements for budget decision-making.
- Implemented DOM manipulation to update dashboard information.
- Added event listeners to respond to form submissions.
- Added input validation to prevent invalid expense entries.
- Updated the dashboard automatically whenever a new expense is added.

## JavaScript Concepts Used

### 1. Conditional Statements

Conditional statements (`if`, `else if`, and `else`) were used to monitor the remaining budget.

The application displays different messages depending on the user's budget status:

- Warning when expenses exceed the monthly budget.
- A message when the entire budget has been used.
- A caution message when 20% or less of the budget remains.
- A positive message when the remaining budget is above 20%.

### 2. Arrays

An array called `expenses` stores multiple expense records.

Each record is represented by an object containing:

- Expense name
- Expense amount

The `push()` method adds new expense records to the array.

### 3. Loops

A `for...of` loop processes expense records.

It is used to:

- Calculate total expenses.
- Display all expense records on the dashboard.

### 4. DOM Manipulation

DOM manipulation connects JavaScript with HTML elements.

The application uses methods such as:

- `getElementById()` to access HTML elements.
- `createElement()` to create expense records.
- `appendChild()` to display records.
- `textContent` to update dashboard information.

### 5. Events and User Interaction

An event listener detects when a user submits the expense form.

The application uses:

- `addEventListener()` to detect form submissions.
- `preventDefault()` to prevent page refresh.
- `expenses.push()` to store new expenses.
- `updateDashboard()` to refresh the displayed information.
- `reset()` to clear the form after submission.

## Challenges and Solutions

### Challenge 1: Connecting the HTML Form to JavaScript

The form needed to communicate with JavaScript when a user submitted an expense.

**Solution:** An event listener was added to detect form submissions and process the entered information.

### Challenge 2: Updating Expense Records Automatically

New expenses needed to appear on the dashboard without manually editing the HTML.

**Solution:** DOM manipulation was implemented using `createElement()`, `appendChild()`, and `textContent`.

### Challenge 3: Monitoring the Monthly Budget

The application needed to identify different budget situations.

**Solution:** Conditional statements were implemented to display messages based on the remaining balance.

## Technologies Used

- HTML5
- CSS3
- JavaScript
- GitHub

## Project Files

| File | Description |
|---|---|
| `index.html` | Provides the dashboard structure and expense form. |
| `style.css` | Controls the appearance and layout of the application. |
| `script.js` | Handles calculations, expense records, events, and dashboard updates. |
| `README.md` | Documents the project and its functionality. |

## Monthly Budget

The application uses an example monthly budget of KES 50,000.

It starts with sample expense records to demonstrate the calculations and interactive features.

## Future Improvements

- Save expense records between page refreshes.
- Add expense categories.
- Allow users to delete expense records.
- Add monthly spending reports.

## Conclusion

SpendWise demonstrates how JavaScript can make a website interactive through arrays, loops, conditional statements, DOM manipulation, and event listeners.

The project connects user actions with JavaScript logic and automatically updates the dashboard.

## Deployment and Hosting

SpendWise is deployed and hosted using Netlify.

### GitHub Repository
https://github.com/Abdi-Jabar/personal-budget-tracker

### Live Website
https://personal-budget-tracker-07ic.netlify.app/

### Deployment Process
1. Stored the SpendWise project files in a GitHub repository.
2. Connected the GitHub repository to Netlify.
3. Selected the main branch for deployment.
4. Configured Netlify to publish the root directory.
5. Deployed the website successfully.
6. Enabled automatic deployment whenever changes are committed to GitHub.

### Challenges Encountered
Document any deployment difficulties experienced and how they were resolved.

### Lessons Learned
- How to host a website using Netlify.
- How to connect GitHub to Netlify.
- How continuous deployment works.
- How to test a live website.
- How to maintain a deployed web application.
