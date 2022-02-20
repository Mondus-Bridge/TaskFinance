describe("Добавить платёж", () => {
    it("Тип операции 'Доход/приход'", () => {
        cy.visit('https://finance.dev.fabrique.studio/accounts/login/', {
        auth: {
            username: 'fabrique',
            password: 'fabrique',
        },  
        })
        
        cy.get('input[type="email"]').should('be.visible').should('be.enabled').type('admin@admin.ad')
        cy.get('input[type="password"]').should('be.visible').should('be.enabled').type('admin')
        cy.get('button').contains('Далее').should('be.visible').click()


        cy.wait(500);

        cy.get('button[class="button button--size-sm button--is-centered button--state-filled"]').click();

        cy.get('div[class="form-field radio-group__checkbox radio-group__checkbox--first"]').click({ multiple: true }); 
        cy.contains('Доход/приход').click();

        cy.get('div[class="input input--size-md input--state-default"]').each(($el, $index) => {
            if($index == 1){
            return false;
            }
            cy.wrap($el).click().type('Что-то');        
        });

        cy.get('div[class="checkbox__icon checkbox__icon--checkbox"]').click({ multiple: true });

        cy.get('div[class="input input--is-short input--size-md input--state-default"]').each(($el, $index) => {        
            cy.wrap($el).click().type('999');        
        });
            
        cy.contains('Оплачен').click();

        cy.get('input[class="date__input"]').each(($el, $index) => {
            cy.wrap($el).click();
            cy.get('button[type="button"]').contains('22').click();
        });

        cy.get('span[class="multiselect__placeholder"]').first().click();
        cy.contains('test').click();

        cy.get('div[class="input input--size-md input--state-default"]').last().type('Что-то');

        cy.get('span[class="multiselect__placeholder"]').each(($el, $index) => {
            if($index == 1){
            return false;
            }
            cy.wrap($el).click();
        });

        cy.contains('Счет выставлен').click();

        cy.get('span[class="multiselect__placeholder"]').eq(0).click();
        cy.contains('ттт').click();

        cy.get('span[class="multiselect__placeholder"]').each(($el, $index) => {
            if($index == 1){
            return false;
            }
            cy.wrap($el).click();
        });
        
        cy.contains('ds').click();

        cy.get('span[class="multiselect__placeholder"]').eq(0).type('тттт{enter}');

        cy.get('.multiselect__placeholder').first().type('{enter}');

        cy.get('span[class="multiselect__placeholder"]').first().click();
        cy.contains('приход').click();

        cy.get('button[class="button button--size-sm button--is-centered button--state-filled"]').click();
        });
});