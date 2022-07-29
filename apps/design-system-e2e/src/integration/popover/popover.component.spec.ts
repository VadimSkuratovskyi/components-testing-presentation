describe('design-system', () => {
  beforeEach(() => cy.visit('/iframe.html?args=&id=components-popover--popover&viewMode=story'));
  it('should render the component', () => {
    cy.get('presentation-popover').should('exist');
  });
});