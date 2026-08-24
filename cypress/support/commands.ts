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
