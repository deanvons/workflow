describe('no.wikipedia.org', function () {
  it('can search for Noroff', function () {
    cy.visit('https://no.wikipedia.org');
    cy.get('input#searchInput').type('Noroff{enter}', { delay: 500 });
    cy.get('h1').contains('Noroff');
  });
});
