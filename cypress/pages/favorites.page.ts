import { BasePage } from '@/pages/base.page';
import { ROUTES } from '@/constants/routes';
import { MESSAGES } from '@/constants/messages';

export class FavoritesPage extends BasePage {
  get emptyFavoritesMessage() {
    return cy.contains(MESSAGES.FAVORITES_PAGE.NO_FAVORITES);
  }

  navigate(): void {
    cy.visit(ROUTES.FAVORITES);
  }

  getProductCardById(id: string) {
    return cy.getByTestId(`favorite-${id}`);
  }

  deleteProductById(id: string): void {
    this.getProductCardById(id).getByTestIdWithin('delete').click();
  }
}

export const favoritesPage = new FavoritesPage();
