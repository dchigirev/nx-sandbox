describe('shared-ui', () => {
  beforeEach(() => cy.visit('/iframe.html?id=inputcomponent--primary'));
  it('should render the component', () => {
    cy.get('ui-input').should('exist');
  });
});