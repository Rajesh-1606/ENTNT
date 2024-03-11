// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock data for total number of products and orders
  const totalNumberOfProducts = 10;
  const totalNumberOfOrders = 10;

  // Styles for container, metrics summary, and navigation links
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    backgroundColor: '#f9f9f9',
    backgroundImage: 'url("bg.jpg")', // Adjust the path as needed // Add your image path here
    backgroundSize: 'cover', // This will ensure that your background covers the entire container
    backgroundRepeat: 'no-repeat', // This will prevent the image from repeating
    minHeight: '100vh', // Ensure that the container takes up at least the full height of the viewport
    fontSize: '24px', // Increase the font size of the Dashboard title
  };

  const metricsStyle = {
    marginBottom: '20px',
  };

  const linkStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    color: '#333',
    padding: '8px 12px',
    backgroundColor: '#66CDAA',
    borderRadius: '5px',
  };

  return (
    <div style={containerStyle}>
      <h1>Dashboard</h1>
      <div style={metricsStyle}>
        <p>Total number of products: {totalNumberOfProducts}</p>
        <p>Total number of orders: {totalNumberOfOrders}</p>
      </div>
      <div>
        <Link to="/products" style={linkStyle}>Manage Products</Link>
        <Link to="/orders" style={linkStyle}>Manage Orders</Link>
      </div>
    </div>
  );
}

export default Dashboard;
