# Margin Mate – Functional Specification
# By: Kari Ganson

# MarginMate is a full-stack MERN application I am building to help resellers keep track of their inventory, costs, and overall profit. The main goal of this app is to give users a simple and organized way to manage the items they buy and resell, while clearly seeing how much money they are actually making.
 
# Core Features
This application will allow users to:

•	Add new inventory items with important details such as item name, category, purchase cost, listing price, sale price, fees, and shipping cost 
•	View a full list of all inventory items in one place 
•	Click on an item to see more detailed information 
•	Update item details and change the status (for example: Listed or Sold) 
•	Delete items from the inventory if needed 
•	Automatically calculate profit based on the numbers entered 
 
# Pages / Views
The app will include the following pages:

1.	Dashboard
This page will show a quick overview of the user’s activity, including things like total profit, number of items, and how many items have been sold. It will also include simple charts to help visualize this data. 

2.	Inventory Page
This page will display all items in a clean layout, making it easy to browse and select individual items. 

3.	Add Item Page
This page will include a form where users can enter and save new inventory items.

4.	Item Details Page
This page will show all the information for a single item, along with options to edit or delete it.

5.	Settings Page
This page will be used for basic user settings and preferences (placeholder for now). 
 
# Technology Stack
The technologies I plan to use for this project include:

•	React for the frontend 
•	Node.js and Express for the backend 
•	MongoDB for the database 
•	Axios for handling API requests 
•	React Router for navigation 
•	Bootstrap for styling 
•	Recharts for displaying data visually 
 
# Data Structure 
Each inventory item will store the following information:

•	Item Name 
•	Category 
•	Purchase Cost 
•	Listing Price 
•	Sale Price 
•	Platform Fees 
•	Shipping Cost 
•	Status 
•	Notes 
•	Image URL (optional) 
 
# API Integration
This application may include a third-party API to demonstrate external data fetching, but the main focus will be on storing and managing user data through MongoDB.
 

# GitHub Repo
https://github.com/GansonKari-FS/MarginMate.git
