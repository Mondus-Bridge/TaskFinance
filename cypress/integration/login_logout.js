describe('Login', function(){

    it('Authentication', () => {
        cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
        auth: {
            username: 'fabrique',
            password: 'fabrique',
        },
           
          })
        }) 
    
    it('Login and logout', () => {
        cy.location('protocol').should('eq','https:')
        cy.get('input[type="email"]').should('be.visible').should('be.enabled').type('admin@admin.ad')
        cy.get('input[type="password"]').should('be.visible').should('be.enabled').type('admin')
        cy.get('button').contains('Далее').should('be.visible').click()
        cy.title().should('eq', 'Finance')
        cy.wait(3000)
        cy.get('a[href*="/profile"]').click({force: true})
        cy.wait(3000)
        cy.get('button > .button__content').contains('Выйти из системы').click() 
       
    })

 
})