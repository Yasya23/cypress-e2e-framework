/// <reference types="cypress" />

import { ApiAddedProduct, ProductData } from '@/types/product.type';

declare global {
  namespace Cypress {
    interface Chainable {
      login(): Chainable<void>;

      getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
      getByTestIdWithin(testId: string): Chainable<JQuery<HTMLElement>>;

      getProductForTesting(): Chainable<ProductData>;
      getAddedProductToFavorites(): Chainable<ApiAddedProduct>;
    }
  }
}

export {};
