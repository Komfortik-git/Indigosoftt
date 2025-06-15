

import LoginPage from '../page_objects/LoginPage';

describe('Авторизация', () => {
  it('Войти и перезагрузить страницу', () => {
    const loginPage =  LoginPage; // 

    
    loginPage.navigateToRegister();

    
    loginPage.inputUserName('BULDOSER');
    loginPage.inputPassword('Pr0v!d3Rul3s');

    
    loginPage.submitLogin();

    
    cy.get('#submit').should('be.visible');

    
    cy.reload();

    
    cy.get('#submit').should('be.visible');
  });
});