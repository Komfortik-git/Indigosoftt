

import LoginPage from '../page_objects/LoginPage';

describe('Авторизация', () => {
  it('Проверка реакции на многократные неудачные попытки входа', () => {
    const loginPage =  LoginPage; 

    
    loginPage.navigateToRegister();

    
    const attemptsCount = 5;

    
    for (let i = 0; i < attemptsCount; i++) {
      
      console.log(`Attempt #${i + 1}: Trying invalid credentials`);

      
      loginPage.inputUserName('wrongUser');
      loginPage.inputPassword('wrongPassword');

      
      loginPage.submitLogin();

      
      loginPage.assertError('Invalid username or password!');
    }
  });
});