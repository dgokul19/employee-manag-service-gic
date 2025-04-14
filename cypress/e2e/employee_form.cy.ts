import { fillFormValues } from "../support/formFill";

describe('Employee Form Page Tests', () => {
    beforeEach(() => {
        cy.visit('/');
        cy.get('[data-testid="add-button"]').click();
    });

    afterEach(() => {
        cy.screenshot();
    });

    it('loads the homepage and redirects to Add Employee Page', () => {
        cy.url().should('include', '/employee/add') // => true
        cy.root().should('include.text', 'Add Employee'); 
    });
    it('loads the homepage and redirects to Add Employee Page', () => {
        cy.get('[data-testid="submitBtn"]').click();
        cy.contains('First name is required'); 
        cy.root().should('include.text', 'First name is required');
        cy.root().should('include.text', 'Last name is required');
        cy.root().should('include.text', 'Email address is required');
        cy.root().should('include.text', 'Phone number is required');
        cy.root().should('include.text', 'Date of birth is required');
        cy.root().should('include.text', 'Joining date is required');
        cy.root().should('include.text', 'Gender is required');
    });

    it('Add Employee - Validation on allthe fields', () => {
        cy.get('[data-testid="submitBtn"]').click();
        cy.root().should('include.text','First name is required'); 

        cy.get('[name="firstName"]').type('Gokul');
        cy.root().should('include.text','Minimum character length is 6'); 

        cy.get('[name="firstName"]').type('an Abc');
        cy.root().should('include.text','Maximum character length is 10'); 

        cy.get('[name="firstName"]').type('{backspace}{backspace}{backspace}{backspace}');
        cy.get('[name="firstName"]').should('not.include.text', 'Maximum character length is 10')

        // Testcases for last name
        cy.get('[name="lastName"]').type('Gokul');
        cy.root().should('include.text','Minimum character length is 6'); 

        cy.get('[name="lastName"]').type('an Abc');
        cy.root().should('include.text','Maximum character length is 10'); 

        cy.get('[name="lastName"]').type('{backspace}{backspace}{backspace}{backspace}');
        cy.root().should('not.include.text', 'Maximum character length is 10')

        // Testcases for EmailAddress
        cy.get('[name="emailAddress"]').type('dgokul19');
        cy.root().should('include.text','Invalid email address'); 

        cy.get('[name="emailAddress"]').type('@gmail.com');
        cy.root().should('not.include.text', 'Invalid email address');

        // Testcases for Phone number
        cy.get('[name="phoneNumber"]').type('+6');
        cy.root().should('include.text','Please enter a valid singapore number'); 

        cy.get('[name="phoneNumber"]').type('589122468');
        cy.root().should('not.include.text', 'Please enter a valid singapore number');

        // Testcases for Date of birth & Joining date
        cy.get('[name="dob"]').type('2024-10-10');
        cy.get('[name="joinedDate"]').type('2024-10-06');
        cy.root().should('include.text','Joining date must be after date of birth'); 

        cy.get('[name="joinedDate"]').clear();
        cy.get('[name="joinedDate"]').type('2024-10-12');
        cy.root().should('not.include.text', 'Joining date must be after date of birth');

        cy.get('[name="gender"]')
            .first()
            .click()
            .trigger('change')
        cy.root().should('not.include.text','Gender is required'); 
    });
   

    it('Add Employee - Validate Submit button', () => {
        fillFormValues();
        cy.get('[data-testid="submitBtn"]').click();
        cy.root().should('include.text', 'New Employee has been created')
    })
  
    it('Add Employee - List should have new record', () => {
        fillFormValues();
        cy.get('[data-testid="submitBtn"]').click();
        cy.url().should('include', '/employee/') // => true
        cy.root().should('include.text', 'Gokulan')
    })
});