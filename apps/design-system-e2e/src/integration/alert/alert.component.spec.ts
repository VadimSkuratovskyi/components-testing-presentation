describe('design-system', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-alert--alert&viewMode=story'));
  it('should render the component', () => {
    cy.get('presentation-alert').should('exist');
  });

  it('should show alert', () => {
    cy.get('.btn-primary').click()
    cy.get('.alert-success').should('be.visible');
  });

  it('should show success alert', () => {
    cy.get('.btn-primary').click()
    cy.get('.alert-success').should('be.visible');
  });
  
  it('should show error alert', () => {
    cy.get('.alert-danger').should('be.visible');
  });
});