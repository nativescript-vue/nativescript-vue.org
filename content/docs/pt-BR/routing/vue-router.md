---
title: Vue Router
contributors: [alexhiroshi]
---

Se o [Manual Routing](/pt-BR/docs/routing/manual-routing) não for adequado para o seu caso,
você ficará feliz em saber que [o Vue router](https://router.vuejs.org/en/) é suportado.

Com o router, existem dois tipos de roteamento que você pode usar. Roteamento baseado em componente e roteamento baseada em página.

Roteamento baseado em componente é onde você especifica o componente `<router-view />` no seu template, e as rotas diferentes serão adicionas na view. E quando navegar, as views serão trocadas. É útil às vezes, em muitos casos o que você quer é navegar para páginas diferentes.

Essa documentação fala do roteamento de páginas com mais detalhes, mas por favor, note que esse recurso é instável nesse ponto, e recomenda-se que você mantenha o roteamento manual se você precisar de páginas diferentes em seu aplicativo. Esperamos mudar isso no futuro próximo, e é uma prioridade em nossa lista de tarefas.

## Instalação
No prompt de comando, execute:
```shell
$ npm install --save vue-router
```

## Uso
Vamos mostrar um exemplo complete, dividido em algumas partes para fornecermos alguns comentários.
Observe que o Vue Router tem mais truques na manga, então não deixe de visitar
[a documentação oficial](https://router.vuejs.org/en/).

---
Adicione Vue e VueRouter com require, e deixe eles andarem de mãos dadas 🤝
```js
const Vue = require('nativescript-vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);
```

---
Defina uma página `Master` com a rota atual como título (`$route.path`)
e um botão com um `@tap="$router.push('/detail')"` para que uma nova página seja adicionada na pilha e navegue.

Além disso, um botão para a mesma página com um parâmetro `user` de consulta.
```html
const Master = {
  template: `
    <Page>
      <ActionBar :title="$route.path" />
      <StackLayout>
        <Button text="To Details" @tap="$router.push('/detail')" />
        <Button text="To Details (with query param)" @tap="$router.push('/detail?user=John+Appleseed')"></Button>
      </StackLayout>
    </Page>
  `
};
```

---
Defina uma página `Detail` com um `NavigationButton`. No iOS isso voltará automaticamente para a página anterior na pilha, mas para o Android o manipulador `tap` é obrigatório (que é ignorado no iOS).
Então adicione `@tap="$router.back()"`.

Se lembra que passamos o parâmetro `user` no segundo botão da página `Master`? Você pode usar ele na página `Details` assim: `<Label :text="$route.query.user">`

Por fim, você pode navegar para trás (e para frente) com `$router.go(<número-de-páginas>)` como demonstrado abaixo:

```html
const Detail = {
  template: `
    <Page>
      <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
      </ActionBar>
      <StackLayout>
        <Label :text="$route.query.user" v-if="$route.query.user" />
        <Button text="Back to Master" @tap="$router.go(-1)" />
      </StackLayout>
    </Page>
  `
};
```

---
Defina todas as páginas do seu aplicativo assim:
```js
const router = new VueRouter({
  pageRouting: true,
  routes: [
    {path: '/master', component: Master},
    {path: '/detail', component: Detail},
    {path: '*', redirect: '/master'}
  ]
});
```

---
E carregue uma das rotas quando o aplicativo iniciar:
```js
router.replace('/master');
```

---
Ah, e não se esqueça de falar para o `Vue` sobre as suas rotas:
```js
new Vue({
  router
}).$start();
```
