---
title: Usando Plugins do NativeScript
contributors: [alexhiroshi]
---

Plugins funcionam como em qualquer outro aplicativo NativeScript, mas você pode ser pergunta como plugins de *UI* funcionaria com Vue.

Plugins de UI funcionam quase da mesma forma como você usaria um plugin de UI do NativeScript em um aplicativo com Angular. Por exemplo, considere esse exemplo de uso do [nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient) que é usado no [exemplo de listview](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js):

Instale o plugin usando o CLI do NativeScript:

```shell
$ npm install --save nativescript-gradient
```

Abra o arquivo de entrada do seu app e adicione o seguinte no topo:

```js
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

No seu template, você pode usar o elemento recém-registrado:

```html
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
