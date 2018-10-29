---
title: Playground Tutorial
contributors: [ianaya89]
---

El [NativeScript Playground](https://play.nativescript.org?template=play-vue) es un lugar en la nube donde puedas dar tus primeros pasos con **NativeScript-Vue** desde tu navegador. Simplemente ingresa al link y comienza arrastrar y soltar componentes.

Puedes trabajar con el *Playground* tanto como quieras: usarlo para probar como desarrollar con NativeScript o incluso dearrollar todo tu proyecto en la plataforma. Sin embarjo, cuando llegue el momento de llevar tu aplicación al mundo, vas a necesitar instalar las [herramientas de NativeScript localmente](/es/docs/getting-started/installation) y luego [elegir uno de los templates disponibles](/es/docs/getting-started/templates).

**Esta sección, consiste en dos partes:**
* [Parte 1: Familiarizandose con el Playground](#parte-1-familiarizandose-con-el-playground)
    * [Antes de comenzar](#antes-de-comenzar)
    * [La disposición de la tierra](#la-disposición-de-la-tierra)
    * [Arrastra y suelta código](#arrastra-y-suelta-código)
    * [Chequeo en tiempo real](#cheque-en-tiempo-real)
    * [Configura tu código](#configura-tu-código)
* [Parte 2: Construyendo una aplicación](#parte-2-construyendo-una-aplicación)
    * [El template básico de Vue.js](#el-template-básico-de-vuejs)
    * [Diseño básico](#diseño-básico)
    * [Funcionalidad básica: Agregar tareas](#funcionalidad-básica-agregar-tareas)
    * [Funcionalidad básica: Ver, completar y borrar tareas de la pestaña "To Do"](#funcionalidad-básica-ver-completar-y-borrar-tareas-de-la-pestaña-to-do.)
    * [Funcionalidad básica: Ver, volver a tareas activas y borrar tareas de la pestaña "Completed"](#funcionalidad-básica-ver-volver-a-tareas-activas-y-borrar-tareas-de-la-pestaña-completed)
-   * [Diseño avanzado: Estilar campo de texto y botón](#diseño-avanzado-styled-input-field-and-button)
    * [Diseño avanzado: Estilar pestaña de navegación](#diseño-avanzado-styled-tab-navigation)
    * [Diseño avanzado: Estilar tareas activas](#diseño-avanzado-styled-active-tasks)
    * [Diseño avanzado: Estilar tareas completadas](#diseño-avanzado-styled-completed-tasks)


# Parte 1: Familiarizandose con el Playground

Abriendo [este link](https://play.nativescript.org/?template=play-vue) vas a poder ver un editor de código simple y en la nube, donde un template básico de NativeScript + Vue.js esta precargado para que empieces a usar.

### Antes de comenzar

![playground welcome screen](/screenshots/ns-playground/playground-home.png)

Si esta es tu primera vez aquí, el *Playground* te solicitará instalar algunas aplicaciones móviles: NativeScript Playground y NativeScript Preview. Ambas te permiten ver en tiempo real, los cambios que realizas en el código sin necesidad de recompilar el mismo.

Puedes obviar este paso, pero si lo haces te vas a perder mucha de la diversión de jugar un poco con Vue.js y NativeScript.

Manten las aplicaciones corriendo mientras experimentas un poco con el código.

### La disposición de la tierra

![](/screenshots/ns-playground/playground-layout.png)

La barra lateral izquierda, ofrece un explorador de archivos y un panel **Components**. La mayor parte de tu tiempo, vas a estar trabajando en el archivo `app.js` y `app.css`, los cuales contienen la funcionalidad de la aplicación y los estilos de la misma. Por el momento no necesitamos indagar en estos archivos.

El panel de **Components** provee una acceso rápido a código pre-configurado de los componentes de UI de NativeScript.

Desde la parte superior de la página, puedes subir tus cambios de código para previsualizar las aplicaciones en tu dispositivo, guardar los cambios e incluso descargar el código.

En la parte inferior, encontrarás a tu mejor amigo a la hora de obtener información en tiempo real. En este panel vas a poder leer errores e informacion de *logging*

### Arrastra y suelta el código

![](/screenshots/ns-playground/playground-drag-and-drop.gif)

Simplemente haz click en un componente del panel y sueltalo en el editor de código (en cualquier lugar dentro del bloque `template`). Al soltar el botón del mouse, se inserta un código predeterminado. relacionado al componente en cuestión. Cualquier posible método que relacionado al componente (como el que ocurre al presionar un item), se agrega automáticamente en la parte superior de la página antes del bloque `template`.

> **TIP:** Usa la funcionalidad de búsqueda del panel de **Components** para acceder rápidamente al elemento que necesitas. Ten en cuenta que la búsqueda funciona solo con el título del componente y no con el nombre de código. Por ejemplo: puedes buscar con las palabras *text field* pero no con *TextField*.
>
> ![](/screenshots/ns-playground/playground-component-search.gif)

Para que la mayoría de los componentes funcionen, necesitas soltarlos dentro del bloque `<Page>`, preferentemente dentro de un contenedor (*layout*). Recuerda que los contenedores le permiten a la aplicación, saber como posicionar el contenido dentro de la pantalla.

> **NOTA:** Actualmente, no hay nada que impida que sueltes código en algun lugar que cause que la aplicación colapse o deje de funcionar. En esos casos, debes estar atento a las pestañas **Errors** y **Device Logs** para poder detectar el problema.

### Chequeo en tiempo real

![](/screenshots/ns-playground/playground-preview.gif)

Una vez que ubicas tu código en un lugar válido, puedres presionar el botón **Preview** (o `Ctrl+S`/`Cmd+S`) y ver como tu aplicación se actualiza en tu pantalla de forma instantánea.

En algunos casos, cuando interactuas con tu aplicación, esta puede cerrarse de manera inesperada. Simplemente vuelve a lanzarla y checa los reportes de errores.

Si en algun punto dejas de visualizar en el dispositivo los cambios aplicados, haz clic en el **código QR** y vuelve a escanearlo.

### Configura tu código

Ahora el componente se ejecuta y se muestra en la pantalla. Seguramente estas entusiasmado con los resultados pero quieres hacer algo por ti mismo.

Puedes *hackear* el código sugerido por defecto, cambia tamaños, etiquetas o incluso agrega y quita elementos. Anímate a explorar.

Puedes ir al archivo `app.css` y modificar algunos estilos. Por ejemplo, experimenta cambiando colores y tamaños de texto.

# Parte 2: Construyendo una aplicación

Si quieres explorar más a fondo el [NativeScript Playground](https://play.nativescript.org?template=play-vue), puedes empezar por crear una simple aplicación *to-do* con los siguientes requerimientos:

* Diseño básico
  * Diseño de dos pestañas
  * Una pestaña muestra las tareas activas y permite crear nuevas tareas
  * La otra pestaña es una lista con las tareas completadas
* Funcionalidad básica
  * Agregar tareas: el usuario puede agregar tareas como texto
  * Ver tareas: Las nuevas tareas son mostradas como activas y pueden ser presionadas
  * Tareas completadas: Al presionar una tarea activa se despliega un diálogo (de tipo *action*) con opciones
  * Borrar tareas: Al presionar una tarea activa o completada se despligue una diálogo (de tipo *action*) con opciones
* Diseño avanzado
  * Campo de texto y botón para agregar tareas con estilo personalizado
  * Pestañas con estilos personalizados
  * Tareas activas con estilos personalizados
  * Tareas completadas con estilos personalizados

> **TIP:** Todas las secciones de este tutorial, contienen subsecciones con **Conceptos básicos de NativeScript** y **Requerimientos de Implementación**. Puedes omitir las subsecciones básicas y pasar directamente a las de implementación.

## El template básico de Vue.js

![](/screenshots/ns-playground/playground-home.png)

Todo el desarrollo de este tutorial transcurre en los archivos `app.js` y `app.css`, los cuales contienen la funcionalidad de la aplicación y los estilos de la misma.

El archivo `app.js` consiste en una simple declaración de un `template` sin singun tipo de funcionalidad extra. Mientras que vayas arrastrando y soltando componentes de UI dentro de la aplicación, el mismo Playground va a ir agregando bloques `methods` con el código correspondiente.

Dentro de `app.js`, vas a estar trabajando en el bloque `template` para diseñar la interfaz de usuario o en el bloque `methods` para crear la funcionalidad. El bloque `template` requiere XML compatible con NativeScript. El bloque `methods` acepta tanto código Vue.js como JavaScript.

## Diseño básico

### Progreso de la Sección

Asi es como tu aplicación luce al principio de la sección y como lo hará una vez que finalices la misma.

| Pantalla Inicial | Pestaña 1 | Pestaña 2 |
|-------|-----|-----|
| ![Bare Vue.js template](/screenshots/ns-playground/two-tabs-start.jpg) | ![Primer Pestaña](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![Segunda Pestaña](/screenshots/ns-playground/two-tabs-tab-2.jpg) |

### Conceptos básicos de NativeScript

`<Page>` es un elemento de interfaz de primer nivel en una aplicación **NativeScript-Vue**. Todos los demas elementos estarán anidados dentro de este.

El elemento `<ActionBar>` muestra una barra de acción para el elemento`<Page>`. Un elemento `<Page>` no puede contener más de un elemento `<ActionBar>`.

Comunmente, luego del elemento `<ActionBar>`, vas a colocar componentes de nevegación (como un *drawer* o un *tab view*) o componentes de posicionamiento (*layout*). Ambos tipos de elemento controlan como distribuir y posicionar el contenido de tu aplicación.

### Requerimientos de Implementación

Usa el componente `<TabView>` para crear una aplicación con dos pestañas

1. Remueve el componente `<ScrollView>` con todo su contenido creado por defecto<br/>Los componentes `<ScrollView>` también son elementos de primer nivel utilizados para contenido desplazable.
1. Arrastra y suelta el componente `<TabView>` donde lo quieras ubicar.<br/>Ten en cuenta que el Playground no aplica formato de código automáticamente al insertar nuevos componentes.
1. Configura el alto (*height*) del elemento `<TabView>` para rellenar toda la pantalla (`100%`).<br/>En dispositivos iOS, el alto por defecto causa que las pestañas se muestren en el medio de la pantalla.
1. Cambia los títulos de los elementos `<TabViewItem>` y su contenido, para que reflejen el propósito de los mismos.<br/>En este punto, el contenido de texto de las pestañas es mostrado en elementos `<Label>` sin estilos y sin formatos. Aplica la propiedad `textWrap="true"` a los componentes `<Label>` para mejorar la visualización del texto.

Al final de este paso, tu código deberia asemejarse al siguiente ejemplo:

```javascript
const Vue = require('nativescript-vue');

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

## Funcionalidad básica: Agregar tareas

### Progreso de la sección

Asi es como tu aplicación luce al principio de la sección y como lo hará una vez que finalices la misma.

| Pantalla Inicial | Pestaña 1 - Sin tareas | Pestaña 1 - Con tareas |
|-------|-----|-------------|
| ![Primer pestaña antes de los cambios](/screenshots/ns-playground/two-tabs-tab-1.jpg) | ![Primer pestaña sin tareas](/screenshots/ns-playground/input-field.jpg) | ![Primer pestaña con tareas](/screenshots/ns-playground/added-tasks.jpg)

### Conceptos básicos de NativeScript

Los componentes de posicionamiento (*layouts*), te permiten acomodar los componentes de UI en tu aplicación. Cada vez que necesites colocar más de un componente en patanlla, vas a necesitar usar componentes de posicionamiento. Los componentes `<StackLayout>` y `<GridLayout>`son las opciones más básicas y versátiles. Permiten ubicar contenido en formal vertical o de grilla, respectivamente. Mientras que `<StackLayout>` muestra elementos en una secuencia natural, `<GridLayout>` permite elegir de forma más precisa como posicionar los elementos dentro de un sistema de grillas.

### Requerimientos de Implementación

Usa el componente `<GridLayout>` para acomodar el elemento `<TextField>` y el elemento `<Button>` dentro de la página. Estos últimos son los componentes que permitirán el ingreso de datos a la aplicación.

Usa el componente `<ListView>` para mostrar tareas debajo del campo de texto

1. Borra el componente `<Label>` dentro del primer elemento `<TabViewItem>`.
1. Arrastra y suelta el componente `<StackLayout>` dentro del primer elemento `<TabViewItem>`<br/>El código por defecto crea un contenido vertical bastante colorido.
1. Borra todos los componentes `<Label>` dentro del elemento `<StackLayout>`.
1. Arrastra y suelta el componente `<GridLayout>` dentro del elemento `<StackLayout>`.<br/>El código por defecto crea una tabla colorida que muestra como ubicar elementos y combinar celdas.
1. Borra todos los componentes `<Label>` del elemento `<GridLayout>`.
1. Configura el componente `<StackLayout>`.
    * Remueve el color de fondo.
    * Establece el ancho y alto deseado.
1. Configura el componente `<GridLayout>`.
    * Ajusta la grilla para que tenga dos columnas y una fila.
    * Establece el ancho de la grilla al valor `100%` para que ocupe todo el ancho de pantalla.
    * Remueve cualquier otra configuracioón de la grilla.
1. Arrastra y suelta el componente `<TextField>` y el componente `<Button>` dentro del elemento `<GridLayout>`<br/>El Playground agregará código JavaScript por primera vez. Puedes ver que se agrego al código tanto un bloque `data()` como un bloque `methods` (arriba de `template`). En los próximos pasos, vas a tener que agregar código a estos bloques para crear la funcionalidad de la aplicación.
1. Arrastra y suelta el componente `<ListView>` debajo de la grilla.<br/>El código por defecto crea una lista de países con sus respectivos íconos.
1. Configura el componente posicionando los elementos dentro de la grilla.
    * Coloca el componente `<TextField>` dentro de la celda perteneciente a la primera fila y primer columna.
    * Coloca el componente `<Button>` dentro de la celda perteneciente a la primera fila y segunda columna.
1. Limpia el código de ejemplo que pertenece al elemento `<TextField>` y al elemento `<ListView>`. Establece un alto para el elemento `<ListView>`.
1. Imprime la nueva tarea agregada en la consola
1. Agrega la nueva tarea a la colección de tareas. Usa el método `unshift` (de `Array`) para colocar la tarea al principio de la página.
1. Limpia el campo de texto luego de agregar la tarea.
1. Muestrta el nombre de la tarea en pantalla.

Al final de este paso, tu código deberia asemejarse al siguiente ejemplo:

```javascript
const Vue = require('nativescript-vue');

new Vue({
  data() {
    return {
      todos: [],
      textFieldValue: '',
    }
  },
  methods: {
    onItemTap(args) {
      console.log('Task with index: ' + args.index + ' tapped'); // Imprime en consola la tarea presionada.
    },
    onButtonTap() {
      console.log('New task added: ' + this.textFieldValue + '.'); // Imprime en consola la nueva tarea.
      this.todos.unshift({ name: this.textFieldValue }); // Agrega tareas a la colección de ToDo
      this.textFieldValue = ''; // Limpia el campo de texto
    },
  },


  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />

      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Positions an input field, a button, and the list of tasks in a grid. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
              <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%"> <!-- Asegurate de configurar un alto (height) o tu lista no quedará visible en iOS. -->
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

## Funcionalidad básica: Ver, completar y borrar tareas de la pestaña "To Do"

### Progreso de la sección

Asi es como tu aplicación luce al principio de la sección y como lo hará una vez que finalices la misma.

| Pestaña 1 - Tareas agregadas | Pestaña 1 - Item Presionado | Pestaña 2 - Tareas completadas
|-----|-------------|-------|
| ![Primer pestaña con tareas agregadas](/screenshots/ns-playground/added-tasks.jpg) | ![Primer pestaña con item presionado](/screenshots/ns-playground/active-task-dialog.jpg) | ![Segunda pestaña con tareas completadas](/screenshots/ns-playground/completed-tasks.jpg) |

### Conceptos básicos de NativeScript

Por defecto, el componente `<ListView>` detecta el gesto `tap` en cada item y emite el evento correspondiente. El evento contiene información con el índice del objeto presionado y la colección de todos los items. Para permitir que el usuario elija que hacer luego del gesto `tap`, podriamos lanzar un diálogo cada vez que ocurra el evento en cuestión

El [módulo `dialogs`](https://docs.nativescript.org/api-reference/modules/_ui_dialogs_) esta disponible de forma global y provee diferentes tipos de dialogos: `alert`, `action`, `prompt`, `login` y `confirmation`. Este ejemplo, utliza el de tipo [`action()`](/es/docs/elements/dialogs/action) para permitir que el usuario elija si quiere marcar una tarea como completada o si quiere eliminarla de la lista.

### Requerimientos de Implementación

1. En el segundo elemento `<TabViewItem>`, arrastra y suelta el componente `<ListView>`. Limpia el contenido por defecto y establece el alto necesario.
1. En el nuevo componente `<ListView>` muestra elementos desde la colección de tareas completadas (`dones`).

  ```HTML
  <ListView for="done in dones" @tap="onDoneTap" height="100%"> <!-- Asegurate de configurar un alto (height) o tu lista no quedará visible en iOS. -->
    <v-template>
      <Label :text="done.name" />
    </v-template>
  </ListView>
  ```
1. Modificar el método`onItemTap`.
  * El método muestra el diálogo `action()`.
  * El método imprime en consola la selección del usuario.
  * Basado en ese selección, el método mueve elementos desde la colección de `todos` a la colección de `dones`, borra elementos de la colección `todos` o cierra el diálogo. Usa el método `splice()` para evitar "agujeros" en tu colección y `unshift()` para asegurarte que las nuevas tareas se muestren al comienzo (ambos son métodos nativos de los objetos `Array` de JavaScript).

  ```javascript
  onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Imprime en consola la opción seleccionada
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Ubica la tarea activa presionada al comienzo de las tareas completadas
              this.todos.splice(args.index, 1); // Eliminar la tarea activa presionada
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Eliminar la tarea activa presionada
              break;
            case 'Cancel' || undefined: // Cerrar el diálogo
              break;
          }
      })
    },
  ```

Al final de este paso, tu código deberia asemejarse al siguiente ejemplo:

```javascript
const Vue = require('nativescript-vue');

new Vue({
  data() {
    return {
      todos: [],
      dones: [],
      textFieldValue: '',
    }
  },
  methods: {
    onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Imprime en consola la opción seleccionada
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Ubica la tarea activa presionada al comienzo de las tareas completadas
              this.todos.splice(args.index, 1); // Eliminar la tarea activa presionada
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1); // Eliminar la tarea activa presionada
              break;
            case 'Cancel' || undefined: // Cerrar el diálogo
              break;
          }
      })
    },
    onButtonTap() {
      console.log('New task added: ' + this.textFieldValue + '.'); // Imprime en consola la nueva tarea
      this.todos.unshift({ name: this.textFieldValue }); // Agrega tareas a la colección de ToDo
      this.textFieldValue = ''; // Limpia el campo de texto
    },
  },

  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />

      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Positions an input field, a button, and the list of tasks in a grid. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
              <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%"> <!-- Asegurate de configurar un alto (height) o tu lista no quedará visible en iOS. -->
              <v-template>
                <Label :text="todo.name" />
              </v-template>
            </ListView>
          </StackLayout>
        </TabViewItem>

        <TabViewItem title="Completed">
          <ListView for="done in dones" @tap="onDoneTap" height="100%"> <!-- Asegurate de configurar un alto (height) o tu lista no quedará visible en iOS. -->
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

## Funcionalidad básica: Ver, volver a tareas activas y borrar tareas de la pestaña "Completed"

### Progreso de la sección

Asi es como tu aplicación luce al principio de la sección y como lo hará una vez que finalices la misma.

| Pestaña 2 - Tareas completadas | Pestaña 2 - Item presionado | Pestaña 1 - Tareas activas
|-----|-------------|-----|
| ![Segunda pestaña con tareas completadas](/screenshots/ns-playground/completed-tasks-2.jpg) | ![Dialog action mostrado](/screenshots/ns-playground/completed-tasks-dialog.jpg) | ![Primer pestaña con tareas completadas](/screenshots/ns-playground/completed-tasks-moved-to-active.jpg)

### Conceptos básicos de NativeScript

Esta implementación no requiere ningun conocimiento extra.

### Requerimientos de Implementación

Para la segunda pestaña modifica el método `onDoneTap`:

* El método muestra un diálogo `action()`.
* El método imprime en consola la selección del usuario (*debugging*).
* Basandose en la selección, el método mueve los elementos desde la colección de `dones` a la de `todos`, elimina elementos de la colección de `dones` o cierra el diálogo. Usa el método `splice()` para evitar "agujeros" en tu colección y `unshift()` para asegurarte que las nuevas tareas son mostradas al comienzo (ambos son métodos nativos de los objetos `Array` de JavaScript).

  ```javascript
  onDoneTap(args) {
    action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
    .then(result => {
      console.log(result); // Imprime en consola la opción seleccionada
      switch (result) {
        case 'Mark to do':
          this.todos.unshift(args.item); // Ubica la tarea completada al comienzo de las tareas
          this.dones.splice(args.index, 1); // Remueve la tarea presionada
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

Al final de este paso, tu código deberia asemejarse al siguiente ejemplo:

```javascript
const Vue = require('nativescript-vue');

new Vue({
  data() {
    return {
      todos: [],
      dones: [],
      textFieldValue: '',
    }
  },
  methods: {
    onItemTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark completed', 'Delete forever'])
        .then(result => {
          console.log(result); // Imprime en consola la opción seleccionada
          switch (result) {
            case 'Mark completed':
              this.dones.unshift(args.item); // Ubica la tarea completada al comienzo de las tareascompleted tasks.
              this.todos.splice(args.index, 1); // Remueve la tarea presionada
              break;
            case 'Delete forever':
              this.todos.splice(args.index, 1);
              break;
            case 'Cancel' || undefined:
              break;
          }
      })
    },
    onDoneTap(args) {
      action('What do you want to do with this task?', 'Cancel', ['Mark to do', 'Delete forever'])
        .then(result => {
          console.log(result); // Imprime en consola la opción seleccionada
          switch (result) {
            case 'Mark to do':
              this.todos.unshift(args.item); // Ubica la tarea completada al comienzo de las tareas
              this.dones.splice(args.index, 1); // Remueve la tarea presionada
              break;
            case 'Delete forever':
              this.dones.splice(args.index, 1); // Remueve la tarea presionada
              break;
            case 'Cancel'||undefined:
              break;
          }
        })
    },
    onButtonTap() {
      console.log('New task added: ' + this.textFieldValue + '.'); // Imprime en consola la nueva tarea
      this.todos.unshift({ name: this.textFieldValue }); // Agrega la tarea en la colección ToDo
      this.textFieldValue = ''; // Limpia el campo de texto
    }
  },

  template: `
    <Page class="page">
      <ActionBar title="My Tasks" class="action-bar" />

      <TabView height="100%">
        <TabViewItem title="To Do">
          <!-- Positions an input field, a button, and the list of tasks in a grid. -->
          <StackLayout orientation="vertical" width="100%" height="100%">
            <GridLayout columns="2*,*" rows="auto" width="100%">
              <TextField row="0" col="0" v-model="textFieldValue" hint="Type new task..." editable="true" @returnPress="onButtonTap" /> <!-- Configures the text field and ensures that pressing Return on the keyboard produces the same result as tapping the button. -->
              <Button row="0" col="1" text="Add task" @tap="onButtonTap" />
            </GridLayout>
            <ListView for="todo in todos" @itemTap="onItemTap" height="100%" > <!-- Asegurate de configurar un alto (height) o tu lista no quedará visible en iOS. -->
              <v-template>
                <Label :text="todo.name" />
              </v-template>
            </ListView>
          </StackLayout>
        </TabViewItem>

        <TabViewItem title="Completed">
          <ListView for="done in dones" @itemTap="onDoneTap" height="100%" > <!-- Asegurate de configurar un alto (height) o tu lista no quedará visible en iOS. -->
              <v-template>
                <Label :text="done.name" />
              </v-template>
            </ListView>
        </TabViewItem>
      </TabView>

    </Page>
  `,

}).$start()
```

## Diseño avanzado: Campo de texto y botón con estilos personalizados

### Progreso de la sección

Asi es como tu aplicación luce al principio de la sección y como lo hará una vez que finalices la misma.

| Pestaña 1 - Sin estukis | Pestaña 1 - Boton con estilos | Pestaña 1 - Campo de texto con estilos |
|-----|-------------|----|
| ![Sin estilos](/screenshots/ns-playground/input-field.jpg) | ![Boton con estilos](/screenshots/ns-playground/styled-button.jpg) | ![Campo de texto sin estilos](/screenshots/ns-playground/styled-input.jpg) |

### Conceptos básicos de NativeScript

Cuando trabajas con **NativeScript-Vue**, puedes usar CSS global o en línea para estilar la aplicación. El CSS global es aplicado primero y se maneja dentro del archivo `app.css` (ubicado en la raíz del proyecto). Tambien puedes leer [la seccion de estilos de NativeScript](https://docs.nativescript.org/ui/styling).

Con el tipo de selector CSS, puedes seleccionar un componente de la UI y aplicar estilos personalizados. Para seleccionar el componente debes usar su nombre tal cual esta provisto en el código. Por ejemplo para agregar una regla de css a una pestaña debes usar como nombre `TabView`.

### Requerimientos de Implementación

#### Agregar estilos al campo de texto

En el archivo `app.css`, cambia `font-size`, `color` y `margin` del componente `<TextField>`.

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

#### Agregar estilos al botón

1. En el archivo `app.js`, en la línea 63, agrega un `id` para el botón.
  ```HTML
  <Button id="add-task-button" row="0" col="1" text="Add task" @tap="onButtonTap" />
  ```

1. En el archvio `app.css`, agrega los estilos para el botón creando un botón colorido y con los bordes redondeados.
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

## Diseño avanzado: Pestaña de navegación con estilos personalizados

### Progreso de la sección

Asi es como tu aplicación luce al principio de la sección y como lo hará una vez que finalices la misma.

| Pestañas - Sin estilos | Pestañas - Con estilos
|-----|-------------|
| ![Pestañas sun estilos](/screenshots/ns-playground/styled-button.jpg) | ![Pestañas con estilos](/screenshots/ns-playground/styled-tabs.jpg) |

### Conceptos básicos de NativeScript

El componente `<TabView>` provee algunas propiedades de estilo por defecto. Puedes aplicar `textTransform` a los titulos de las pestañas y cambiar la fuentes y colores (`tabTextFontSize`, `tabTextColor`, `selectedTabTextColor`, `tabBackgroundColor`).

> **NOTA:** Actualmente, `tabTextFontSize` no funciona en iOS. Por lo tanto no puedes modificar el tamaño de fuente en los titulos de las pestañas.

### Requerimientos de Implementación

#### Cambiar color y tamaño de fuente en el título de la ventana seleccionada

En el archivo `app.js`, en la línea 57, agrega las propiedades `selectedTabTextColor` y `tabTextFontSize`. Si estás probando en iOS, recuerda que el tamaño de la fuenta no se modificará.

```HTML
<TabView height="100%" selectedTabTextColor="#53ba82" tabTextFontSize="20" >
```

#### Transformacion de texto (`textTransform`)

En el archivo `app.js`, en las líneas 58 y 73, agregar la propiedad `textTransform`. Solo puedes usar esta propiedad al nível del elemento `<TabViewItem>`.

```HTML
<TabViewItem title="To Do" textTransform="uppercase" >
```

```HTML
<TabViewItem title="Completed" textTransform="uppercase">
```

## Diseño avanzado: Tareas activas con estilos personalizados

Asi es como tu aplicación luce al principio de la sección y como lo hará una vez que finalices la misma.

| Tareas activas - Sin estilos | Tareas activas - Sin separador | Tareas activas - Con estilos |
|-----|-------------|---|
| ![Tareas activas sin estilos](/screenshots/ns-playground/styled-tabs.jpg) | ![Tareas activas sin separados](/screenshots/ns-playground/styled-list-view-no-separator.jpg) | ![Tareas activas con estilos](/screenshots/ns-playground/styled-list-view-added-tasks.jpg) |

### Conceptos básicos de NativeScript

Los componentes `<ListView>` y `<Label>` tienen por defecto algunas propiedades que puedes usar para controlar elementos como el separador de la lista o el texto envuelto. Para la mayoría de los cambios de aspecto de los componentes, debes usar estilos CSS (`app.css`).

Para agregar reglas de estilos que funcionen para el texto de tareas activas, puedes configurar un `id` en el elemento `<Label>`.

### Requerimientos de Implementación

1. En el archivo `app.js`, en la línea 67,  confugura `id` para el elemento `<Label>` y agrega la propiedad `textWrap="true"`. Habilitar `textWrap` logrará que el texto se muestre correctamente en la lista.

  ```HTML
  <Label id="active-task" :text="todo.name" textWrap="true" >
  ```
1. En la línea 65, agrega la propiedad `separatorColor` y asignale el valor `transparent`. De esta forma, el separador no se visualizará en la lista.

  ```HTML
  <ListView for="todo in todos" @itemTap="onItemTap" height="100%" separatorColor="transparent">
  ```
1. En el archivo `app.css`, crea los estilos para las tareas activas. Puedes configurar `font-size`, `color`, `text-decoration` y también `padding` para posicionar mejor el texto. Juega con las propiedades `margin` y `padding` hasta que encuentres el resultado que deseas.

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

## Diseño avanzado: Tareas completadas con estilos personalizados

Asi es como tu aplicación luce al principio de la sección y como lo hará una vez que finalices la misma.

| Tareas completadas - Sin estilos | Tareas completadas - Con estilos |
|-----|-------------|
| ![Unstyled completed tasks](/screenshots/ns-playground/completed-tasks-unstyled.jpg) | ![Styled completed tasks](/screenshots/ns-playground/completed-tasks-styled.jpg) |

### Conceptos básicos de NativeScript

Esta sección aplica los conceptos básicos de NativeScript de la sección [Diseño avanzado: Tareas activas con estilos personalizados](#advanced-design-styled-active-tasks).

### Requerimientos de Implementación

1. En el archivo`app.js`, en la línea 76, confugura `id` para el elemento `<Label>` y agrega la propiedad `textWrap="true"`. Habilitar `textWrap` logrará que el texto se muestre correctamente en la lista.

  ```HTML
  <Label id="completed-task" :text="done.name" textWrap="true" />
  ```
1. En la línea 74, crea un `id`, agrega la propiedad `separatorColor` y asignale el valor `transparent`. De esta forma, el separador no se visualizará en la lista. Puedes usar el `id` para crear reglas de estilos y cambiar los márgenes de `<ListView>`.

  ```HTML
  <ListView id="completed-list" for="done in dones" @itemTap="onDoneTap" height="100%" separatorColor="transparent" >
  ```
1. En el archivo `app.css`, crea estilos para las tareas completadas. Puedes configurar `font-size`, `color`, `text-decoration` y también `padding` para posicionar mejor el texto. Juega con las propiedades `margin` y `padding` hasta que encuentres el resultado que deseas.

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

1. Ceare un estilo para el componente `<ListView>` y establece un `margin-top`. De esta forma, el texto no se mostrará inmediatamente despues del *action bar*. Puedes jugar con el margen hasta que encuentres el resultado que deseas.

  ```CSS
  #completed-list {
    margin-top: 20;
  }
  ```
