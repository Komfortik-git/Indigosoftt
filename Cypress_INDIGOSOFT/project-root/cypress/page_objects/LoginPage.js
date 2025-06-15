// cypress/page_objects/LoginPage.js

class LoginPage {
  constructor() {
    this.url = '/login'; // URL страницы входа
    this.userNameField = '#userName'; // Селектор поля ввода имени пользователя
    this.passwordField = '#password'; // Селектор поля ввода пароля
    this.loginButton = '#login'; // Селектор кнопки входа
    this.logoutButton = '#submit'; // Селектор кнопки выхода
    this.successMessage = '#submit'; // Селектор сообщения об успешном входе
    this.errorMessage = '#name'; // Селектор сообщения об ошибке
  }

  /**
   * Метод для перехода на страницу входа
   */
  navigateToRegister() {
    cy.visit(this.url);
  }

  /**
   * Метод для ввода имени пользователя
   * @param {string} userName - Имя пользователя
   */
  inputUserName(userName) {
    cy.get(this.userNameField).clear().type(userName);
  }

  /**
   * Метод для ввода пароля
   * @param {string} password - Пароль
   */
  inputPassword(password) {
    cy.get(this.passwordField).clear().type(password);
  }

  /**
   * Метод для отправки формы входа
   */
  submitLogin() {
    cy.get(this.loginButton).click();
  }

  /**
   * Метод для проверки наличия красного выделения поля имени пользователя
   */
  checkNameRed() {
    cy.get(this.userNameField).should('have.class', 'is-invalid');
  }

  /**
   * Метод для проверки отсутствия красного выделения поля имени пользователя
   */
  checkNotNameRed() {
    cy.get(this.userNameField).should('not.have.class', 'is-invalid');
  }

  /**
   * Метод для проверки наличия красного выделения поля пароля
   */
  checkPassRed() {
    cy.get(this.passwordField).should('have.class', 'is-invalid');
  }

  /**
   * Метод для проверки отсутствия красного выделения поля пароля
   */
  checkNotPassRed() {
    cy.get(this.passwordField).should('not.have.class', 'is-invalid');
  }

  /**
   * Метод для проверки успешного входа
   * @param {string} message - Текст сообщения об успешном входе
   */
  assertSuccess(message) {
    cy.get(this.successMessage).should('be.visible').and('contain', message);
  }

  /**
   * Метод для проверки ошибки входа
   * @param {string} message - Текст сообщения об ошибке
   */
  assertError(message) {
    cy.get(this.errorMessage).should('be.visible').and('contain', message);
  }

  /**
   * Метод для клика по кнопке выхода
   */
  logout() {
    cy.get(this.logoutButton).click();
  }

  /**
   * Метод для проверки доступности элемента
   * @param {string} selector - CSS-селектор элемента
   */
  elementShouldBeVisible(selector) {
    cy.get(selector).should('be.visible');
  }
}

export default new LoginPage();