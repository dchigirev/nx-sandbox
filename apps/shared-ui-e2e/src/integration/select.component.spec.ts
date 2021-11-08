describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=selectcomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-select').should('exist');
  });
});