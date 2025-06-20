
describe('User Login Flow', () => {
  it('should allow an existing user to log in successfully', () => {
    // Paso 1: Interceptar la llamada a la API de login.
    // Simulamos una respuesta exitosa, incluyendo un token de autenticación falso.
    cy.intercept('POST', '/api/login', {
      statusCode: 200,
      body: {
        token: 'fake-jwt-token-for-andrea',
        user: { name: 'Andrea Correa', email: 'test@example.com' },
      },
    }).as('loginRequest');

    // Paso 2: Visitar la página de Login.
    cy.visit('http://localhost:3000/Login');

    // Paso 3: Rellenar el formulario de inicio de sesión.
    // Usamos los placeholders para encontrar los campos.
    cy.get('input[placeholder="Email"]').type('andrea.correa@example.com');
    cy.get('input[placeholder="Contraseña"]').type('super-secret-password');

    // Paso 4: Hacer clic en el botón de "Iniciar sesión".
    cy.get('button').contains('Iniciar sesión').click();

    // Paso 5: Esperar a que la llamada a la API simulada se complete.
    cy.wait('@loginRequest');

    // Paso 6: Verificar la redirección a la página principal.
    cy.url().should('include', '/'); 

    // Paso 7: Verificación adicional.
    // Comprobamos que el contenido de la página principal sea visible.
    cy.contains('Descubre todo lo que Medellín tiene para ofrecerte').should('be.visible');
  });
});