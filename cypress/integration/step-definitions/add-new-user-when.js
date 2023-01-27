import { Then } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible} from '../utils/driver';
import { HOME_PAGE } from '../pageobjects/home-page';
const addUserButton = HOME_PAGE.addNewAgentButton; 

Then('The user click on the adds button', () => {
  elementIsVisible(addUserButton);
  clickElement(addUserButton);
  });
