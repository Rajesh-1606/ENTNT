import React from 'react';

const Products = () => {
  // Mock data
  const products = [
    { id: 1, name: 'Product 1', category: 'Category 1', price: 10, stockQuantity: 100 },
    { id: 2, name: 'Product 2', category: 'Category 2', price: 20, stockQuantity: 50 },
    { id: 3, name: 'Product 3', category: 'Category 3', price: 30, stockQuantity: 60 },
    { id: 4, name: 'Product 4', category: 'Category 4', price: 40, stockQuantity: 10 },
    { id: 5, name: 'Product 5', category: 'Category 5', price: 50, stockQuantity: 90 },
    { id: 6, name: 'Product 6', category: 'Category 6', price: 60, stockQuantity: 30 },
    { id: 7, name: 'Product 7', category: 'Category 7', price: 70, stockQuantity: 20 },
    { id: 8, name: 'Product 8', category: 'Category 8', price: 80, stockQuantity: 10 },
    { id: 9, name: 'Product 9', category: 'Category 9', price: 90, stockQuantity: 70 },
    { id: 10, name: 'Product 10', category: 'Category 10', price: 100, stockQuantity: 30 },
    // Add more mock data as needed
  ];

  // Function to handle editing a product
  const handleEdit = (id) => {
    // Implement your logic for editing a product here
    console.log(`Editing product with id ${id}`);
  };

  // Function to handle deleting a product
  const handleDelete = (id) => {
    // Implement your logic for deleting a product here
    console.log(`Deleting product with id ${id}`);
  };

  return (
    <div style={styles.productsContainer}>
      <h1>Products Management</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Category</th>
            <th style={styles.tableHeader}>Price</th>
            <th style={styles.tableHeader}>Stock Quantity</th>
            <th style={styles.tableHeader}>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td style={styles.tableCell}>{product.name}</td>
              <td style={styles.tableCell}>{product.category}</td>
              <td style={styles.tableCell}>{product.price}</td>
              <td style={styles.tableCell}>{product.stockQuantity}</td>
              <td style={styles.tableCell}>
                <button style={styles.button} onClick={() => handleEdit(product.id)}>Edit</button>
                <button style={{ ...styles.button, backgroundColor: '#dc3545' }} onClick={() => handleDelete(product.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Inline CSS styles
const styles = {
  productsContainer: {
    margin: '20px',
    backgroundColor: '#f9f9f9',
    backgroundImage: 'url("bg.jpg")', // Adjust the path as needed
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
  },
  tableHeader: {
    padding: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#f2f2f2',
    textAlign: 'left',
  },
  tableCell: {
    padding: '10px',
    border: '1px solid #ddd',
    textAlign: 'left',
  },
  button: {
    padding: '5px 10px',
    border: 'none',
    backgroundColor: '#007bff',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '5px',
    marginRight: '5px',
  },
};

export default Products;
