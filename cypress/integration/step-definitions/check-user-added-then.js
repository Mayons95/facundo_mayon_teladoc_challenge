import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('The user its displayed', () => {
    cy.fixture('user-data').then((user)=>{
        //Getting the user-name column values
        cy.get('tbody').find('td:nth-child(3)').then((els) => {
            //Mapping the text content of the column on a array (names)
            let names= Cypress._.map(Cypress.$.makeArray(els), 'innerText')
            //Searching that the array include the user name included on the fixture file
            expect(names).to.include.members([user.userName])
        });
    })
})