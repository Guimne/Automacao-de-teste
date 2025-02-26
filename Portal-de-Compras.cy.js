describe('Pesquisa de Processos no PCPDev', () => {
  
  beforeEach(() => {
    cy.viewport(1700, 1200);
    Cypress.on('uncaught:exception', () => false);
    cy.visit('https://www.pcpdev.com.br');
    cy.get('#onetrust-accept-btn-handler').should('be.visible').click();
  });

    it('Cenário 1: Pesquisa por objeto', () => {
      cy.get('#objeto').type('café teste');
      cy.scrollTo('top')
      cy.wait(1000);
      cy.get('#objeto').type('{enter}')
      cy.contains('Resultados para o termo "café teste"').should('be.visible');
      cy.wait(3000);
    });

    it('Cenário 2: Pesquisa por processo', () => {
      cy.get('#processo').type('271022-1');
      cy.scrollTo('top')
      cy.wait(1000);
      cy.get('#processo').type('{enter}')
      cy.contains('Resultados para o termo "271022-1"').should('be.visible');
      cy.wait(3000);
    });

    it('Cenário 3: Pesquisa por órgão', () => {
      cy.get('#orgao').type('Mayco');
      cy.scrollTo('top')
      cy.wait(1000);
      cy.get('#orgao').type('{enter}')
      cy.contains('Resultados para o termo "Mayco"').should('be.visible');
      cy.wait(3000);
    });
  
    it('Cenário 4: Pesquisa com filtro inválido', () => {
      cy.get('#objeto').type('ABC123456789!');
      cy.scrollTo('top')
      cy.wait(1000);
      cy.get('#objeto').type('{enter}')
      cy.contains('0 registro').should('be.visible');
      cy.wait(3000);
    });
  
    it('Cenário 5: Pesquisa vazia sem filtros', () => {
      cy.get('.btn-pesquisa-p').click();
      cy.scrollTo('top')
      cy.wait(1000);
      cy.contains('6544 registros').should('be.visible'); //é necessário sempre ajustar á quantidade de registros atual pois pode conter novos registros
      cy.wait(3000);
    });

    cy.stop()   

  });

//Cenário 1: Pesquisa por objeto
//DADO QUE o usuário está buscando um processo
//QUANDO inserir um valor para busca no campo "Objeto"
//E clicando no botão "Buscar"
//ENTÃO o sistema irá retornar os processos com o termo inserido na busca


//Cenário 2: Pesquisa por processo
//DADO QUE o usuário está buscando um processo
//QUANDO inserir um valor para busca no campo "Processo"
//E clicando no botão "Buscar"
//ENTÃO o sistema irá retornar apenas o processo inserido na busca


//Cenário 3: Pesquisa por órgão
//DADO QUE o usuário está buscando um processo
//QUANDO inserir um valor para busca no campo "Órgão"
//E clicando no botão "Buscar"
//ENTÃO o sistema irá retornar todos os processos com o órgão inserido na busca


//Cenário 4: Pesquisa com filtros inválidos
//DADO QUE o usuário está buscando um processo
//QUANDO inserir em um dos filtros uma busca inválida
//E clicando no botão "Buscar"
//ENTÃO o sistema não irá apresentar nenhum resultado


//Cenário 5: Pesquisa vazia sem filtros
//DADO QUE o usuário está buscando um processo
//QUANDO clicar no botão "Buscar" sem ter preenchido nenhum filtro
//ENTÃO o sistema irá apresentar todos os registros de processos