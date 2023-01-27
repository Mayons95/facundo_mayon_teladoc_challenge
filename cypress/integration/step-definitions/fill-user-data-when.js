import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible, fillField} from '../utils/driver';
import { HOME_PAGE } from '../pageobjects/home-page'; 
const firstName = HOME_PAGE.firstNameField;
const lastName = HOME_PAGE.lastNameField;
const userName = HOME_PAGE.userNameField;
const password = HOME_PAGE.passwordField;

When('The user fills the requested user data', () => {
  elementIsVisible(firstName);
  clickElement(firstName);
  cy.fixture('user-data').then((user)=>{
    fillField(firstName,user.name)
    });
//   fillField(firstName,name);
//   clickElement(lastName);
//   fillField(lastName,dLastName);
//   clickElement(userName)
//   fillField(userName,dUserName)
//   clickElement(password);
//   fillField(password, dPassword);
  });
