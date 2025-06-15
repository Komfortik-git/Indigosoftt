

import LoginPage from '../page_objects/LoginPage';

describe('Вход', () => {
  it('Успешный вход', () => {
   
    const loginPage = LoginPage;

    
    loginPage.navigateToRegister();

    
    loginPage.inputUserName('BULDOSER');
    loginPage.inputPassword('Pr0v!d3Rul3s');

    
    loginPage.submitLogin();

    
    loginPage.assertSuccess('Log out');
  });
});