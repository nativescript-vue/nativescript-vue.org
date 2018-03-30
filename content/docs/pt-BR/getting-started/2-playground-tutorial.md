---
title: Tutorial do Playground
contributors: [alexhiroshi]
---

O [Playground do NativeScript](https://play.nativescript.org?template=play-vue) é um lugar na nuvem onde você pode apenas brincar com NativeScript e Vue.js no seu navegador até descobrir o báscio. Acesse o link e comece arrastando e soltando os componentes na parte de códigos.

Você pode trabalhar no Playground por quanto tempo quiser. Pode usar para ter um gostinho do desenvolvimento com NativeScript ou desenvolver todo o seu projeto. Contudo, quando você estiver pronto para publicar o seu aplicativo, precisará ir para a parte mais avançada e [instalar as ferramentas do NativeScript localmente](/pt-BR/docs/getting-started/installation) e então [escolher um template para começar](/pt-BR/docs/getting-started/templates).

**Essa página consiste em duas partes:**
* [Parte 1: Familiarizando-se com o Playground](#parte-1-familiarizando-se-com-o-playground)
* [Parte 2: Construindo um aplicativo](#parte-2-construindo-um-aplicativo)

# Parte 1: Familiarizando-se com o Playground

Acesse [esse link](https://play.nativescript.org/?template=play-vue) para ter um editor de código simples na nuvem, onde um template muito básico de NativeScript + Vue.js é pré-carregado para você.

> **DICA:** Veja as [tarefas de exemplo para o Playground](/pt-BR/docs/getting-started/playground-tutorial) para ter ideias sobre como começar no Playground.

### Antes de começar

![playground welcome screen](/screenshots/ns-playground/playground-home.png)

Se é sua primeira vez aqui, o Playground solicita que você instale alguns aplicativos mobile &mdash; o NativeScript Playground e o NativeScript Preview. Juntos eles deixam você ver o seu código alterado aplicado em tempo real no aparelho. Não é necessário nenhum building e bundling.

Você pode ignorar essa parte, mas sem ela você perderá a maior parte da diversão e excitação de brincar com Vue.js e NativeScript.

Mantenha os aplicativos rodando enquanto você experimenta o código.

### The lay of the land

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
* (Em progresso) Funcionalidade básica
  * Adicionar tarefas: Usuários podem adicionar tarefas como texto
  * (Em breve) Visualizar tarefas
      * (Em breve) Tarefas recentemente adicionadas são listadas como ativas e podem ser tocadas
      * (Em breve) Tarefas concluídas são listadas em uma aba separada
  * (Em breve) Tarefas completas: Tocar em uma tarefa completa e ativa e mover para outra aba
  * (Em breve) Apagar tarefas: Tocar em um botão "X" remove tarefas ativas ou concluídas
* (Em breve) Funcionalidade avançada
  * (Em breve) Programar tarefas: Usuários podem definir prazos para as tarefas escolhendo uma data em um widget de calendário
  * (Em breve) Gerenciar tarefas em massa

> **DICA:** Todas as seções desse tutorial contêm *alguns conceitos básicos do NativeScript* e subseções de *requisitos de implementação*. Você pode pular a subseção básica e ir direto para a implementação para uma abordagem mais prática.

## The bare Vue.js template

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

O elemento `<Page>` é o elemnto de nível superior da interface de todos os aplicativos NativeScript+Vue.js. Todos os outros elementos são aninhados dentro.

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

### Some NativeScript basics

Os componentes de layout deixam você organizar vários widgets de UI para o seu aplicativo. Sempre que precisar adicionar mais de um widget na tela do aplicativo, provavelmente você use as opções disponíveis de layout. O `<StackLayout>` e `<GridLayout>` são básicos, mas opções versáteis, deixando você posicionar os elementos na vertical ou em um layout semelhante a uma tabela, repectivamente. Enquanto o `<StackLayout>` lida com elementos em sua sequência natural, o `<GridLayout>` deixa você escolher o posicionamento exato dos seus elementos no grid.

### Implementação de requisitos

Use o `<GridLayout>` para organizar um `<TextField>` e um `<Button>` na página. Os dois últimos formam a funcionalidade do aplicativo.

Use o `<ListView>` para exibir as tarefas abaixo do campo.

1. Arraste e solte um componente `<GridLayout>` dentro do bloco `<TabViewItem>` para a primeira aba.<br/>O código padrão cria uma tabela colorida que  mostra como posicionar elementos e juntar células do grid.
1. Configurar o `<GridLayout>`.
  * Defina o grid com duas colunas e duas linhas.
  * Defina a largura do grid para 100% de modo que ocupe toda a largura da tela.
  * Remova quaisquer configurações adicionais para o grid.
  * Remova todos elementos `<Label>` de dentro do bloco `<GridLayout>`.
1. Remova o componente `<Label>` do `<TabViewItem>`. Arraste e solte um componente `<TextField>`, um `<Button>` e um `<ListView>` dentro do bloco `<GridLayout>`.<br/>O Playground adicionar código JavaScript no seu código pela primeira vez. Note o bloco `data()` e `methods` adicionado em cima do bloco `template`. Nas próximas etapas de implementação, você precisará adicionar código a essas seções para criar alguma funcionalidade do aplicativo.
1. Configurar o posicionamento dos elementos dentro do grid.
  * Set the `<TextField>` to inhabit the first column and the first row.
  * Set the `<Button>` to inhabit the second column and the first row.
  * Set the `<ListView>` to span across both columns on the second row.
1. Limpe o código de exemplo do `<TextField>` e do `<ListView>`.
1. Registre as tarefas recentes no console.
1. Adicione as tarefas recentes no array de tarefas.
1. Limpe o campo texto depois da entreda.
1. Lista o nome e o status das tarefas na tela.

```JavaScript
new Vue({
  data() {
    return {
      todos: [],
      textFieldValue: "",
    }
  },
  methods: {
    onToDoTap: function (args) {
      console.log('Task with index: ' + args.index + ' tapped'); // Logs tapped tasks in the console for debugging.
    },
    onButtonTap() {
      console.log("New task added: " + this.textFieldValue + "."); // Logs the newly added task in the console for debugging.
      this.todos.push({ name: this.textFieldValue, status: "NEW" }); // Adds tasks in the ToDo array. Newly added tasks are immediately shown on the screen.
      this.textFieldValue = ""; // Clears the text field so that users can start adding new tasks immediately.
    },
  },


  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />

      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Positions an input field, a button, and the list of tasks in a grid. -->
          <GridLayout columns="3*,*" rows="auto,auto" width="100%">
            <TextField row="0" col="0" v-model="textFieldValue" hint="Enter text..." editable="true" @returnPress="onButtonTap" /> <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
            <Button row="0" col="1" text="Add task" @tap="onButtonTap" />

            <ListView row="1" col="0" colspan="2" for="todo in todos" @todoTap="onToDoTap">
              <v-template>
                <GridLayout columns="3*,*" rows="auto" width="100%">
                  <Label row="0" col="0" :text="todo.name" />
                  <Label row="1" col="1" :text="todo.status" />
                </GridLayout>
              </v-template>
            </ListView>

          </GridLayout>

        </TabViewItem>
        <TabViewItem title="Completed">
          <Label text="This tab will list completed tasks for tracking." textWrap="true" />
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start();
```