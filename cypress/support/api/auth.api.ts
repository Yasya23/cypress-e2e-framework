import { BaseApi } from '@/support/api/base.api';
import { API_ROUTES } from '@/constants/api';
import { LoginData, AuthResponse } from '@/types/auth.type';

export class AuthApi extends BaseApi {
  getToken(credentials: LoginData): Cypress.Chainable<string> {
    return this.post<AuthResponse>(
      API_ROUTES.LOGIN,
      credentials,
      undefined,
      200,
    ).then((response) => {
      const body = response.body;

      if (!body?.access_token) {
        throw new Error(
          `AuthApi.getToken: response did not contain an access_token. Received: ${JSON.stringify(body)}`,
        );
      }

      return body.access_token;
    });
  }
}

export const authApi = new AuthApi();
