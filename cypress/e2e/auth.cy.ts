import { registerPage } from '@/pages/registration.page';
import { loginPage } from '@/pages/login.page';
import { generateRegisterData } from '@/data/auth.data';
import { ROUTES } from '@/constants/routes';

describe('Feature: User Authentication', () => {
  it('User registers a new account successfully', () => {
    registerPage.navigate();

    const registerData = generateRegisterData();
    registerPage.register(registerData);

    cy.url().should('include', ROUTES.LOGIN);
  });

  it('User logs in with valid credentials', () => {
    loginPage.navigate();

    cy.env(['USER_EMAIL', 'USER_PASSWORD']).then(
      ({ USER_EMAIL, USER_PASSWORD }) => {
        loginPage.login({ email: USER_EMAIL, password: USER_PASSWORD });

        cy.url().should('include', ROUTES.ACCOUNT);
      },
    );
  });
});
