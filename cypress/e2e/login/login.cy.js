describe('Login Test', () => {
    it('successfully logs in', () => {
      //Arrange
      cy.visit('https://front.serverest.dev/login');
      
      //Act
      cy.get('#email').type('automation@email.com');
      cy.get('#password').type('123456');
      cy.get('button[type="submit"]').click();
      
      //Assert
      cy.url().should('include', '/home'); // Assumindo que a URL muda para '/dashboard' após o login bem-sucedido
    });
  });
  