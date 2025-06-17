# **Food Product Search App**

This is a modern food product search and filter application built with **React**. It uses the **Open Food Facts API** to allow users to explore food items, view nutritional details, and filter/sort based on categories and health data.

---

## **Features**

- Search food products by name
- Filter by category (e.g., Beverages, Snacks, Dairy)
- Sort by:
  - Product Name A-Z / Z-A
  - Nutrition Grade Ascending / Descending
- View detailed product information:
  - Ingredients
  - Nutritional facts
  - Food labels
- Responsive design with modern UI
- Background imagery for an enhanced visual experience

---

## **Tech Stack**

- **Frontend:** React, Tailwind CSS
- **API:** [Open Food Facts API](https://world.openfoodfacts.org)
- **Routing:** React Router

---

## **Getting Started**

### **1. Clone the repository**

```bash
git clone https://github.com/piyush1457/Food_Explorer.git
cd Food_Explorer
````

### **2. Install dependencies**

```bash
npm install
```

### **3. Run the development server**

```bash
npm start
```

The app will run on `http://localhost:3000`.

---

## **Project Structure**

```
src/
│
├── components/         // Reusable UI components (SearchBar, Filter, Sort, etc.)
├── pages/              // Page components like Home, ProductDetail
├── services/           // API integration logic
├── App.js              // App entry with routes
└── index.js            // React root render
```

---

## **API Reference**

* **Search Products:**

  * `https://world.openfoodfacts.org/cgi/search.pl?search_terms=...&json=true`
* **Product Detail by Barcode:**

  * `https://world.openfoodfacts.org/api/v0/product/[barcode].json`
* **Categories List:**

  * `https://world.openfoodfacts.org/categories.json`
* **Products by Category:**

  * `https://world.openfoodfacts.org/category/[category].json`

---
