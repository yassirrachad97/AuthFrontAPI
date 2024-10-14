describe('Register Functionality', () => {
  it('should successfully register a new user', () => {
      cy.visit('http://localhost:5173/register');  

      cy.get('input[placeholder="userName"]').type('JohnDoe');
      cy.get('input[placeholder="Email"]').type('john.doe@example.com');
      cy.get('input[placeholder="password"]').type('password123');
      cy.get('input[placeholder="phoneNumber"]').type('1234567890');

      cy.contains('Envoyer').click();

  });

  it('should show an error for an already registered user', () => {
      cy.visit('http://localhost:5173/register');  

      cy.get('input[placeholder="userName"]').type('JohnDoe');
      cy.get('input[placeholder="Email"]').type('existing@example.com');
      cy.get('input[placeholder="password"]').type('password123');
      cy.get('input[placeholder="phoneNumber"]').type('1234567890');

      cy.contains('Envoyer').click();

     
  });
});
