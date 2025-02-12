# Reward Points Calculation App

This application calculates reward points for customers based on their monthly transactions. 

- 2 points for every dollar spent over $100 on each transaction
- 1 points for every dollar spent over $50 on each transaction.
- No points for below $50

The application takes customer transactions on a monthly basis and calculates the total points rewarded by each customer for each month as well as their total points.


# Examples

 Transaction of $140
 - The first $50 earns no points
 - The  $50 earns 50 points (1 point for every dollar from 50 to 100 )
 - The remaining $40 earns 80 points (2 points for every dollar above 100)
   Total points => 50+80=130 points

 Transaction of $75
  - The first $50 earns no points
 - The remaining $25 earns 25 points(1 point for every dollar from 50 to 100 ).
  Total points =>25 points

Transaction of $40
 - No points are awarded as the amount is below $50.
  Total points =>25 points


## Features

- Customer Points Calculation:
 For each customer, the application calculates points for each transaction and also calculates monthly transactions.
- Monthly and Total Points: The app displays points per month as well as the cumulative total points for all months.
- Transaction Data: The app reads transaction data from a JSON file (transactions.json) and calculate points for each customer.


## How to Run the Application

1. Clone the repository:
   git clone https://github.com/your-repo/reward-points-app.git
   cd reward-points-app

2. Install dependencies:
    npm install axios

3. Running the Application:
    npm start

    This will start a local server. Open your browser and visit:
    http://localhost:3000

4. Running the test cases:
    npm test




