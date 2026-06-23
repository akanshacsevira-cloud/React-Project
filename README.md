# React E-Commerce Product Listing App

## Project Overview

This project is a simple Amazon-style product listing application built using React. It allows users to browse products, apply filters, and view detailed product information.

---

## Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/akanshacsevira-cloud/React-Project.git
```

### 2. Navigate to the project folder

```bash
cd React-Project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

### 5. Open in browser

```
http://localhost:5173
```

---

## Technologies Used

- React JS
- React Router DOM
- Vite
- CSS
- DummyJSON API

---

## Features

- Product listing page
- Product detail page
- Category filter
- Price range filter
- Brand filter
- Combined filtering
- Loading state
- Error handling
- Responsive product cards
- Back navigation support

---

## Assumptions Made

- Product filtering is performed on the client side after fetching products.
- Only one API request is made initially to reduce repeated API calls.
- Brand options are generated dynamically from fetched products.
- Product images use the thumbnail field from the API.
- Pagination can be implemented client-side if needed.

---

## Architectural Decisions

- React functional components are used throughout the application.
- React Router is used for page navigation.
- Components are separated for better reusability.
- API calls are kept inside a dedicated services folder.
- Filtering logic is handled within the Product Listing page.
- CSS is used for simple styling without external UI libraries.

---

## Folder Structure

```text
src/
├── components/
├── pages/
├── services/
├── App.jsx
├── main.jsx
└── App.css
```

---

## API Endpoints Used

- https://dummyjson.com/products
- https://dummyjson.com/products/categories
- https://dummyjson.com/products/{id}

---

## Improvements If Given More Time

- Server-side pagination
- Product search functionality
- Sorting by price and rating
- Responsive mobile design improvements
- Add Redux or Context API for state management
- Skeleton loaders
- Unit testing using Jest and React Testing Library
- Wishlist and cart functionality
- Dark mode support

---

## Author

Akansha Kumari
