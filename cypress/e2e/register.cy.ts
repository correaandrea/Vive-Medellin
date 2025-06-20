describe('User Registration Flow', () => {
  it('should allow a new user to fill the form, register successfully, and be redirected to the login page', () => {
    
    // Paso 1: Interceptar la llamada a la API de registro.
    // Simulamos una respuesta exitosa del backend.
    cy.intercept('POST', '/api/register', {
      statusCode: 201,
      body: {
        message: 'User created successfully',
      },
    }).as('registerRequest');

    // Paso 2: Visitar la página de registro.
    cy.visit('http://localhost:3000/Register');

    // Paso 3: Rellenar los campos del formulario.
    // Usamos los placeholders para encontrar cada campo y escribir en ellos.
    cy.get('input[placeholder="Nombre completo"]').type('Andrea Correa');
    cy.get('input[placeholder="Email"]').type('andrea.correa@example.com');
    cy.get('input[placeholder="Contraseña"]').type('super-secret-password');

    // Paso 4: Hacer clic en el botón para crear la cuenta.
    cy.get('button').contains('Crear cuenta').click();

    // Paso 5: Esperar a que la llamada a la API simulada se complete.
    cy.wait('@registerRequest');

    // Paso 6: Verificar que la redirección a la página de Login fue exitosa.
    cy.url().should('include', '/Login');

    // Paso 7: Verificar que el contenido de la página de Login es visible.
    cy.contains('Iniciar sesión').should('be.visible');
  });
});