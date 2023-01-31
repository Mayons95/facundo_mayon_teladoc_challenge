import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('The user its not displayed anymore', () => {
        cy.get('tbody').find('td:nth-child(3)').then((els) => {
            let names= Cypress._.map(Cypress.$.makeArray(els), 'innerText')
            expect(names).to.not.include.members(['novak'])
    })
})
