import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible} from '../utils/driver';
import { HOME_PAGE } from '../pageobjects/home-page';
const addUserButton = HOME_PAGE.addNewAgentButton; 

When('The user clicks the add button', () => {
  elementIsVisible(addUserButton);
  clickElement(addUserButton);
  });
