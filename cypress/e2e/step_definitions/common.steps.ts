import { Given } from '@badeball/cypress-cucumber-preprocessor';
import { favoritesApi } from '@/support/api/favorites.api';

Given('the user is logged in', () => {
  cy.login();
});

Given("the user's favorites list is cleared", () => {
  favoritesApi.clearFavorites();
});

Given('the user is not logged in', () => {
  cy.clearLocalStorage('auth-token');
});
