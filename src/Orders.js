import React from 'react';

const Orders = () => {
  // Mock data
  const orders = [
    { id: 1, customerName: 'Customer 1', orderDate: '2024-03-01', status: 'Pending' },
    { id: 2, customerName: 'Customer 2', orderDate: '2024-03-02', status: 'Completed' },
    { id: 3, customerName: 'Customer 3', orderDate: '2024-03-03', status: 'Completed' },
    { id: 4, customerName: 'Customer 4', orderDate: '2024-03-04', status: 'Completed' },
    { id: 5, customerName: 'Customer 5', orderDate: '2024-03-05', status: 'Pending' },
    { id: 6, customerName: 'Customer 6', orderDate: '2024-03-06', status: 'Completed' },
    { id: 7, customerName: 'Customer 7', orderDate: '2024-03-07', status: 'Pending' },
    { id: 8, customerName: 'Customer 8', orderDate: '2024-03-08', status: 'Completed' },
    { id: 9, customerName: 'Customer 9', orderDate: '2024-03-09', status: 'Completed' },
    { id: 10, customerName: 'Customer 10', orderDate: '2024-03-10', status: 'Pending' },
    // Add more mock data as needed
  ];

  return (
    <div style={styles.ordersContainer}>
      <h1 style={styles.heading}>Orders Management</h1>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.tableHeader}>Order ID</th>
            <th style={styles.tableHeader}>Customer Name</th>
            <th style={styles.tableHeader}>Order Date</th>
            <th style={styles.tableHeader}>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map(order => (
            <tr key={order.id}>
              <td style={styles.tableCell}>{order.id}</td>
              <td style={styles.tableCell}>{order.customerName}</td>
              <td style={styles.tableCell}>{order.orderDate}</td>
              <td style={{ ...styles.tableCell, ...getStatusStyle(order.status) }}>{order.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Inline CSS styles
const styles = {
  ordersContainer: {
    margin: '20px',
    backgroundColor: '#f9f9f9',
    backgroundImage: 'url("bg.jpg")', // Adjust the path as needed // Add your image path here
    backgroundSize: 'cover', // This will ensure that your background covers the entire container
    backgroundRepeat: 'no-repeat',
  },
  heading: {
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
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
};

// Function to define status-specific styles
const getStatusStyle = status => {
  switch (status) {
    case 'Pending':
      return { backgroundColor: '#CD5C5C', color: 'fff' }; // Yellow
    case 'Completed':
      return { backgroundColor: '#28a745', color: '#fff' }; // Green
    default:
      return {}; // Default style
  }
};

export default Orders;
