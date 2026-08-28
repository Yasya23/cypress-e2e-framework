import { BasePage } from '@/pages/base.page';
import { ROUTES } from '@/constants/routes';

export class ProductPage extends BasePage {
  get addToFavoritesButton() {
    return cy.getByTestId('add-to-favorites');
  }

  get productTitle() {
    return cy.getByTestId('product-title');
  }

  navigate(productID: string): void {
    cy.visit(ROUTES.PRODUCT(productID));
  }
}

export const productPage = new ProductPage();
