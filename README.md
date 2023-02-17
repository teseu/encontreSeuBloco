# EncontreSeuBloco

## Desafio #boraCodar #6

Dark mode incluído, abaixo o light
![light mode](lightMode.png)

agora o dark
![dark mode](darkMode.png)

Está setado para as preferências do SO de quem visita a pág, mas isso pode ser alterado facilmente, como foi o caso para tirar os screenshots.

2 alterações:

1 - no arquivo base.css na linha 

```css
@media (prefers-color-scheme: dark)
```
altere conforme a preferência

2 - no arquivo tailwind.config.js 

```js
darkMode: 'class',
```
descomente para usar as preferências do **SO** e vice versa


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
