# Spend Wise Dashboard

## Project Overview
Spend Wise is a financial dashboard shell built using HTML and CSS. It provides a visual overview of financial categories using a sidebar, dashboard header and category cards.

This project focuses on CSS Grid, Flexbox and responsive design. It does not include JavaScript functionality.

## Dashboard Components

### 1. Sidebar Navigation
The sidebar contains navigation links for:
- Dashboard
- Transactions
- Categories
- Savings
- Reports

### 2. Dashboard Header
The header displays the dashboard title, a welcome message and account information.

### 3. Financial Category Cards
The dashboard contains six cards displaying static financial information:
- Food
- Transport
- Rent
- Entertainment
- Savings
- Utilities

## CSS Layout Techniques

### CSS Grid
Grid is used to arrange the overall dashboard layout and the six financial category cards.

### Flexbox
Flexbox is used to arrange:
- Sidebar navigation items.
- Dashboard header content.
- Content inside each category card.

### CSS Custom Properties
The `:root` selector defines reusable theme variables for:
- Brand colour.
- Accent colour.
- Background and surface colours.
- Primary and secondary text colours.

### Responsive Design
A media query below 768px changes the dashboard into a single-column layout for smaller screens.

### Card Micro-interactions
Dashboard cards use hover and keyboard-focus effects with `transform` and `box-shadow`. The transition duration is 200ms.

### Dark Theme
An optional dark theme is included using `prefers-color-scheme: dark` and CSS custom properties.

## Project Files
- `index.html` – Contains the dashboard structure, sidebar, header and category cards.
- `style.css` – Contains the Grid and Flexbox layouts, theme, responsive styles and card effects.
- `README.md` – Explains the project and its components.

## Technologies Used
- HTML5
- CSS3
- CSS Grid
- Flexbox
- CSS Custom Properties
- Media Queries

## Project Status
Dashboard shell implementation for the CSS Grid and Flexbox assignment.
