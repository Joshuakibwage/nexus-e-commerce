🛒 Nexus E-Commerce Product Catalog

A modern E-Commerce Product Catalog built with Next.js (App Router), TypeScript, GraphQL, Redux, and Tailwind CSS.
This project demonstrates how to integrate APIs, manage global state, and create a seamless shopping experience with filtering, sorting, pagination, and responsive design.

🎯 Project Overview

The goal of this project is to simulate a real-world e-commerce catalog experience. It allows users to explore products, apply filters, and sort results effortlessly while maintaining a smooth and responsive interface.

From a developer perspective, the project focuses on:

API Data Handling → Connecting to backend APIs with GraphQL to dynamically fetch product data.

State Management → Using Redux to efficiently handle product listings, filters, and UI state.

User-Centric Design → Implementing filtering, sorting, and pagination to make product discovery easy.

Performance & Responsiveness → Leveraging Next.js and Tailwind CSS to ensure fast rendering and mobile-first layouts.

This catalog forms the foundation of any scalable e-commerce application.

🛠️ Technologies & Rationale

Next.js (App Router)

Provides server-side rendering (SSR) and static site generation (SSG).

Delivers better performance and SEO optimization out of the box.

The App Router structure improves code organization with layouts, routes, and server components.

TypeScript

Ensures type safety and reduces runtime errors.

Makes the codebase more maintainable and scalable.

Improves developer experience with IntelliSense and auto-completion.

GraphQL

Optimized data fetching by requesting exactly what’s needed.

Reduces over-fetching and under-fetching issues common with REST APIs.

Flexible queries to fetch products, categories, and filtered results.

Redux

Manages global state (products, filters, UI states) in a predictable way.

Enables consistent handling of product data across multiple components.

Scales well as application complexity grows.

Tailwind CSS

Utility-first CSS framework for building modern, responsive UIs.

Accelerates styling with pre-built utilities.

Provides a consistent design system that adapts across devices.

✨ Key Features
🔗 API Data Integration

Fetch and display product data from a backend API using GraphQL.

Handle loading states (spinners, skeleton loaders) for smooth user experience.

Implement error boundaries to gracefully manage API failures.

🧩 Filtering & Sorting

Category Filtering → Users can view products based on categories (e.g., electronics, clothing, home).

Price Sorting → Options to sort products in ascending or descending price order.

Multi-Criteria Filters → Users can combine multiple filters for precise results.

Ensures real-time updates without full page reloads.

📄 Pagination & Infinite Scrolling

Pagination → Navigate products in smaller chunks for performance.

Infinite Scrolling → Dynamically load products as users scroll down, offering a seamless browsing experience.

Built with accessibility in mind to ensure usability for all.

📱 Responsive & Modern Design

Fully responsive across desktop, tablet, and mobile devices.

Tailored layouts to maximize readability and usability on different screen sizes.

Fast rendering powered by Next.js and optimized CSS from Tailwind.

📂 Project Structure
app/
  ├── layout.tsx         # Global layout for the app
  ├── page.tsx           # Homepage / catalog entry point
  ├── product/           # Product detail pages
  ├── providers.tsx      # Redux + GraphQL providers
components/
  ├── ProductCard.tsx    # Displays product details
  ├── FilterBar.tsx      # Category + sorting controls
  ├── Pagination.tsx     # Pagination component
  ├── Loader.tsx         # Loading states
graphql/
  ├── queries.ts         # GraphQL queries for products & categories
redux/
  ├── store.ts           # Redux store configuration
  ├── productSlice.ts    # Handles product-related state
styles/
  ├── globals.css        # Tailwind base styles
types/
  ├── index.ts           # TypeScript types (Product, Category, etc.)

--

⚡ Installation & Setup

Clone the repository and run locally:

# Clone the repo
git clone https://github.com/your-username/nexus-ecommerce.git
cd nexus-ecommerce

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start

--

The app will be running at:
👉 http://localhost:3000

--

👨‍💻 Author

Developed with ❤️ by joshua kibwage
