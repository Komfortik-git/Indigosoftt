

import LoginPage from '../page_objects/LoginPage';

describe('Логин', () => {
  it('Неверное имя пользователя', () => {
    const userName = 'invalid_user';
    const validPassword = 'correct_password';

    
    const loginPage =  LoginPage;

    
    loginPage.navigateToRegister();

    
    loginPage.inputUserName(userName);

    
    loginPage.inputPassword(validPassword);

    
    loginPage.submitLogin();

    
    loginPage.assertError('Invalid username or password!');
  });
});