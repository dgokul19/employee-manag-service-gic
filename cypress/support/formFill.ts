export function fillFormValues(){

    cy.get('[name="firstName"]').type('Gokulan');

    cy.get('[name="lastName"]').type('Dhatchina');

    // Testcases for EmailAddress
    cy.get('[name="emailAddress"]').type('dgokul19@gmail.com');
    // Testcases for Phone number
    cy.get('[name="phoneNumber"]').type('+6589122468');

    // Testcases for Date of birth & Joining date
    cy.get('[name="dob"]').type('2024-10-10');
    cy.get('[name="joinedDate"]').type('2024-10-12');

    cy.get('[name="gender"]')
        .first()
        .click()
        .trigger('change');
}