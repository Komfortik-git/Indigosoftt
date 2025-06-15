// cypress/support/e2e.js

// Игнорируем ошибки, происходящие из другого домена
Cypress.on('uncaught:exception', (err, runnable) => {
  // Пропускаем ошибки из другого домена
  if (err.message.includes('Script error.')) {
    return false;
  }

  // В остальных случаях разрешаем ошибку
  return true;
});