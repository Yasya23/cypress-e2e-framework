import { authApi } from '@/support/api/auth.api';
import { productsApi } from '@/support/api/product.api';
import { ApiAddedProduct, ProductData } from '@/types/product.type';
import { favoritesApi } from '@/support/api/favorites.api';
import { ROUTES } from '@/constants/routes';

Cypress.Commands.add('login', () => {
  cy.env(['USER_EMAIL', 'USER_PASSWORD']).then(
    ({ USER_EMAIL, USER_PASSWORD }) => {
      cy.session(
        [USER_EMAIL],
        () => {
          authApi
            .getToken({ email: USER_EMAIL, password: USER_PASSWORD })
            .then((token) => {
              cy.visit(ROUTES.HOME);
              cy.window().then((win) => {
                win.localStorage.setItem('auth-token', token);
              });
            });
        },
        {
          validate() {
            cy.window().then((win) => {
              expect(win.localStorage.getItem('auth-token')).to.exist;
            });
          },
          cacheAcrossSpecs: true,
        },
      );
    },
  );
});

Cypress.Commands.add(
  'getProductForTesting',
  (): Cypress.Chainable<ProductData> => {
    return productsApi.getProducts().then((products) => {
      if (!products || products.length === 0) {
        throw new Error('getProductForTesting: No products returned from API.');
      }
      return products[0];
    });
  },
);

Cypress.Commands.add(
  'getAddedProductToFavorites',
  (): Cypress.Chainable<ApiAddedProduct> => {
    return cy.getProductForTesting().then((product) => {
      return favoritesApi.addFavorite(product.id);
    });
  },
);

// Get element by data-test attribute

Cypress.Commands.add('getByTestId', (testId: string) => {
  return cy.get(`[data-test="${testId}"]`);
});

Cypress.Commands.add(
  'getByTestIdWithin',
  { prevSubject: 'element' },
  (subject: JQuery<HTMLElement>, testId: string) => {
    return cy.wrap(subject).find(`[data-test="${testId}"]`);
  },
);
