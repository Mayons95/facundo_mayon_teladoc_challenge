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
  
  export const forceCheckElement = (selector) => {
    getElement(selector).check({ force: true })
    return this;
  };
  
  export const forceEnter = (cssSelector) => {
    cy.wait(1000);
    getElement(cssSelector).type('{enter}')
  };
  
  export const forceClickElementByXpath = (xpathSelector) => {
    cy.wait(1000);
    getElementByXpath(xpathSelector).click({ force: true })
    return this;
  };
  
  export const elementIsNotVisible = (selector) => {
    return getElement(selector).should('not.exist');
  };
  
  export const elementIsVisible = (selector) => {
    return getElement(selector).should('exist').should('be.visible');
  };
  
  export const elementTextIncludes = (selector, text) => {
    getElement(selector).should('contain', text);
  };
  
  export const cleanAndfillField = (selector, text) => {
    getElement(selector).clear().type(text);
    return this;
  };
  
  export const fillField = (selector, text) => {
    getElement(selector).type(text);
    return this;
  };
  
  export const getElement = (selector) => {
    return cy.get(selector, { timeout: 18000 });
  };

  export const navigate = (url) => {
    cy.visit(url);
  };
//funcion nueva ! ver si borro
  // export const getDataFromFixture = (filename,requested) =>{
  //   const searchData =''
  //   cy.fixture(filename).then((variable)=>{
  //     searchData = variable.requested
  //     return searchData
  //     });

  // }