# Simple CRUD API with Express and MongoDB

## Overview

This project implements a basic CRUD (Create, Read, Update, Delete) API for managing products. It uses Express.js for the server framework and MongoDB for data storage. The API provides endpoints to perform basic operations on product data.

## Features

- Create: Add new products.
- Read: Retrieve all products or get details of a specific product by ID.
- Update: Modify existing product details.
- Delete: Remove products from the database.

## Requirements

- Node.js (v14 or later recommended)
- MongoDB Atlas account (for the cloud database)
- npm or yarn (for dependency management)

## Installation

1. Clone the repository:

```
  git clone https://github.com/douaaaaa/simple-crud-api-backend
  cd your-app
```

2. Install dependencies:

```
  npm install
```

3. Configure environment variables:

Create a .env file in the root of the project and add MongoDB Atlas connection string and port:

```
  MONGO=mongodb+srv://<username>:<password>@cluster0.mongodb.net/yourdatabase?retryWrites=true&w=majority
  PORT=3000
```

Replace <username>, <password>, and yourdatabase with your MongoDB Atlas credentials and the name of your database. You can find these details in the MongoDB Atlas dashboard.

## Usage

1. Start the server:

```
  npm run dev
```

2. API Endpoints:

- GET /api/products: Retrieve a list of all products.
- GET /api/products/:id: Retrieve a product by its ID.
- POST /api/products: Create a new product.
- PUT /api/products/:id: Update an existing product.
- DELETE /api/products/:id: Delete a product.
