import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible} from '../utils/driver';
import { HOME_PAGE } from '../pageobjects/home-page';
//Declaring constants that take the value of the corresponding selectors using the pattern page object
const deleteUserButton = HOME_PAGE.deleteButton; 
const okButton = HOME_PAGE.okButton;
//Step that deletes 'novak' user
When('The user clicks the delete button', () => {
  //Checking if the element it's visible
  elementIsVisible(deleteUserButton);
  //Clicking the element
  clickElement(deleteUserButton);
  elementIsVisible(okButton);
  clickElement(okButton);
  });
