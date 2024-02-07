describe('BalancedCS Component Test', () => {
    beforeEach(() => {

        cy.window().should('have.property', '__PINIA_DEVTOOLS__');
        cy.visit('/'); // Ajuste para a URL onde o BalancedCS é renderizado
    });

    it('exibe o ID do CS com mais clientes após o balanceamento', () => {
        cy.get('button').click();
        cy.get('p').should('contain', 'O CS com mais clientes é o ID: 1');
    });

    it('exibe mensagem de empate se aplicável', () => {
        cy.get('button').click();
        cy.get('p').should('contain', 'Não foi possível determinar um único CS com mais clientes.');
    });
});