import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible, fillField, getDataFromFixture} from '../utils/driver';
import { HOME_PAGE } from '../pageobjects/home-page'; 
const firstName = HOME_PAGE.firstNameField;
const lastName = HOME_PAGE.lastNameField;
const userName = HOME_PAGE.userNameField;
const password = HOME_PAGE.passwordField;

When('The user fills the requested user data', () => {
  elementIsVisible(firstName);
  clickElement(firstName);
  cy.fixture('user-data').then((user)=>{
    fillField(firstName,user.name);
    });  
  clickElement(lastName);
  cy.fixture('user-data').then((user)=>{
    fillField(lastName,user.lastName);
    });
  clickElement(userName); 
  cy.fixture('user-data').then((user)=>{
    fillField(userName,user.userName);
    });
  clickElement(password);
  cy.fixture('user-data').then((user)=>{
    fillField(password,user.password);
    });
  });
