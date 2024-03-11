Simplified ERP System with React


Introduction

This project is a simple front-end application for managing products and orders. It is built using React.js and React Router for navigation. The project consists of three main components:
Dashboard: This component serves as the landing page of the application. It provides a summary of the total number of products and orders, along with links to manage products and orders.
Products: This component allows users to view a list of products, including their name, category, price, and stock quantity. Users can also edit or delete individual products.
Orders: This component displays a list of orders, showing details such as the customer name, order date, and status (pending or completed).
The project uses mock data to simulate product and order information. Inline CSS styles are used to customize the appearance of the components, including background images and button styles.
Overall, this front-end application provides a user-friendly interface for managing products and orders, making it easy for users to track inventory and monitor sales.
Provide a brief overview of your front-end application, its purpose, and its main features.





Prerequisites

Node.js
npm or Yarn
Modern web browser
Make sure to have these prerequisites installed on your system before proceeding with the setup and running of the React front-end application.




Usage

The usage of the components Dashboard, Orders, and Products within your React application involves rendering them at specific routes defined in your App component. Here's how you can use them:
Dashboard Component:
The Dashboard component is rendered when the root path / is matched. This means it will be displayed when users visit the homepage of your application.
It provides an overview of metrics such as total number of products and orders, along with navigation links to manage products and orders.
Orders Component:
The Orders component is rendered when the /orders path is matched. This means it will be displayed when users visit the /orders route.
It displays a list of orders fetched from mock data and presents them in a tabular format with details like order ID, customer name, order date, and status.
Products Component:
The Products component is rendered when the /products path is matched. This means it will be displayed when users visit the /products route.
It displays a list of products fetched from mock data and presents them in a tabular format with details like product name, category, price, stock quantity, and action buttons for editing and deleting.




![Screenshot (4)](https://github.com/Rajesh-1606/ENTNT/assets/110927579/f53b23df-a0ec-4f81-b968-4580db947011)
![Screenshot (3)](https://github.com/Rajesh-1606/ENTNT/assets/110927579/59a9a343-b3b9-44da-a0e5-0bbc1786d0fa)
![Screenshot (2)](https://github.com/Rajesh-1606/ENTNT/assets/110927579/da44c0f7-322b-4b1e-8cd3-efdfe84190c4)


