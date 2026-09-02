import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { productPage } from '@/pages/product.page';
import { MESSAGES } from '@/constants/messages';

Given('the user is viewing a product', () => {
  cy.getProductForTesting().then((product) => {
    productPage.navigate(product.id);
  });
});

When('the logged-in user adds the product to favorites', () => {
  productPage.addToFavoritesButton.click();
});

Then('a confirmation message is displayed', () => {
  productPage.toast.toastContainer
    .should('be.visible')
    .and('contain.text', MESSAGES.PRODUCT_PAGE.PRODUCT_ADDED_TO_FAVORITES);
});

Given('the user is viewing a product', () => {
  cy.getProductForTesting().then((product) => {
    productPage.navigate(product.id);
  });
});

When('the guest user tries to add the product to favorites', () => {
  productPage.addToFavoritesButton.click();
});

Then('a sign-in required message is displayed', () => {
  productPage.toast.toastContainer
    .should('be.visible')
    .and(
      'contain.text',
      MESSAGES.PRODUCT_PAGE.ERRORS.UNAUTHORIZED_TO_ADD_TO_FAVORITES,
    );
});
