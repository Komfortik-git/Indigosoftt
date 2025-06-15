
import LoginPage from '../page_objects/LoginPage';

describe('Авторизация', () => {
  it('Проверка корректности работы кнопки Logout', () => {
    const loginPage =  LoginPage; 

    
    loginPage.navigateToRegister();

    
    loginPage.inputUserName('BULDOSER');
    loginPage.inputPassword('Pr0v!d3Rul3s');

   
    loginPage.submitLogin();

    
    cy.get('#submit').should('be.visible');

    
    cy.get('#submit').click();

    
    cy.contains('Login in Book Store').should('be.visible');
  });
});