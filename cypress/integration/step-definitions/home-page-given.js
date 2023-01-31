import { Given } from 'cypress-cucumber-preprocessor/steps';
import { navigate} from '../utils/driver';
//Navigate to the main page
Given('The admin user is on the home page', () => {
  navigate('https://www.way2automation.com/angularjs-protractor/webtables/');
  });

