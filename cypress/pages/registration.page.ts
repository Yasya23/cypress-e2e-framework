import { BasePage } from '@/pages/base.page';
import { RegisterData } from '@/types/auth.type';
import { ROUTES } from '@/constants/routes';

export class RegisterPage extends BasePage {
  get firstNameInput() {
    return cy.getByTestId('first-name');
  }

  get lastNameInput() {
    return cy.getByTestId('last-name');
  }

  get dobInput() {
    return cy.getByTestId('dob');
  }

  get streetInput() {
    return cy.getByTestId('street');
  }

  get houseNumberInput() {
    return cy.getByTestId('house_number');
  }

  get cityInput() {
    return cy.getByTestId('city');
  }

  get stateInput() {
    return cy.getByTestId('state');
  }

  get postalCodeInput() {
    return cy.getByTestId('postal_code');
  }

  get phoneInput() {
    return cy.getByTestId('phone');
  }

  get emailInput() {
    return cy.getByTestId('email');
  }

  get passwordInput() {
    return cy.getByTestId('password');
  }

  get countrySelect() {
    return cy.getByTestId('country');
  }

  get submitButton() {
    return cy.getByTestId('register-submit');
  }

  navigate(): void {
    cy.visit(ROUTES.REGISTER);
  }

  fillForm(data: RegisterData): void {
    if (data.firstName) this.firstNameInput.clear().type(data.firstName);
    if (data.lastName) this.lastNameInput.clear().type(data.lastName);
    if (data.dateOfBirth) this.dobInput.clear().type(data.dateOfBirth);
    if (data.street) this.streetInput.clear().type(data.street);
    if (data.houseNumber)
      this.houseNumberInput.clear().type(String(data.houseNumber));
    if (data.city) this.cityInput.clear().type(data.city);
    if (data.state) this.stateInput.clear().type(data.state);
    if (data.postalCode) this.postalCodeInput.clear().type(data.postalCode);
    if (data.phoneNumber) this.phoneInput.clear().type(data.phoneNumber);
    if (data.email) this.emailInput.clear().type(data.email);
    if (data.password) this.passwordInput.clear().type(data.password);
    if (data.country) this.countrySelect.select(data.country);
  }

  register(data: RegisterData): void {
    this.fillForm(data);
    this.submitButton.click();
  }
}

export const registerPage = new RegisterPage();
