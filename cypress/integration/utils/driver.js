export const clickElement = (selector) => {
    getElement(selector).should('not.be.disabled').click();
    return this;
  };

  export const elementIsVisible = (selector) => {
    return getElement(selector).should('exist').should('be.visible');
  };
  
  export const fillField = (selector, text) => {
    getElement(selector).type(text);
    return this;
  };

  export const navigate = (url) => {
    cy.visit(url);
  };

  export const getElement = (selector) => {
    return cy.get(selector, { timeout: 18000 });
  };
  