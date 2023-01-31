import { Then } from 'cypress-cucumber-preprocessor/steps';
//Step that checks if the deleted user is not displayed on the table
Then('The user its not displayed anymore', () => {
        //Getting the user-name column values
        cy.get('tbody').find('td:nth-child(3)').then((els) => {
            //Mapping the text content of the column on a array (names)
            let names= Cypress._.map(Cypress.$.makeArray(els), 'innerText')
            //Searching that the array does not include novak value
            expect(names).to.not.include.members(['novak'])
    })
})