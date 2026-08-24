import { productPage } from '@/pages/product.page';
import { favoritesApi } from '@/support/api/favorites.api';
import { MESSAGES } from '@/constants/messages';

describe('Feature: Actions with Chosen Product', () => {
  context('Logged-in user', () => {
    beforeEach(() => {
      cy.login();
      favoritesApi.clearFavorites();
    });

    it('Logged-in user adds a product to favorites', () => {
      cy.getProductForTesting().then((product) => {
        productPage.navigate(product.id);
        productPage.addToFavoritesButton.click();

        productPage.toast.toastContainer
          .should('be.visible')
          .and(
            'contain.text',
            MESSAGES.PRODUCT_PAGE.PRODUCT_ADDED_TO_FAVORITES,
          );
      });
    });
  });

  context('Guest user', () => {
    beforeEach(() => {
      cy.clearAllCookies();
      cy.clearAllLocalStorage();
      cy.clearAllSessionStorage();
    });

    it('Guest user cannot add products to favorites', () => {
      cy.getProductForTesting().then((product) => {
        productPage.navigate(product.id);
        productPage.addToFavoritesButton.click();

        productPage.toast.toastContainer
          .should('be.visible')
          .and(
            'contain.text',
            MESSAGES.PRODUCT_PAGE.ERRORS.UNAUTHORIZED_TO_ADD_TO_FAVORITES,
          );
      });
    });
  });
});
