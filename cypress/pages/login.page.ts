import { BasePage } from '@/pages/base.page';
import { LoginData } from '@/types/auth.type';
import { ROUTES } from '@/constants/routes';

export class LoginPage extends BasePage {
  get emailInput() {
    return cy.getByTestId('email');
  }

  get passwordInput() {
    return cy.getByTestId('password');
  }

  get submitButton() {
    return cy.getByTestId('login-submit');
  }

  navigate(): void {
    cy.visit(ROUTES.LOGIN);
  }

  fillForm({ email, password }: LoginData): void {
    this.emailInput.clear().type(email);
    this.passwordInput.clear().type(password);
  }
}

export const loginPage = new LoginPage();
