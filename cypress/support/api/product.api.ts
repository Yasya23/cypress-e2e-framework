import { BaseApi } from '@/support/api/base.api';
import { API_ROUTES } from '@/constants/api';
import { ProductData } from '@/types/product.type';

interface ProductsResponse {
  data: Array<ProductData>;
}

export class ProductsApi extends BaseApi {
  getProducts(): Cypress.Chainable<Array<ProductData>> {
    return this.get<ProductsResponse>(API_ROUTES.PRODUCTS).then(
      (response) => response.body.data,
    );
  }
}

export const productsApi = new ProductsApi();
