describe("campos de usuario y contraseña", () => {
  it('contiene elementos para mail, password y repeat password', () => {
    cy.visit("http://127.0.0.1:5500/index.html");
    cy.get('[for="email"]').contains('Correo electrónico');
    cy.get('[for="password"]').contains('Contraseña');
    cy.get('[for="repeat-password"]').contains('Repita contraseña');
  })
})

it('cuando la contraseña no coincida en los dos campos mostrar un mensaje de advertencia y no se visualice el botón. ', () => {
  cy.visit("http://127.0.0.1:5500/index.html");
  cy.get('#password').type('123456');
  cy.get('#repeat-password').type('1234567');
  cy.get('#send-btn').should('not.be.visible');
  cy.get('#password-message').contains('Las contraseñas no coinciden')
});
