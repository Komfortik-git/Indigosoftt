

import LoginPage from '../page_objects/LoginPage';

describe('Вход', () => {
  it('Отправка формы без пароля', () => {
    const loginPage =  LoginPage;
    
    loginPage.navigateToRegister();

    
    loginPage.inputUserName('BULDOSER');

    
    loginPage.submitLogin();

    
    loginPage.checkPassRed();
  });
});