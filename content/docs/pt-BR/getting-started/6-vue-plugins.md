---
title: Usando Plugins do Vue
contributors: [alexhiroshi]
---

## vue-router

VueRouter é um plugin Vue para lidar com roteamento baseando em URL.
Uma integração experimental com vue-router foi adicionada para o Nativescript-Vue.

Lembre-se, a estratégia de roteamento no mobile não é exatamente igual a URL e a API de histórico usadas no navegador.

Links de roteamento, usados no Vue, como o código abaixo, **não funcionam** no NativeScript

```html
<!-- não funciona -->
<router-link to="/foo">Go to Foo</router-link>
```

Em vez disso, temos que trocar para uma nova rota usando o método `route.push`. Por exemplo, quando usamos um botão, podemos usar o evento `tap` para alterar a rota:

```html
<Button class="btn btn-primary" @tap="$router.push('/counter')">Counter</Button>
```

Para uma documentação mais aprofundada sobre roteamento, [acesse a página do VueRouter](/pt-BR/docs/routing/vue-router/).

## Vuex

Vuex é um padrão e biblioteca de gerenciamento de estado do Vue.js. Ele serve como um local de armazenamento para todos os componentes em uma aplicação que implementa regras para garantir que o estado mude de forma previsível. Vuex pode ser usado nos aplicativos NativeScript; um exemplo, veja o [NativeScript Groceries Vue](https://github.com/tralves/groceries-ns-vue).

### Instalar

Instale o Vuex como você normalmente faria em seu app Vue.js. Com npm, por exemplo:

```shell
$ npm install --save vuex
```

A versão mais nova do Vuex será adicionada em seu arquivo package.json.

### Importar

No arquivo `main.js` do seu app, importe no topo o Vuex:

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```
Agora você pode usar o Vuex no seu app, da mesma forma que você faria em um app Vue padrão da web para gerenciar o estado.

### Crie um Store

Acima da nova instância do Vue, ou em uma pasta separada (por exemplo `/store` na sua pasta app), crie uma nova constante para armazenar seu estado. É aqui que você irá chamar a API do Vuex. Uma simples constante store que inclui o estado do contador que você controla ao longo do seu aplicativo por meio do rastreamento de suas mutações:

```js
const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
})
```

### Use a Store

Agora você pode gerenciar o state chamando a store que você acabou de criar. O exemplo abaixo, o aplicativo rastreia o valor do contador conforme você preciona um botão '+'ou '-'. Note que você não manipula o state em si, mas sim as mutations para incrementar e decrementar seu valor.

```js
new Vue({
  computed: {
    count(){
      return store.state.count
    }
  },

  template: `
    <Page>
      <ScrollView>
        <StackLayout>
          <Button @tap="increment" text="+" />
          <Button @tap="decrement" text="-" />
          <Label :text="count" />
        </StackLayout>
      </ScrollView>
    </Page>
  `,

  methods: {
    increment() {
      store.commit('increment')
    },
    decrement() {
      store.commit('decrement')
    }
  }
}).$start()
```

Mais informações sobre Vuex e como gerenciar estados, pode ser encontrado na [documentação do Vuex](https://vuex.vuejs.org/en/core-concepts.html). Uma arquitetura boa para gerenciar vários elementos do Vuex, pode ser encontrado no aplicativo Groceries na [pasta `/store`](https://github.com/tralves/groceries-ns-vue/tree/master/app/store).
