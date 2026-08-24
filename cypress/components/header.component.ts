export class HeaderComponent {
  get signInLink() {
    return cy.getByTestId('nav-sign-in');
  }

  get dropdownMenuButton() {
    return cy.getByTestId('nav-menu');
  }

  get accountMenuLink() {
    return this.dropdownMenuButton.getByTestIdWithin('nav-my-account');
  }

  get favoritesLink() {
    return this.dropdownMenuButton.getByTestIdWithin('nav-my-favorites');
  }
}
