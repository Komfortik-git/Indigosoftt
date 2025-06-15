import LoginPage from '../page_objects/LoginPage';

describe('Вход', () => {
  it('Неверный пароль', () => {
    const userName = 'BULDOSER';
    const wrongPassword = 'WrongPass123!';

    
    const loginPage = LoginPage;

    
    loginPage.navigateToRegister();

    
    loginPage.inputUserName(userName);

    
    loginPage.inputPassword(wrongPassword);

    
    loginPage.submitLogin();

    
    loginPage.assertError('Invalid username or password!');
  });
});