// CAT-TAT.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/// <reference types="Cypress" />

describe('Central de Atendimento ao Cliente TAT', function() {
    it('verifica o titulo da aplicação', function() {
     cy.visit('./src/index.html')

     cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
    })

    it('preenche o campo nome', function() {
        cy.get('#firstName').type('Olá mundo!')
    })
    it('preenche o campo sobrenome', function() {
        cy.get('#lastName').type('montanher')
    })
    it('preenche o campo email', function() {
        cy.get('#email').type('gabrielmontanherr@gmail.com')
    })
    it('preenche o campo telefone', function() {
        cy.get('#phone').type('14998408445')
    })
    it('altera o titulo para CAT TAT', function() {
        cy.get('#title')
        .invoke('text', 'CAT TAT')
    })
    it('altera o subtitle do html', function() {
        cy.get('#subtitle')
        .invoke('text', 'Eu finalizei o curso de cypress com sucesso!')
    })

    it('Marca o tipo de atendimento "Feedback"', function() {
        cy.get('input[type="radio"][value="feedback"]').check()
    })
    it('Marca o tipo de atendimento "Elogio"', function() {
        cy.get('input[type="radio"][value="elogio"]').check()
    })
    it('Marca o tipo de atendimento "Ajuda"', function() {
        cy.get('input[type="radio"][value="ajuda"]').check()
    })


    //DESAFIO ENCONTRE O GATO

    it('Encontra o gato escondido', function() {
        cy.get('#cat')
        .invoke('show')
        .should('be.visible')
       
    })
//
    it('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
        .should('have.length', 3)
        .each(function($radio) {
            cy.wrap($radio).check()
            cy.wrap($radio).should('be.checked')
        })
    })

    it('marca ambos o checkboxes, depois desmarca o último', function() {
        cy.get('input[type="checkbox"]')
        .check()
        .last()
        .uncheck()
        .should('not.be.checked')
    })

    it('seleciona um arquivo da pasta fixtures', function() {
        cy.get('input[type="file"]')
        .should('not.have.value')
        .selectFile('./cypress/fixtures/example.json')
        .should(function($input) {
            expect($input[0].files[0].name).to.equal('example.json')
        })
    })

    it('verifica que a politica de privacidade abre em outra aba sem a necessidade', function() {
        cy.get('#privacy a').should('have.attr', 'target', '_blank')
    })
})