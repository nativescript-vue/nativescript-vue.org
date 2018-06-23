---
title: Usando Plugins do NativeScript
contributors: [alexhiroshi, WesleiRamos]
---

Plugins funcionam como em qualquer outro aplicativo NativeScript, mas você pode ser pergunta como plugins de *UI* funcionaria com Vue.

Plugins de UI funcionam quase da mesma forma como você usaria um plugin de UI do NativeScript em um aplicativo com Angular.

## Uso de exemplo: nativescript-gradient

Por exemplo, considere esse exemplo de uso do [nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient) que é usado no [exemplo de listview](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js):

## Instale o plugin usando o CLI do NativeScript:

Após você ter [configurado seu sistema para o desnvolvimento com NativeScript development](/pt-BR/docs/getting-started/installation), execute o seguinte comando:

```shell
$ npm install --save nativescript-gradient
```

> **NOTA:** Se você estiver usando o [vue-cli-template](/pt-BR/docs/getting-started/templates/#nativescript-vuevue-cli-template), você pode ter que executar o seguinte:

```shell
$ npm run clean
```

## Registre o plugin em seu app

Abra o arquivo de entrada do seu app (algo como `apps.js` ou `main.js`) e adicione o seguinte no topo:

```js
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

Isto requer o registro do plugin na instância `Vue`. A função `registerElement` espera o nome do `<Element>` como o primeiro argumento, e uma função que retorna o plugin como o segundo. Forneça o nome do elemento exatamente como você deve chamá-lo em seu código. Forneça o name do plugin exatamente como o nome do pacote do npm.

### Use o plugin em seu aplicativo

```html
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
