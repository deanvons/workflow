describe('Basic Cypress Tests', () => {
  // 1. Visiting the page and checking basic elements
  it('should visit the page and verify the presence of elements', () => {
    cy.visit('http://127.0.0.1:5500/index.html'); // Replace with your actual path or URL

    // Check for the presence of an input field
    cy.get('#nameInput').should('exist');

    // Check for the presence of buttons
    cy.get('#alertBtn').should('exist');
    cy.get('#colorBtn').should('exist');
    cy.get('#toggleBtn').should('exist');
  });

  // 2. Testing input and alert functionality
  it('should show an alert when clicking the alert button with valid input', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // Enter a name in the input field
    cy.get('#nameInput').type('Cypress User');

    // Set up alert listener and check the message
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Hello, Cypress User');
    });

    // Click the button to trigger the alert
    cy.get('#alertBtn').click();
  });

  it('should show an alert when clicking the alert button with no input', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // Set up alert listener for the "Name is required" alert
    cy.on('window:alert', (alertText) => {
      expect(alertText).to.equal('Name is required');
    });

    // Click the alert button without entering any name
    cy.get('#alertBtn').click();
  });

  // 3. Testing background color change
  it('should change the background color when clicking the color button', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // Initially check the background color (should be default)
    cy.get('body').should('have.css', 'background-color', 'rgba(0, 0, 0, 0)'); // default color is transparent

    // Click the button to change the background color
    cy.get('#colorBtn').click();

    // Assert the background color has changed to lightblue
    cy.get('body').should('have.css', 'background-color', 'rgb(173, 216, 230)'); // lightblue in RGB
  });

  // 4. Testing visibility and DOM manipulation
  it('should toggle the visibility of the text', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // Initially, the text should be visible
    cy.get('#toggleText').should('be.visible');

    // Click the button to hide the text
    cy.get('#toggleBtn').click();

    // The text should now be hidden
    cy.get('#toggleText').should('not.be.visible');

    // Click the button again to show the text
    cy.get('#toggleBtn').click();

    // The text should be visible again
    cy.get('#toggleText').should('be.visible');
  });

  // 5. Testing link
  it('should go to profile page on link click', () => {
    cy.visit('http://127.0.0.1:5500/index.html');

    // Selects the anchor tag with the text 'Go to Profile'
    cy.contains('a', 'Go to another page').click();

    // Asserts that the pathname is exactly '/profile'
    cy.location('pathname').should('eq', '/profile.html');
  });
});
