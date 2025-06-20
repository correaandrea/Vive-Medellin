describe('Registration and Login Integration Flow', () => {
  it('should allow a user to register and then immediately log in', () => {
    
    // PARTE 1: FLUJO DE REGISTRO
    const newUser = {
      fullName: 'UsuarioDePrueba Integracion',
      email: `test_user_${Date.now()}@example.com`,
      password: 'password_segura_123',
    };

    // Interceptar la llamada a la API de registro
    cy.intercept('POST', '/api/register').as('registerRequest');

    // Visitar la página de registro
    cy.visit('http://localhost:3000/Register');

    // Rellenar el formulario de registro con los datos del nuevo usuario
    cy.get('input[placeholder="Nombre completo"]').type(newUser.fullName);
    cy.get('input[placeholder="Email"]').type(newUser.email);
    cy.get('input[placeholder="Contraseña"]').type(newUser.password);

    // Hacer clic en el botón para crear la cuenta
    cy.get('button').contains('Crear cuenta').click();

    // Esperar a que la llamada a la API de registro se complete
    cy.wait('@registerRequest');

    // Verificar que fuimos redirigidos a la página de Login
    cy.url().should('include', '/Login');
    cy.contains('Iniciar sesión').should('be.visible');

    // PARTE 2: FLUJO DE LOGIN 

    // Interceptar la llamada a la API de login
    cy.intercept('POST', '/api/login').as('loginRequest');

    // Rellenar el formulario de login 
    cy.get('input[placeholder="Email"]').type(newUser.email);
    cy.get('input[placeholder="Contraseña"]').type(newUser.password);

    // Hacer clic en el botón de "Iniciar sesión"
    cy.get('button').contains('Iniciar sesión').click();

    // Esperar a que la llamada a la API de login se complete
    cy.wait('@loginRequest');

    // Verificar que fuimos redirigidos a la página principal
    cy.url().should('eq', 'http://localhost:3000/');
    cy.contains('Descubre todo lo que Medellín tiene para ofrecerte').should('be.visible');
  });
});