import { favoritesPage } from '@/pages/favorites.page';
import { favoritesApi } from '@/support/api/favorites.api';

describe('Feature: Favorite products', () => {
  context('Logged-in user', () => {
    beforeEach(() => {
      cy.login();
      favoritesApi.clearFavorites();
    });

    it('Logged-in user sees added product in favorites list', () => {
      cy.getAddedProductToFavorites().then((product) => {
        favoritesPage.navigate();
        favoritesPage.getProductCardById(product.id).should('be.visible');
      });
    });

    it('Logged-in user removes a product from favorites', () => {
      cy.getAddedProductToFavorites().then((product) => {
        favoritesPage.navigate();
        favoritesPage.getDeleteButtonByProductId(product.id).click();
        favoritesPage.getProductCardById(product.id).should('not.exist');
      });
    });

    it('User views an empty favorites list', () => {
      favoritesPage.navigate();
      favoritesPage.emptyFavoritesMessage.should('be.visible');
    });
  });
});
