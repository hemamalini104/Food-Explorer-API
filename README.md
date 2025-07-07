---

# Food Explorer App

Food Explorer is a responsive web application built using **React** and styled with **Tailwind CSS**. It integrates with the **Open Food Facts API** to allow users to search, filter, sort, and view detailed information about food products based on their categories and nutritional data.

---

## Features

* Search food products by name
* Filter products by category (e.g., Snacks, Beverages, Dairy, etc.)
* Sort products by:

  * Alphabetical order (A–Z / Z–A)
  * Nutrition grade (Ascending / Descending)
* View detailed product information including:

  * Product image
  * Ingredients
  * Nutritional values
  * Food labels
* Responsive layout that adapts to all screen sizes
* Clean and modern user interface with background enhancements

---

## Technologies Used

* **Frontend Framework:** React
* **Styling:** Tailwind CSS
* **Routing:** React Router DOM
* **Data Source:** [Open Food Facts API](https://world.openfoodfacts.org)

---

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/hemamalini104/Food-Explorer-API.git
cd Food-Explorer-API
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

After starting, the application will be available at [http://localhost:5173](http://localhost:5173).

---

## Project Structure

```
src/
├── components/      # Reusable UI components such as SearchBar, ProductCard, Filter, and Sort
├── pages/           # Application pages including Home and ProductDetail
├── services/        # API integration and data fetching
├── App.jsx          # Main application component and route configuration
└── main.jsx         # React root rendering
```

---

## API Endpoints Used

| Functionality            | API Endpoint Example                                                         |
| ------------------------ | ---------------------------------------------------------------------------- |
| Search for products      | `https://world.openfoodfacts.org/cgi/search.pl?search_terms=pizza&json=true` |
| Get product by barcode   | `https://world.openfoodfacts.org/api/v0/product/737628064502.json`           |
| Get list of categories   | `https://world.openfoodfacts.org/categories.json`                            |
| Get products by category | `https://world.openfoodfacts.org/category/snacks.json`                       |

---

## Notes

This application is built for academic and demonstration purposes. All product information is fetched from the public [Open Food Facts](https://world.openfoodfacts.org/) database.

If you wish to deploy this application or extend its functionality, it can be hosted using platforms like Vercel, Netlify, or GitHub Pages.

---
