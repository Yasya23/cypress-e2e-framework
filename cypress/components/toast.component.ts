export class ToastComponent {
  get toastContainer() {
    return cy.get('.toast-container, .alert');
  }
}
