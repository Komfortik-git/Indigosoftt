
import LoginPage from '../page_objects/LoginPage';

describe('Авторизация', () => {
  it('Проверка чувствительности полей к регистру', () => {
    const loginPage =  LoginPage; 

  
    loginPage.navigateToRegister();

    
    loginPage.inputUserName('buldoser');

    
    loginPage.inputPassword('pr0v!d3Rul3s');

    
    loginPage.submitLogin();

    
    cy.get('#submit').should('not.be.visible');
  });
});