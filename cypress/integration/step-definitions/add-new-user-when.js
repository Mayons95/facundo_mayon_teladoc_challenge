import { When } from 'cypress-cucumber-preprocessor/steps';
import { clickElement, elementIsVisible} from '../utils/driver';
import { HOME_PAGE } from '../pageobjects/home-page';
const addUserButton = HOME_PAGE.addNewAgentButton; 
//Step that opens the add new user form
When('The user clicks the add button', () => {
  //Checking if the element it's visible
  elementIsVisible(addUserButton);
  //Clicking the element
  clickElement(addUserButton);
  });
