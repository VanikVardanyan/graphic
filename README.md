# Как потестировать приложение

## Вариант 1

### 1. Перейти по ссылке http://graphic.ofshant.com/

## Вариант 2

### 1. Установить docker-compose

### 2. Запустить команду

```bash
docker-compose up
```

## Вариант 3

### 1.Установить Docker:

### 2. В папке /back запустить команды

```bash
docker build -t ccs:latest .
docker run -d -ti --name d3-backend -p 8080:8080 ccs:latest
```

### 3. Войти в папку build и открыть файл index.html.

# Как запустить проект локально с помощью node

### Node version - 13.14

### Зайти в папку /front

### Запустить команды

```bach
npm install
npm start
```

### Исходный код также есть на гитхабе https://github.com/VanikVardanyan/graphic.
