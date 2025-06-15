

import LoginPage from '../page_objects/LoginPage';

describe('Авторизация', () => {
  it('Пользователь автоматически выходит после долгого отсутствия активности', () => {
    const loginPage = LoginPage;

    
    loginPage.navigateToRegister();

    
    loginPage.inputUserName('BULDOSER');
    loginPage.inputPassword('Pr0v!d3Rul3s');

    
    loginPage.submitLogin();

    
    cy.clock(new Date().getTime()); 

    
    cy.tick(300000); 
    
    cy.visit('/login');

    
    cy.get('#userName').should('be.visible');
    cy.get('#password').should('be.visible');
  });
});