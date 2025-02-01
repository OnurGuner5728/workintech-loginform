describe('Login Form', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('başarılı form doldurulduğunda submit edilebilmeli', () => {
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('input[name="password"]').type('Test123!@#')
    cy.get('input[name="acceptTerms"]').click()
    cy.get('button[type="submit"]').should('not.be.disabled')
    cy.get('button[type="submit"]').click()
    cy.url().should('include', '/success')
  })

  it('hatalı email girişinde hata mesajı göstermeli', () => {
    cy.get('input[name="email"]').type('invalid-email').blur()
    cy.get('div').contains('Geçerli bir e-posta adresi giriniz').should('be.visible')
    cy.get('button[type="submit"]').should('be.disabled')
  })

  it('email ve şifre hatalı olduğunda iki hata mesajı göstermeli', () => {
    cy.get('input[name="email"]').type('invalid-email').blur()
    cy.get('input[name="password"]').type('123').blur()
    cy.get('div').contains('Geçerli bir e-posta adresi giriniz').should('be.visible')
    cy.get('div').contains('Şifre en az 8 karakter uzunluğunda olmalıdır').should('be.visible')
    cy.get('button[type="submit"]').should('be.disabled')
  })

  it('şartlar kabul edilmediğinde buton disabled olmalı', () => {
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('input[name="password"]').type('Test123!@#')
    cy.get('button[type="submit"]').should('be.disabled')
  })
}) 