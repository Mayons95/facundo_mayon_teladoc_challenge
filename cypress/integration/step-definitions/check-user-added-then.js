import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('The user its displayed', () => {
    cy.fixture('user-data').then((user)=>{
        cy.get('tbody').find('td:nth-child(3)').then((els) => {
            let names= Cypress._.map(Cypress.$.makeArray(els), 'innerText')
            expect(names).to.include.members([user.userName])
        });
    })
})