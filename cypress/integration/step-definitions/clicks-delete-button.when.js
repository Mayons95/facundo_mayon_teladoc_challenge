import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible} from '../utils/driver';
import { HOME_PAGE } from '../pageobjects/home-page';
const deleteUserButton = HOME_PAGE.deleteButton; 
const okButton = HOME_PAGE.okButton;

When('The user clicks the delete button', () => {
  elementIsVisible(deleteUserButton);
  clickElement(deleteUserButton);
  elementIsVisible(okButton);
  clickElement(okButton);
  });
