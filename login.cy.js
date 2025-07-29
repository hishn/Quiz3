describe('Login OrangeHRM', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.wait(2000)
  })

  it('TC-001: Login berhasil dengan kredensial valid', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/dashboard')
  })

  it('TC-002: Login gagal - password salah', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('wrongpass')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
  })

  it('TC-003: Login gagal - username salah', () => {
    cy.get('input[name="username"]').type('WrongUser')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-alert-content-text').should('contain', 'Invalid credentials')
  })

  it('TC-004: Login gagal - username kosong', () => {
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-field-error-message').should('contain', 'Required')
  })

  it('TC-005: Login gagal - password kosong', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('button[type="submit"]').click()
    cy.get('.oxd-input-field-error-message').should('contain', 'Required')
  })
})

