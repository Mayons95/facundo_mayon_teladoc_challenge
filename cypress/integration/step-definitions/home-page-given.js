import { Given } from 'cypress-cucumber-preprocessor/steps';
import { navigate} from '../utils/driver';

Given('The admin user is on the home page', () => {
  navigate('https://google.com.ar');
  });

