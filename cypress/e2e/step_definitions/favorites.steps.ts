import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import { favoritesPage } from '@/pages/favorites.page';

let currentProductId: string;

Given('the user has added a product to favorites', () => {
  cy.getAddedProductToFavorites().then((product) => {
    currentProductId = product.id;
  });
});

When('the user opens the favorites page', () => {
  favoritesPage.navigate();
});

Then('the added product is displayed in the favorites list', () => {
  favoritesPage.getProductCardById(currentProductId).should('be.visible');
});

When('the user removes the product from the favorites list', () => {
  favoritesPage.getDeleteButtonByProductId(currentProductId).click();
});

Then('the product is removed from the favorites list', () => {
  favoritesPage.getProductCardById(currentProductId).should('not.exist');
});

Then('an empty favorites message is displayed', () => {
  favoritesPage.emptyFavoritesMessage.should('be.visible');
});
