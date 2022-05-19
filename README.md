# Lab Linting

## Web - Sección 10

Se agregó Eslint al laboratorio anterior.
Realizado con las siguientes tecnologías:

- React
- Emotion
- Eslint
- ✨Magia✨

## Funcionalidades

- Llamado al servidor de la clase para el laberinto
- eslint sin errores

Se siguieron las siguientes instrucciones

> npm install eslint
> npx eslint --init
> // contesten esto a las preguntas
> /_
> How would you like to use ESLint? · style
> What type of modules does your project use? · none
> Which framework does your project use? · react
> Does your project use TypeScript? · No / Yes
> Where does your code run? · browser
> How would you like to define a style for your project? · guide
> Which style guide do you want to follow? · airbnb
> What format do you want your config file to be in? · JavaScript
> _/
> // editen su eslintrc.js para agregar una regla que prohiba los ;
> // desabiliten las reglas: react/react-in-jsx-scope y react/jsx-filename-extension
> // editen su package json
> "scripts": {
> ...
> "lint": "eslint src/**"
>}
>// corran en su terminal
>$ npm run lint
>// npm run lint no debe retornar errores, limpien su codigo
>
>
