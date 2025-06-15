// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    // Базовый URL для всех тестов
    baseUrl: 'https://demoqa.com', // Замените на URL вашего приложения

    // Где находятся файлы с тестами
    specPattern: 'cypress/e2e/**/*.cy.js',

    // Стандартные таймауты
    defaultCommandTimeout: 5000, // Время ожидания выполнения команды
    requestTimeout: 10000, // Таймаут запросов к серверу
    responseTimeout: 10000, // Таймаут ожидания ответа сервера

    // Скриншоты и видео
    screenshotOnRunFailure: true, // Сохранять скриншоты при падении тестов
    

    // Обработка событий и дополнительные настройки
    setupNodeEvents(on, config) {
      // Подключаем обработчик событий Allure
      require('@shelex/cypress-allure-plugin/writer')(on, config);
      return config;
    },

    // Настройки генерации отчётов Allure
    resultsFolder: 'cypress/allure-results', // Папка для промежуточных результатов
    afterRun: async () => {
      // Генерируем итоговый отчёт Allure после выполнения тестов
      await require('@shelex/cypress-allure-plugin/generator')({ currentDirectory: process.cwd(), quiet: true });
    },
  },
});