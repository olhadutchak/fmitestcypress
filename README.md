# Тестування сайту факультету

Цей проєкт містить автоматизовані E2E та BDD тести для сайту факультету, написані за допомогою Cypress і плагіна Cucumber.

## Структура проєкту

- `cypress/e2e/tests/` — класичні E2E тести.
- `cypress/e2e/features/` — BDD-сценарії у форматі `.feature`.
- `cypress/support/step_definitions/` — кроки до BDD-сценаріїв.
- `cypress/e2e/pages/` — об’єкти сторінок (Page Object Model).
- `cypress/fixtures/` — тестові дані у форматі JSON.
- `cypress/support/` — глобальні команди та хелпери.

## Налаштування

У файлі `cypress.config.js` налаштовано:

- підтримку `.feature` файлів через Cucumber;
- Webpack для обробки сценаріїв;
- alias `@pages` для зручності;
- підключення тестових даних (fixtures);
- перевірку завантажень через `cy-verify-downloads`.

## Запуск тестів

```bash
npx cypress open