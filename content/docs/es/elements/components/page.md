---
title: Page
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_page_.page
contributors: [msaelices]
---

`<Page>` es un componente de UI que representa una pantalla de una aplicación. Las apps NativeScript típicamente consisten en una o más `<Page>` que incluyen contenido como un [`<ActionBar>`](/es/docs/elements/action-bar/action-bar) y otros elementos.

---

#### Una página única

```html
<Page>
  <ActionBar title="My App" />
  <GridLayout>
    <Label text="My Content"/>
  </GridLayout>
</Page>
```

#### Usando el evento `loaded` para disparar cambios en UI

Un escenario típico es realizar cambios en la interfaz después de que la página se ha cargado. La forma recomendada de hacer esto es usando el evento `loaded`, disparado por NativeScript cuando la página está totalmente cargada:

```html
<Page @loaded="greet">
  <ActionBar title="My App" />
  <GridLayout>
    <Label text="My Content"/>
  </GridLayout>
</Page>
```

```js
export default {
  methods: {
    greet() {
      alert('Hello!').then(() => {
        console.log('Dialog closed')
      })
    }
  }
}
```

> **NOTA**: Los desarrolladores que vienen de un entorno web generalmente usarían el hook de ciclo de vida `mounted` que Vue proporciona, sin embargo en NativeScript la aplicación, y ciertos elementos podrían no estar cargados aún cuando el hook `mounted` es disparado, de ahí que ciertas acciones como mostrar ventanas de diálogo, navegaciones, etc. no son posible dentro del hook `mounted`. Para solucionar esta limitación, se puede usar el evento `loaded`, el cual sólo se dispara después de que la aplicación está lista. En este caso, estamos usando el evento `loaded` del elemento [`<Page>`](/es/docs/elements/components/page), pero este evento está disponible en todos los elementos NativeScript.

## Props

| Nombre | Tipo | Descripción |
|--------|------|-------------|
| `actionBarHidden` | `Boolean` | Muestra u oculta el `<ActionBar>` para la página.<br/>Valor por defecto: `false`.
| `backgroundSpanUnderStatusBar` | `Boolean` | Obtiene o establece si el fondo de la pantalla  Gets or sets whether the background of the page sitúa también bajo la barra de estado.<br/>Valor por defecto: `false`.
| `androidStatusBarBackground` | `Color` | (Sólo para Android) Obtiene o establece el color de la barra de estado en dispositivos Android.
| `enableSwipeBackNavigation` | `Boolean` | (Sólo para iOS) Obtiene o establece si la página puede ser deslizado (swiped) en iOS para volver atrás.<br/>Valor por defecto: `true`.
| `statusBarStyle` | `String` | Obtiene o establece el estilo de la barra de estado.<br/>Valid values:<br/>`light`,<br/>`dark`.

## Eventos

| Nombre | Descripción |
|--------|-------------|
| `loaded` | Emitido después de que la página ha sido cargada.
| `navigatedFrom` | Emitido después de que la app haya navegado a otra página desde la página actual.
| `navigatedTo` | Emitido después de que la app haya navegado a la página actual.
| `navigatingFrom` | Emitido justo antes de que la app haya navegado a otra página desde la página actual.
| `navigatingTo` | Emitido justo antes de que la app haya navegado a la página actual.

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.GridLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/GridLayout.java) | [`UIViewController`](https://developer.apple.com/documentation/uikit/uiviewcontroller)
