# CAW Studios SDET Automation Assignment

This project contains an automation script for verifying the functionality of a dynamic table on the webpage [Dynamic Table](https://testpages.herokuapp.com/styled/tag/dynamic-table.html). The script is written in JavaScript using Selenium WebDriver and Node.js.

## Table of Contents

- [Project Description](#project-description)
- [Technologies Used](#technologies-used)
- [Prerequisites](#prerequisites)
- [Setup and Installation](#setup-and-installation)
- [How to Run](#how-to-run)
- [Test Scenario](#test-scenario)
- [Assertions](#assertions)
- [Project Structure](#project-structure)

## Project Description

The script automates the process of:

1. Navigating to the dynamic table page.
2. Clicking on the "Table Data" button to reveal the input box.
3. Inserting JSON data into the input box and refreshing the table.
4. Verifying the table’s populated data against the original input data.

## Technologies Used

- **Node.js**
- **Selenium WebDriver**
- **JavaScript**
- **ChromeDriver**

## Prerequisites

Before running this project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v12 or later)
- npm (comes with Node.js)
- Chrome browser

## Setup and Installation

1. Clone the repository:
   git clone https://github.com/your-username/CAW_studios-Automation-scripts.git

2. Navigate to the project directory:
   cd CAW_studios-Automation-scripts

3. Install the required dependencies:
   npm install

## How to Run

1. To execute the automation script, follow these steps:
2. Make sure Chrome is installed and up-to-date.

Run the following command:
node index.js

## Test Scenario

The automation script performs the following steps:

1. Navigates to the URL: Dynamic Table.
2. Clicks the "Table Data" button to display the input text box.
3. Inserts the following JSON data into the text box:
   [
   {"name" : "Bob", "age" : 20, "gender": "male"},
   {"name": "George", "age" : 42, "gender": "male"},
   {"name": "Sara", "age" : 42, "gender": "female"},
   {"name": "Conor", "age" : 40, "gender": "male"},
   {"name": "Jennifer", "age" : 42, "gender": "female"}
   ]
4. Clicks the "Refresh Table" button to update the table.
5. Asserts that the table's displayed data matches the original JSON input.

## Assertions

The script includes assertions to verify that the data displayed in the table matches the JSON data provided. The following fields are checked:

Name
Age
Gender
If the data does not match, the script will log the error and provide detailed information about which field failed.

## Project Structure

CAW_studios-Automation-scripts/
│
├── node_modules/ # Dependencies installed by npm
├── index.js # Main test script
├── package.json # Project configuration and dependencies
├── README.md # Project documentation (this file)
└── .gitignore # Git ignore file

### How to run:

1. **Clone the Repository**: Make sure you have the project stored in your local machine.
2. **Install Dependencies**: Run `npm install` to ensure that the required libraries are installed.
3. **Run the Script**: Use `node index.js` to execute the test case.
