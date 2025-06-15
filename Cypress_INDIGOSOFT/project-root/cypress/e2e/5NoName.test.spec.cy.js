

import LoginPage from '../page_objects/LoginPage';

describe('Авторизация', () => {
  it('Имя пользователя не указано', () => {
    const loginPage =  LoginPage; 

    
    loginPage.navigateToRegister();

  

    
    loginPage.inputPassword('Pr0v!d3Rul3s');

    
    loginPage.submitLogin();

    
    loginPage.checkNameRed();
  });
});