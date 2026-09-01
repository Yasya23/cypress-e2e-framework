import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { registerPage } from '@/pages/registration.page';
import { loginPage } from '@/pages/login.page';
import { generateRegisterData } from '@/data/auth.data';
import { ROUTES } from '@/constants/routes';
import { RegisterData, Credentials } from '@/types/auth.type';

let registerData: RegisterData;
let credentials: Credentials;

Given('the user is on the {string} page', (pageName: string) => {
  if (pageName === 'Sign in') {
    loginPage.navigate();
  } else if (pageName === 'Registration') {
    registerPage.navigate();
  }
});

// --- Registration ---

Given('the user has no account', () => {
  registerData = generateRegisterData();
});

When('the user enters their valid credentials', () => {
  registerPage.fillForm(registerData);
});

When('the user submits the register form', () => {
  registerPage.submitButton.click();
});

Then('the user is redirected to the Login page', () => {
  cy.url().should('include', ROUTES.LOGIN);
});

// --- Sign-in ---

Given(
  'the user has a registered account with a valid email and password',
  () => {
    cy.env(['USER_EMAIL', 'USER_PASSWORD']).then(
      ({ USER_EMAIL, USER_PASSWORD }) => {
        credentials = { email: USER_EMAIL, password: USER_PASSWORD };
      },
    );
  },
);

When('the user enters their email and password', () => {
  loginPage.fillForm(credentials);
});

When('the user submits the sign-in form', () => {
  loginPage.submitButton.click();
});

Then('the user is redirected to the {string} page', (pageName: string) => {
  if (pageName === 'My account') {
    cy.url().should('include', ROUTES.ACCOUNT);
  }
});
