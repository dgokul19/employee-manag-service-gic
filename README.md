
# Employee Managment System

Employee Managment System application with features to add/edit/view/delete the employee.

## Prerequistes
Before installing the Banking App, ensure that your system meets the following requirements:

- Node.js (v14 or later)
- npm / yarn  
- Git



## Installation

Follow these steps to install the Banking App.

Step 1: Clone the Repository

```bash
    git clone https://github.com/dgokul19/employee-manag-service-gic.git
```
Alternatively, you can download the zip file from the repository and extract it to your local machine.

Step 2: Install Dependencies

Once you have the project files, open a terminal/command prompt and navigate to the project directory. Run the following command to install all required dependencies:

```bash
    yarn  
    -------or------------
    npm install
```
This will install the necessary libraries and packages specified in the package.json file.


Step 3: Run Application

Once all the dependencies has been installed,  Run the following command in terminal under same directory.

```bash
    yarn dev
```

This will run the application in your local machine:

visit **http://localhost:5173/**



## Tech Stack

**Client:** 
```bash
    React/Typescript - Core Setup,
    CSS Modules / Sass - Styles, 
    Redux Toolkit - State Managment
    React-Router - Navigation
    Cypress- E2E Test cases
    React Testing Library- Unit Test cases

    Data Integration -  Used Browser Session storage
```


## Unit Tests

To run Unit Test, Please do the following command in your terminal

```bash
    npm run test
```



## E2E Tests ( Cypress )

To run Unit Test, Please do the following command in your terminal

```bash
    npm run cy:run - for headless mode
    npm run cy:open - for normal mode
```
