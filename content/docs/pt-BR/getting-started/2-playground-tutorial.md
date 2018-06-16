---
title: Tutorial do Playground
contributors: [alexhiroshi, WesleiRamos]
---

O [Playground do NativeScript](https://play.nativescript.org?template=play-vue) é um lugar na nuvem onde você pode apenas brincar com NativeScript e Vue.js no seu navegador até descobrir o básico. Acesse o link e comece arrastando e soltando os componentes na parte de códigos.

Você pode trabalhar no Playground por quanto tempo quiser. Pode usar para ter um gostinho do desenvolvimento com NativeScript ou desenvolver todo o seu projeto. Contudo, quando você estiver pronto para publicar o seu aplicativo, precisará ir para a parte mais avançada e [instalar as ferramentas do NativeScript localmente](/pt-BR/docs/getting-started/installation) e então [escolher um template para começar](/pt-BR/docs/getting-started/templates).

**Essa página consiste em duas partes:**
* [Parte 1: Familiarizando-se com o Playground](#parte-1-familiarizando-se-com-o-playground)
    * [Antes de começar](#antes-de-começar)
    * [Conhecendo o ambiente](#conhecendo-o-ambiente)
    * [Arraste e solte para codificar](#arraste-e-solte-para-codificar)
    * [Confira em tempo real](#confira-em-tempo-real)
    * [Configure seu código](#configure-seu-código)
* [Parte 2: Construindo um aplicativo](#parte-2-construindo-um-aplicativo)
    * [Template limpo do Vue.js](#template-limpo-do-vue.js)
    * [Design básico](#design-básico)
    * [Funcionalidade básica: Adicionar tarefas](#funcionalidade-básica-adicionar-tarefas)
    * [Funcionalidades básicas: Ver, completar e deletar tarefas da aba To Do](#funcionalidades-básicas-ver-completar-e-deletar-tarefas-da-aba-to-do)
    * [Funcionalidades básicas: Ver, retornar para as tarefas ativas e deletar tarefas da aba das completas](#funcionalidades-básicas-ver-retornar-para-as-tarefas-ativas-e-deletar-tarefas-da-aba-das-completas)
    * [Design avançado: Estilizar uma caixa de entrada e botão](#design-avançado-estilizar-uma-caixa-de-entrada-e-botão)
    * [Design avançado: Estilizando a aba de navegação](#design-avançado-estilizando-a-aba-de-navegação)
    * [Design avançado: Estilizando tarefas ativas](#design-avançado-estilizando-tarefas-ativas)
    * [Design avançado: Estilizando tarefas completas](#design-avançado-estilizando-tarefas-completas)

# Parte 1: Familiarizando-se com o Playground

Acesse [esse link](https://play.nativescript.org/?template=play-vue) para ter um editor de código simples na nuvem, onde um template muito básico de NativeScript + Vue.js é pré-carregado para você.

> **DICA:** Veja as [tarefas de exemplo para o Playground](/pt-BR/docs/getting-started/playground-tutorial) para ter ideias sobre como começar no Playground.

### Antes de começar

![playground welcome screen](/screenshots/ns-playground/playground-home.png)

Se é sua primeira vez aqui, o Playground solicita que você instale alguns aplicativos mobile &mdash; o NativeScript Playground e o NativeScript Preview. Juntos eles deixam você ver o seu código alterado aplicado em tempo real no aparelho. Não é necessário nenhum building e bundling.

Você pode ignorar essa parte, mas sem ela você perderá a maior parte da diversão e excitação de brincar com Vue.js e NativeScript.

Mantenha os aplicativos rodando enquanto você experimenta o código.

### Conhecendo o ambiente

![](/screenshots/ns-playground/playground-layout.png)

A barra lateral esquerda fornece um explorador de arquivos e um painel de **Componentes**. A maior parte do seu esforço no aplicativo acontecerá no `app.js` e `app.css`, que contém a funcionalidade e os estilos do aplicativo, respectivamente. Não há necessidade de se aprofundar em outros arquivos agora.

O painel de **Componentes** fornece um acesso rápido para códigos pré-configurados para todos os componentes de UI disponíveis do NativeScript.

Na parte superior da página, você pode enviar as alterações para aplicativos de visualização, salvar e fazer download do seu código.

A parte inferior da página é o seu melhor amigo, fornecendo relatórios de erros em tempo real e logs do aparelho.

### Arraste e solte para codificar

![](/screenshots/ns-playground/playground-drag-and-drop.gif)

Clique no componente do painel de **Componentes** e arraste para o editor de código em algum lugar do bloco do `template`. Soltando o botão do mouse, ele insere o código pré-escrito de exemplo para o respectivo componente. Quaisquer métodos que o acompanham (como acontece no botão ou toque do item) são automaticamente adicionados no topo da página antes do bloco `template`.

> **DICA:** Use a busca do painel de **Componentes** para achar rapidamente o elemento que você quer usar. A busca funciona somente com o título do componente e não com o nome real usado no código. Por exemplo: a busca acha *text field* mas não *textfield*.
>
> ![](/screenshots/ns-playground/playground-component-search.gif)

Para a maioria dos componentes de UI funcionar, você precisa soltá-los dentro do bloco `<Page>`, preferencialmente dentro do componente layout. Os layouts informam ao seu aplicativo como posicionar os componentes de UI na tela.

> **NOTA:** Nesse momento, não há nada que te impeça de deixar o código em um lugar que irá causar a falha do aplicativo ou o simples não carregamento. Nesses casos, verifique as abas **Errors** e **Device Logs** para mais informações.

### Confira em tempo real

![](/screenshots/ns-playground/playground-preview.gif)

Depois que você colocar o seu código em um lugar válido, clique em **Preview** (ou `Ctrl+S` ou `Cmd+S`) e veja o seu aplicativo atualizar na tela do seu aparelho em instantes.

Em alguns casos, quando você interage com o aplicativo, ele fechará inesperadamente. Basta abrí-lo novamente e inspecionar o relatório de falha.

Se em qualquer momento você parar de ver as alterações em seu aparelho, clique no **QR code** e redigitalize o QR code com o aplicativo *Playground*.

### Configure seu código

Então o componente é executado e exibido na tela. Você está animado, mas quer fazer o seu próprio. Apague o código padrão sugerido pelo Playground. Ajuste o tamanho e labels, remova ou adicione elementos.

Vá para o `app.css` e altere um pouco o estilo. Experimente mudar cores e tamanho de fontes.

# Parte 2: Construindo um aplicativo

Se você quer explorar o [Playground do NativeScript](https://play.nativescript.org?template=play-vue), você pode começar criando um simples aplicativo de to-do com os seguintes requisitos:

* Design básico
  * Layout com duas abas
  * Uma aba exibe tarefas ativas e permite adicionar novas tarefas
  * A segunda aba lista as tarefas concluídas
* Funcionalidade básica
  * Adicionar tarefas: Usuários podem adicionar tarefas como texto
  * Ver tarefas: Tarefas recentemente adicionadas são listadas como ativas e podem ser tocadas
  * Tarefas completas: Tocar em uma tarefa completa e ativa e mover para outra aba
  * Apagar tarefas: Tocar em um botão "X" remove tarefas ativas ou concluídas
* Design avançado
  * Input e botão para adicionar tarefas são estilizados
  * Abas são estilizadas
  * Tarefas ativas são estilizadas
  * Tarefas completas são estilizadas

> **DICA:** Todas as seções desse tutorial contêm *alguns conceitos básicos do NativeScript* e subseções de *requisitos de implementação*. Você pode pular a subseção básica e ir direto para a implementação para uma abordagem mais prática.

## Template limpo do Vue.js

![](/screenshots/ns-playground/playground-home.png)

Todo o esforço do desenvolvimento acontecerá no `app.js` e `app.css`, que contém a funcionalidade e os estilos do aplicativo, respectivamente.

O `app.js` criado recentemente para o seu projeto Vue.js, consiste em uma declaração simples de `template` sem nenhuma funcionalidade. Conforme você arrasta e solta os componentes de interface no aplicativo, o Playground também adiciona um bloco de `methods` e preenche com código que contém funcionalidade real do aplicativo.

No `app.js`, você trabalhará no bloco `template` para o design da interface do usuário ou no bloco `methods` para construir a funcionalidade do aplicativo. O bloco `template` requer XML compatível com NativeScript. O bloco `methods` aceita códigos JavaScript Vue.js e NativeScript.

## Design básico

### Progresso da seção

Veja como o seu aplicativo ficará no início e no final dessa seção.

| Tela inicial | Aba 1 | Aba 2 |
|-------|-----|-----|
| ![Bare Vue.js template](/screenshots/ns-playground/two-tabs-start.jpg) | ![First tab](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![Second tab](/screenshots/ns-playground/two-tabs-tab-2.jpg) |

### Conceitos básicos do NativeScript

O elemento `<Page>` é o elemento de nível superior da interface de todos os aplicativos NativeScript+Vue.js. Todos os outros elementos são aninhados dentro.

O elemento `<ActionBar>` exibe uma barra de ação para o `<Page>`. Um `<Page>` não pode conter mais que um `<ActionBar>`.

Tipicamente, depois do `<ActionBar>`, você terá componentes de navegação (como um menu drawer ou uma view de aba) ou de layout. Estes elementos controlam o layout do seu aplicativo e deixa que você determine onde colocar outros elementos de interface.

### Implementação de requisitos

Use o componente `<TabView>` para criar um aplicativo de duas abas.

1. Remova o bloco padrão `<ScrollView>` e todo o conteúdo que vem com o template.<br/>Os componentes `<ScrollView>` são containers de nível superior do layout para conteúdo com rolagem.
1. Arraste e solte o componente `<TabView>` em seu lugar.<br/>O Playground não aplica formatação de código e não cuida da identação quando inserido novos componentes.
1. Configure a altura do `<TabView>` para preencher a tela (defina para 100%).<br/>Em um aparelho iOS, a altura padrão faz com que as abas sejam exibidas em algum lugar no meio da tela.
1. Altere os títulos dos elementos `<TabViewItem>` e o conteúdo para refletir sua finalidade.<br/>Nesse ponto, o texto do conteúdo das abas são exibidos em um componente `<Label>` sem estilo e formação. Aplique a propriedade `textWrap="true"` aos repectivos componentes `<Label>` para melhorar a visualização do texto.

```JavaScript
new Vue({

  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />

      <TabView height="100%">
        <TabViewItem title="To Do">
          <Label text="This tab will list active tasks and will let users add new tasks." textWrap="true" />
        </TabViewItem>
        <TabViewItem title="Completed">
          <Label text="This tab will list completed tasks for tracking." textWrap="true" />
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```

## Funcionalidade básica: Adicionar tarefas

### Progresso da seção

Veja como o seu aplicativo ficará no início e no final dessa seção.

| Tela inicial | Aba 1 - Sem tarefas | Aba 1 - Adicionar tarefas |
|-------|-----|-------------|
| ![First tab before changes](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![First tab without any tasks](/screenshots/ns-playground/input-field.jpg) | ![First tab with added tasks](/screenshots/ns-playground/added-tasks.jpg)

### Alguns princípios básicos do NativeScript

Os componentes de layout deixam você organizar vários widgets de UI para o seu aplicativo. Sempre que precisar adicionar mais de um widget na tela do aplicativo, provavelmente usará as opções de layout disponíveis. O `<StackLayout>` e `<GridLayout>` são básicos, mas opções versáteis, deixando você posicionar os elementos na vertical ou em um layout semelhante a uma tabela, repectivamente. Enquanto o `<StackLayout>` lida com elementos em sua sequência natural, o `<GridLayout>` deixa você escolher o posicionamento exato dos seus elementos no grid.

### Implementação de requisitos

Use o `<GridLayout>` para organizar um `<TextField>` e um `<Button>` na página. Os dois últimos formam a funcionalidade do aplicativo.

Use o `<ListView>` para exibir as tarefas abaixo do campo.

1. Delete o componente `<Label>` do começo do primeiro bloco `<TabViewItem>` para a primeira aba.
1. Arraste e solte um componente `<StackLayout>` para dentro do bloco `<TabViewItem>` para a primeira aba.<br/>O código padrão cria uma pilha vertical colorida.
1. Delete todos os componentes `<Label>` do bloco `<StackLayout>`.
1. Arraste e solte um componente `<GridLayout>` dentro do bloco `<StackLayout>` para a primeira aba.<br/>O código padrão cria uma tabela colorida que mostra como posicionar elementos e mesclar célular a grade.
1. Delete todos os componentes `<Label>` do bloco `<GridLayout>`.
1. Configure o `<StackLayout>`.
    * Remova a cor de fundo.
    * Defina a largura e a altura.
1. Configure o `<GridLayout>`.
    * Define a grade para ter 2 colunas e uma linha.
    * Defina a largura da grade para 100% de modo que ela tenha a largura da tela.
    * Remova quaisquer configurações adicionais para a grade.
1. Arraste e solte um `<TextField>` e um `<Button>` dentro do bloco `<GridLayout>`.<br/>O Playground adiciona código JavaScript ao seu código pela primeira vez. Note os blocos `data()` e `methods` adicionados acima do bloco `template`. Nos próximos passos da implementação, você precisará adicionar código a essas seções para criar algumas funcionalidas ao aplicativo.
1. Arraste e solte um `<ListView>` abaixo da grade.<br/>O código padrão cria uma lista com nomes de países e icones de bandeiras.
1. Configure o posicionamento dos elementos dentro da grade.
    * Deina o `<TextField>` para ficar na primeira coluna e na primeira linha.
    * Defina o `<Button>` para ficar na segunda coluna e na primeira linha.
1. Remova o código de exemplo do `<TextField>` e do `<ListView>`. Defina uma altura para `<ListView>`.
1. Registre as novas tarefas no console.
1. Adiciona as tarefas recém-adicionadas dentro de um array de tarefas. Use `unshift` para colocar novos itens no top da página.
1. Limpe as caixas de textos após a entrada.
1. Liste o nome das tarefas na tela.

No final desta etapa, seu código deve parecer com este exemplo:

```JavaScript
const Vue = require("nativescript-vue");

new Vue({
  data() {
    return {
      todos: [],
      textFieldValue: "",
    }
  },
  methods: {
    onItemTap(args) {
      console.log('Task with index: ' + args.index + ' tapped'); // Registra log das tarefas tocadas no console para debug.
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Registra log da nova tarefa no console para debug.
      this.todos.unshift({ name: this.textFieldValue }); // Adiciona a nova tarefa no array `todos[]`. Novas tarefas são imediatamente exibidas na tela.
      this.textFieldValue = ""; // Limpa o input de texto, desta forma o usuário está apto a adicionar novas tarefas imediatamente.
    },
  },


  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Posiciona uma caixa de texto, um botão e uma lista de tarefas na grade. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configura o input de texto e garante que pressionar o Return no teclado produz o mesmo resultado que tocar no botão. -->
              <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%"> <!-- Certifique-se de definir uma altura ou sua lista não será exibida no iOS. -->
              <v-template>
                <Label :text="todo.name" />
              </v-template>
            </ListView>
          </StackLayout> 
        </TabViewItem>

        <TabViewItem title="Completed">
          <Label text="This tab will list completed tasks for tracking." textWrap="true" />
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```

## Funcionalidades básicas: Ver, completar e deletar tarefas da aba To Do

### Progresso da seção

Veja como seu app vai parecer no começo e no fim desta seção.

| Tab 1 - Tarefas adicionadas | Tab 1 - Item tocado | Tab 2 - Tarefas concluídas
|-----|-------------|-------|
| ![First tab with added tasks](/screenshots/ns-playground/added-tasks.jpg) | ![Action dialog toggled](/screenshots/ns-playground/active-task-dialog.jpg) | ![Second tab with completed tasks](/screenshots/ns-playground/completed-tasks.jpg) |

### Alguns princípios básicos do NativeScript

Pronto para uso, o componente `<ListView>` detecta um gesto de toque para cada item e emite um evento para ele. O evento possui informações sobre o índice do item do array tocado e o próprio item do array. Para permitir que o usuário escolha o resultado do gesto de toque e expandir a funcionalidade do seu aplicativo, você pode conectar um diálogo ao evento.

[`dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_) é um módulo disponível globalmente que fornece vários tipos de diálogos configuráveis para o aplicativos: alert, action, prompt, login, confirmation. Esta implementação depende do [`action()`](/en/docs/elements/dialogs/action) para permitir os usuários escolherem se eles querem marcar uma tarefa como completa ou deleta-la da sua lista de tarefas ativas.

### Implementação dos requisitos

1. Em um segundo bloco `<TabViewItem>`, arraste e solte um elemento `<ListView>`, limpe seu conteúdo e defina uma altura para ele.
1. No nosso recém-adicionado elemento `<ListView>` mostre os itens de um array de tarefas completas (`dones`).

  ```HTML
  <ListView for="done in dones" @tap="onDoneTap" height="100%"> <!-- Certifique-se de definir uma altura ou sua lista não será exibida no iOS. -->
    <v-template>
      <Label :text="done.name" />
    </v-template>
  </ListView>
  ```

1. Modifique o método `onItemTap`.
  * Método mostra um diálogo `action()`.
  * Método registra uma seleção do usuário no console para debugging.
  * Baseado na seleção do usuário, o método move os elementos do array `todos` para o array `dones`, deleta os elementos do array `todos` ou descarta o diálogo. Use `splice()` para evitar deixar "buracos" no array, e `unshift()` para ter certeza que as tarefas recentes são mostradas no topo.

  ```JavaScript
  onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Registra as opções escolhidas para debugging.
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Coloca a tarefa ativa tocada no topo de tarefas completadas.
              this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.
              break;
            case 'Cancel' || undefined: // Descarta o diálogo.
              break;
          }
      }) 
    },
  ```

No final desta etapa, seu código deve parecer com este exemplo:

```JavaScript
const Vue = require("nativescript-vue");

new Vue({
  data() {
    return {
      todos: [],
      textFieldValue: "",
    }
  },
  methods: {
    onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Registra as opções escolhidas para debugging.
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Coloca a tarefa ativa tocada no topo de tarefas completadas.
              this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.
              break;
            case 'Cancel' || undefined: // Descarta o diálogo.
              break;
          }
      }) 
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Registra log da nova tarefa no console para debug.
      this.todos.unshift({ name: this.textFieldValue }); // Adiciona a nova tarefa no array `todos[]`. Novas tarefas são imediatamente exibidas na tela.
      this.textFieldValue = ""; // Limpa o input de texto, desta forma o usuário está apto a adicionar novas tarefas imediatamente.
    },
  },


  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Posiciona uma caixa de texto, um botão e uma lista de tarefas na grade. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configura o input de texto e garante que pressionar o Return no teclado produz o mesmo resultado que tocar no botão. -->
              <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%"> <!-- Certifique-se de definir uma altura ou sua lista não será exibida no iOS. -->
              <v-template>
                <Label :text="todo.name" />
              </v-template>
            </ListView>
          </StackLayout> 
        </TabViewItem>

        <TabViewItem title="Completed">
          <ListView for="done in dones" @tap="onDoneTap" height="100%"> <!-- Certifique-se de definir uma altura ou sua lista não será exibida no iOS. -->
              <v-template>
                <Label :text="done.name" />
              </v-template>
            </ListView>
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```

## Funcionalidades básicas: Ver, retornar para as tarefas ativas e deletar tarefas da aba das completas

### Progresso da seção

Veja como seu aplicativo vai parecer no começo e no fim desta seção.

| Tab 2 - Tarefas completas | Tab 2 - Item tocado | Tab 1 - Tarefa ativa
|-----|-------------|-----|
| ![Second tab with completed tasks](/screenshots/ns-playground/completed-tasks-2.jpg) | ![Action dialog toggled](/screenshots/ns-playground/completed-tasks-dialog.jpg) | ![First tab with active tasks](/screenshots/ns-playground/completed-tasks-moved-to-active.jpg)

### Alguns princípios básicos do NativeScript

Esta etapa da implementação não requer nenhum conhecimento adicional.

### Implementação dos requisitos

Para a segunda aba, modifique o método `OneDoneTap`:

* Método mostra um diálogo `action`.
* Método registra uma seleção do usuário no console para debugging.
* Baseado na seleção do usuário, o método move os elementos do array `dones` para o array `todos`, deleta os elementos do array `dones` ou descarta o diálogo. Use `splice()` para evitar deixar "buracos" no array, e `unshift()` para ter certeza que as tarefas recentes são mostradas no topo.

```JavaScript
  onDoneTap(args) {
    action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
    .then(result => {
      console.log(result); // Registra a opção selecionada para debugging.
      switch (result) {
        case 'Mark to do':
          this.todos.unshift(args.item); // Coloca a tarefa completa tocada no topo das tarefas para fazer
          this.dones.splice(args.index, 1); // Remove a tarefa tocada da lista das completas
          break;
        case 'Delete forever':
          this.dones.splice(args.index, 1);
          break;
        case 'Cancel'||undefined:
          break;
      }
    })
  },
  ```

Ao final dessa estapa, seu código deve se parecer com este exemplo:

```JavaScript
const Vue = require("nativescript-vue");

new Vue({
  data() {
    return {
      todos: [],
      textFieldValue: "",
    }
  },
  methods: {
    onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Registra as opções escolhidas para debugging.
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Coloca a tarefa ativa tocada no topo de tarefas completadas.
              this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Remove a tarefa ativa tocada.
              break;
            case 'Cancel' || undefined: // Descarta o diálogo.
              break;
          }
      }) 
    },
    onDoneTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
      .then(result => {
        console.log(result); // Registra a opção selecionada para debugging.
        switch (result) {
          case 'Mark to do':
            this.todos.unshift(args.item); // Coloca a tarefa completa tocada no topo das tarefas para fazer
            this.dones.splice(args.index, 1); // Remove a tarefa tocada da lista das completas
            break;
          case 'Delete forever':
            this.dones.splice(args.index, 1);
            break;
          case 'Cancel'||undefined:
            break;
        }
      })
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Registra log da nova tarefa no console para debug.
      this.todos.unshift({ name: this.textFieldValue }); // Adiciona a nova tarefa no array `todos[]`. Novas tarefas são imediatamente exibidas na tela.
      this.textFieldValue = ""; // Limpa o input de texto, desta forma o usuário está apto a adicionar novas tarefas imediatamente.
    },
  },


  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />
      
      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Posiciona uma caixa de texto, um botão e uma lista de tarefas na grade. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configura o input de texto e garante que pressionar o Return no teclado produz o mesmo resultado que tocar no botão. -->
              <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%"> <!-- Certifique-se de definir uma altura ou sua lista não será exibida no iOS. -->
              <v-template>
                <Label :text="todo.name" />
              </v-template>
            </ListView>
          </StackLayout> 
        </TabViewItem>

        <TabViewItem title="Completed">
          <ListView for="done in dones" @tap="onDoneTap" height="100%"> <!-- Certifique-se de definir uma altura ou sua lista não será exibida no iOS. -->
              <v-template>
                <Label :text="done.name" />
              </v-template>
            </ListView>
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```

## Design avançado: Estilizar uma caixa de entrada e botão

### Progresso da seção

Veja como seu aplicativo vai parecer no começo e no fim desta seção.

| Tab 1 - Sem estilo | Tab 1 - Estilizado | Tab 1 - Estilizado |
|-----|-------------|----|
| ![Unstyled input](/screenshots/ns-playground/input-field.jpg) | ![Styled button](/screenshots/ns-playground/styled-button.jpg) | ![Styled input](/screenshots/ns-playground/styled-input.jpg) |

### Alguns princípios básicos do NativeScript

Quando você trabalha com NativeScript e Vue.js, você pode usar CSS application-wide ou CSS inline para estilizar seu aplicativo. CSS aplication-wide é aplicado por primeiro e tratado em `app.css` na raiz do seu projeto. Veja também: [Styling](https://docs.nativescript.org/ui/styling).

Com seletores de tipo, você pode selecionar um componente da UI e aplicar estilos nele. Para selecionar um tipo, use o nome do componente como fornecido no código. Por exemplo, para selecionar uma tab view, use `TabView`.

### Implementação dos requisitos

Em `app.css`, mude o tamanho da fonte, a cor e as margens em volta de `<TextField>`.

```CSS
TextField {
    font-size: 20;
    color: #53ba82;
    margin-top: 10;
    margin-bottom: 10;
    margin-right: 5;
    margin-left: 20;
}
```

1. Em `app.js` na linha 63, adicione um `id` para o botão.
  
  ```HTML
  <Button id="add-task-button" row="0" col="1" text="Add task" @tap="onButtonTap" />
  ```

1. Em `app.css`, crie um estilo para o botão. Modifique o estilo para criar um botão colorido com as bordas arredondadas.

  ```CSS
  #add-task-button {
    font-size: 20;
    font-weight: bold;
    color: white;
    background-color: #53ba82;
    margin-top: 20;
    margin-bottom: 10;
    margin-right: 20;
    margin-left: 5;
    border-radius: 20px;
  }
  ```

## Design avançado: Estilizando a aba de navegação

### Progresso da seção

Veja como seu aplicativo vai parecer no começo e no fim desta seção.

| Aba - Sem estilo | Aba estilizada 
|-----|-------------|
| ![Unstyled tabs](/screenshots/ns-playground/styled-button.jpg) | ![Styled tabs](/screenshots/ns-playground/styled-tabs.jpg) |

### Alguns principios básicos do NativeScript

`<TabView>` fornece algumas propriedades de estilo prontas. Você pode aplicar uma transformação de texto para cada título das abas (`textTransform`) e mudar o tamanho da fonte e cor globalmente (`tabTextFontSize`, `tabTextColor`, `selectedTabTextColor`). You também pode mudar a cor de fundo das suas abas (`tabBackgroundColor`);

> **NOTA:** Atualmente, `tabTextFontSize` não funciona no iOS e você não pode mudar o tamanho dos títulos das abas no iOS.

### Implementação dos requisitos

#### Mudar a cor e o tamanho da fonte do título da aba selecionada

No `app.js`, na linha 57, adicione as propriedades `selectedTabTextColor` e `tabTextFontSize`. Se você está testando isto no iOS, a fonte não vai mudar, mas funciona tranquilo no Android.

```HTML
<TabView height="100%" selectedTabTextColor="#53ba82" tabTextFontSize="20" >
```

#### Transformação de texto

No `app.js`, nas linhas 58 e 73, aplique a propriedade `textTransform`. Você pode usar esta propriedade apenas no nível `<TabViewItem>`.

```HTML
<TabViewItem title="To Do" textTransform="uppercase" >
```

```HTML
<TabViewItem title="Completed" textTransform="uppercase">
```

## Design avançado: Estilizando tarefas ativas

Veja como seu aplicativo vai parecer no começo e no fim desta seção.

| Tarefas ativas - Sem estilo | Tarefas ativas - sem separador | Tarefas ativas - estilizado |
|-----|-------------|---|
| ![Unstyled active tasks](/screenshots/ns-playground/styled-tabs.jpg) | ![No separator](/screenshots/ns-playground/styled-list-view-no-separator.jpg) | ![Styled list](/screenshots/ns-playground/styled-list-view-added-tasks.jpg) |

### Alguns principios básicos do NativeScript

`<ListView>` e `<Label>` têm propriedades de estilos prontas que você pode usar para controlar os elementos como o separador de lista ou a quebra de texto automática do `app.js`. Para mudar o estilo da fonte, cor e posição do texto, você precisa usar CSS em `app.css`.

Para implementar um estilo particular para o texto das tarefas ativas, você pode definir um `id` para o elemento `<Label>`.

### Implementação dos requisitos

1. Em `app.js`, na linha 67, defina um `id` para o `<Label>` que representa as tarefas ativas e habilite a quebra de texto automática. Habilitando a quebra de texto automática garante que o texto mais longo seja exibido corretamente em sua lista.

  ```HTML
  <Label id="active-task" :text="todo.name" textWrap="true" >
  ```
1. Na linha 65, adicione a propriedade `separatorColor` e defina o como `transparent`. Desta forma, o separador não vai mais aparecer em sua lista.

  ```HTML
  <ListView for="todo in todos" @itemTap="onItemTap" height="100%" separatorColor="transparent">
  ```
1. Em `app.css`, crie um estilo para as tarefas tivas. Defina a o tamanho da fonte, cor e algum padding para posicionar o texto na página. Rode alterando margin e padding até você obter um resultado que agrade a você.

  ```CSS
  #active-task {
    font-size: 20;
    font-weight: bold;
    color: #53ba82;
    margin-left: 20;
    padding-top: 5;
    padding-bottom: 10;
  }
  ```

## Design avançado: Estilizando tarefas completas

Veja como seu aplicativo vai parecer no começo e no fim desta seção.

| Tarefas completas - Sem estilo | Tarefas completas - Estilizadas | 
|-----|-------------|
| ![Unstyled completed tasks](/screenshots/ns-playground/completed-tasks-unstyled.jpg) | ![Styled completed tasks](/screenshots/ns-playground/completed-tasks-styled.jpg) |

### Alguns principios básicos do NativeScript

Esta seção aplica o conhecimento básico do Native de [Design avançado: Estilizando tarefas ativas](#design-avançado-estilizando-tarefas-ativas)

### Implementação dos requisitos

1. Em `app.js`, na linha 76, defina um `id` para o `<Label>` que representa tarefas completadas e habilite a quebra de texto automática. Habilitando a quebra de texto automática garante que o texto mais longo seja exibido corretamente em sua lista.

  ```HTML
  <Label id="completed-task" :text="done.name" textWrap="true" />
  ```
1. Na linha 74, defina um `id`, adicione a propriedade `separatorColor` e defina o como `transparent`. Desta forma, o separador não vai mais aparecer em sua lista. Você pode usar o `id` para estilizar as margens para o `<ListView>`.

  ```HTML
  <ListView id="completed-list" for="done in dones" @itemTap="onDoneTap" height="100%" separatorColor="transparent" >
  ```
1. Em `app.css`, crie um estilo para as tarefas tivas. Defina a o tamanho da fonte, cor e algum padding para posicionar o texto na página. Rode alterando margin e padding até você obter um resultado que agrade a você.

  ```CSS
  #completed-task {
    font-size: 20;
    color: #d3d3d3;
    margin-left: 20;
    padding-top: 5;
    padding-bottom: 10;
    text-decoration: line-through;
  }
  ```
1. Crie um estilo para todo `<ListView>` e defina um margin top. Desta forma, o texto não vai aparecer diretamente debaixo da action bar. Rode alterando o margin top até você obter um resultado que agrade a você.

  ```CSS
  #completed-list {
    margin-top: 20;    
  }
  ```