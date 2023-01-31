export const clickElement = (selector) => {
    getElement(selector).should('not.be.disabled').click();
    return this;
  };
  
  export const forceClickElement = (selector) => {
    cy.wait(1000);
    getElement(selector).click({ force: true })
    return this;
  };
  
  export const clickElementByContains = (selector, label) => {
    return cy.contains(selector,label).click();
  };
  
  export const forceEnter = (selector) => {
    cy.wait(1000);
    getElement(selector).type('{enter}')
  };
  
  export const elementIsVisible = (selector) => {
    return getElement(selector).should('exist').should('be.visible');
  };
  
  export const elementTextIncludes = (selector, text) => {
    getElement(selector).should('contain', text);
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