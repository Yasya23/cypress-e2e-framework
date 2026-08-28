import { BaseApi } from '@/support/api/base.api';
import { API_ROUTES } from '@/constants/api';
import { ApiProductFavoritesData, ApiAddedProduct } from '@/types/product.type';

export class FavoritesApi extends BaseApi {
  getFavorites(
    token?: string | null,
  ): Cypress.Chainable<Array<ApiProductFavoritesData>> {
    return this.get<Array<ApiProductFavoritesData>>(
      API_ROUTES.FAVORITES,
      token,
    ).then((response) => response.body);
  }

  addFavorite(
    productId: string,
    token?: string | null,
  ): Cypress.Chainable<ApiAddedProduct> {
    return this.post<ApiAddedProduct>(
      API_ROUTES.FAVORITES,
      { product_id: productId },
      token,
    ).then((response) => response.body);
  }

  removeFavorite(
    favoriteId: string,
    token?: string | null,
  ): Cypress.Chainable<null> {
    return this.delete(
      `${API_ROUTES.FAVORITES}/${favoriteId}`,
      token,
      204,
    ).then(() => null);
  }

  clearFavorites(token?: string | null): Cypress.Chainable<null> {
    return this.getFavorites(token)
      .then((favorites) => {
        if (favorites.length === 0) {
          return cy.wrap(null);
        }

        return cy.wrap(favorites).each((favorite: ApiProductFavoritesData) => {
          return this.removeFavorite(favorite.id, token);
        });
      })
      .then(() => null);
  }
}

export const favoritesApi = new FavoritesApi();
