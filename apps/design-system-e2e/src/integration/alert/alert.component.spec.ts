describe('design-system', () => {
  beforeEach(() => cy.visit('/iframe.html?id=components-alert--alert&viewMode=story'));
  it('should render the component', () => {
    cy.get('presentation-alert').should('exist');
  });

  it('should show aler', () => {
    cy.get('.btn-primary').click()
    cy.get('.alert-success').should('be.not.visible');
  });

  it('should show success aler', () => {
    cy.get('.btn-primary').click()
    cy.get('.alert-success').should('be.visible');
  });
  
  it('should show error aler', () => {
    cy.get('.btn-danger').click()
    cy.get('.alert-danger').should('be.visible');
  });

});