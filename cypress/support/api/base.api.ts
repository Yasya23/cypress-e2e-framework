export abstract class BaseApi {
  protected get baseUrl(): string {
    return Cypress.expose('BASE_API_URL');
  }

  protected getAuthToken(): Cypress.Chainable<string | undefined> {
    return cy.window().then((win) => {
      const token = win.localStorage.getItem('auth-token');
      return token || undefined;
    });
  }

  protected getHeaders(token?: string) {
    return {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
    };
  }

  private sendRequest<T>(
    method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE',
    endpoint: string,
    body?: Cypress.RequestBody,
    // undefined -> автопідхоплення збереженого токена
    // null      -> явно без токена (для негативних тестів на авторизацію)
    // string    -> явно передати конкретний токен
    explicitToken?: string | null,
    expectedStatus = 200,
  ): Cypress.Chainable<Cypress.Response<T>> {
    const execute = (token?: string) => {
      return cy
        .request<T>({
          method,
          url: `${this.baseUrl}${endpoint}`,
          body,
          headers: this.getHeaders(token),
          failOnStatusCode: false,
        })
        .then((response) => {
          expect(
            response.status,
            `${method} ${endpoint} - expected status ${expectedStatus}`,
          ).to.eq(expectedStatus);
          return response;
        });
    };

    if (explicitToken === null) {
      return execute(undefined); // примусово без Authorization
    }

    if (explicitToken !== undefined) {
      return execute(explicitToken);
    }

    return this.getAuthToken().then((token) => execute(token));
  }

  protected get<T>(
    endpoint: string,
    token?: string | null,
    expectedStatus = 200,
  ): Cypress.Chainable<Cypress.Response<T>> {
    return this.sendRequest<T>(
      'GET',
      endpoint,
      undefined,
      token,
      expectedStatus,
    );
  }

  protected post<T>(
    endpoint: string,
    body?: Cypress.RequestBody,
    token?: string | null,
    expectedStatus = 201,
  ): Cypress.Chainable<Cypress.Response<T>> {
    return this.sendRequest<T>('POST', endpoint, body, token, expectedStatus);
  }

  protected put<T>(
    endpoint: string,
    body?: Cypress.RequestBody,
    token?: string | null,
    expectedStatus = 200,
  ): Cypress.Chainable<Cypress.Response<T>> {
    return this.sendRequest<T>('PUT', endpoint, body, token, expectedStatus);
  }

  protected delete<T>(
    endpoint: string,
    token?: string | null,
    expectedStatus = 200,
  ): Cypress.Chainable<Cypress.Response<T>> {
    return this.sendRequest<T>(
      'DELETE',
      endpoint,
      undefined,
      token,
      expectedStatus,
    );
  }
}
