describe('test smth', {} => {
    //comment
    it ('I can do something', () => {
        cy.visit('https://www.google.com/')
        cy.get("input[title='Поиск']").type('что-то').type('{enter}')
    })
})