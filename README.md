# yee-daa

# Инструкция к спринту №1 по [ссылке](https://docs.google.com/document/d/1vSGtJuYk6slnhuR9ffkaThWPa47N0UcMINFEeCtu2v4/edit?tab=t.0#heading=h.gjdgxs)

---

## !ВАЖНО! Категорически запрещено менять тесты, конфиги и любые другие стартовые настройки проекта без ТЗ или согласования с ментором.

## За нарушением данных правил последует отстранение от участия в марафоне!

---

## Установка Node.js, npm, nvm, Yarn

Эта инструкция предоставляет пошаговое руководство по установке Node.js, npm, nvm (Node Version Manager) и Yarn на вашем компьютере.

#### 1. Установка Node.js с помощью nvm (Node Version Manager)

---

**Windows:**

Скачайте и установите [nvm-windows](https://github.com/coreybutler/nvm-windows).

Откройте терминал (например, Command Prompt или PowerShell) и выполните команду:<br>
`nvm install latest`

---

**macOS:**

Установите nvm через Homebrew:
`brew install nvm`

Добавьте следующую строку в ваш файл ~/.bashrc, ~/.bash_profile или ~/.zshrc:
`export NVM_DIR="$HOME/.nvm" [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"`

Используйте ~/.bash_profile или ~/.zshrc, если у вас есть Zsh.

В новом терминале выполните:
`nvm install node`

---

## Обращаем внимание на то, что для корректного запуска проекта версия ноды должна быть не ниже 20

---

#### 2. Установка Yarn

Установка через npm (пакетный менеджер Node.js)
`npm install -g yarn`

| Проверьте версии установленных компонентов | Описание                               |
| ------------------------------------------ | -------------------------------------- |
| `node -v`                                  | `Выведет установленную версию Node.js` |
| `npm -v`                                   | `Выведет установленную версию npm`     |
| `nvm -v`                                   | `Выведет установленную версию nvm`     |
| `yarn -v`                                  | `Выведет установленную версию Yarn`    |

---

#### 3. Установка и запуска проекта

| Установка и запуска проекта | Описание                                                                                                                                                         |
|-----------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `node -v`                   | `Проверьте, что у вас надлежащая версия ноды. Если версия ноды ниже 20, то выполните 2 инструкции ниже. Если всё ок - переходи к установке зависимостей проекта` |
| `nvm install 22.8.0`        | `Установить версию Node.js 22.8.0 с использованием Node Version Manager (nvm)`                                                                                   |
| `nvm use 22.8.0`            | `Активировать установленную версию Node.js 22.8.0`                                                                                                               |
| `yarn install`              | `Установить зависимости проекта с помощью Yarn`                                                                                                                  |
| `yarn start`                | `Запустить проект`                                                                                                                                               |

---

| Основные команды | Описание                             |
|------------------|--------------------------------------|
| `yarn start`     | `Запуск проекта`                     |
| `yarn build`     | `Сборка проекта`                     |
| `lint:fix`       | `Запуск esline для для ts(x) файлов` |
| `yarn cy:e2e`    | `Запуск e2e тестов cypress`          |

---

#### Прекоммитные проверки

В этом проекте используются прекоммитные проверки, настроенные через [lefthook](https://www.npmjs.com/package/lefthook). Они автоматически проверяют и форматируют изменения перед коммитом.

**Как это работает:**

[lefthook](https://www.npmjs.com/package/lefthook) запускает заданные команды только для файлов, добавленных в коммит. Это позволяет автоматически форматировать и проверять только измененные файлы, что помогает поддерживать высокое качество кода в проекте.

Из-за прекоммитных проверок могут возникнуть проблемы при попытке сделать коммит, если ваш код не соответствует установленным правилам форматирования или стилю кода.

Прекоммитные проверки запускаются перед каждым коммитом и проверяют/форматируют файлы с расширениями .ts, .tsx, .js, .jsx, .json и .css с помощью [prettier](https://classic.yarnpkg.com/en/package/prettier), [eslint](https://classic.yarnpkg.com/en/package/eslint) и [stylelint](https://classic.yarnpkg.com/en/package/stylelint).

**Если у вас возникли проблемы** с коммитом из-за прекоммитных проверок, рекомендуется проверить вывод консоли на наличие предупреждений или ошибок, а затем **внести необходимые изменения в соответствии с правилами форматирования и стиля кода**.

---

#### Рекомендации к именам коммитов

-   Названия коммитов следует соблюдать согласно [гайдлайну](https://www.conventionalcommits.org/en/v1.0.0/)
-   Тип коммита может быть только в нижнием регистре (`feat`, `fix`, `refactor`, `docs` и т.д.)
-   (*) - Указывает область изменений.
    В данном случае * означает, что изменения касаются всей кодовой базы или не относятся к одной конкретной области.
    Обычно вместо * могут быть указаны конкретные модули, файлы или компоненты, например: feat(ui):, feat(api):, feat(auth):.
-   Может использоваться present tense ("add feature" not "added feature")
-   Может использоваться imperative mood ("move cursor to..." not "moves cursor to...")

#### Примеры имен коммитов

-   `init` - используется для начала проекта/таска. Примеры:

```
init(package): start sprint-1
init(*): start html-coding task
```

-   `feat` - это реализованная новая функциональность из технического задания (добавил поддержку зумирования, добавил footer, добавил карточку продукта). Примеры:

```
feat(*): add basic page layout
feat(search-input): implement search box
```

-   `fix` - исправил ошибку в ранее реализованной функциональности. Примеры:

```
fix(*): change layout for video items to fix bugs
fix(header): relayout header for firefox
```

-   `refactor` - новой функциональности не добавлял / поведения не менял. Файлы в другие места положил, удалил, добавил. Изменил форматирование кода (white-space, formatting, missing semi-colons, etc). Улучшил алгоритм, без изменения функциональности. Примеры:

```
refactor(*): change the structure of the project
refactor(constants): rename vars for better readability
```

-   `docs` - используется при работе с документацией/readme проекта. Примеры:

```
docs(*): update readme with additional information
docs(readme): update description of run() method
```

---
