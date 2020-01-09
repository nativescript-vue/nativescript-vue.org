---
title: Frame
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_frame_.frame
contributors: [msaelices]
---

`<Frame>` es un componente de UI usado para mostrar elementos [`<Page>`](/es/docs/elements/components/page). Cada app necesita al menos un elemento `<Frame>`, que normalmente se establece como elemento raíz.

---

#### Un único elemento Frame raíz

Si estás migrando desde nativescript 3.x y quieres preservar el antiguo comportamiento, el siguiente fragmento de código en tu fichero de entrada JS creará un elemento raíz de tipo frame y renderizará tu página por defecto.

```js
new Vue({
  render: h => h('Frame', [ h(HomePageComponent) ])
})
```

#### Múltiples Frames

Si necesitas crear múltiples frames, tienes que encapsularlos en un layout, por ejemplo si quieres tener 2 frames lado a lado

```html
<GridLayout columns="*, *">
  <Frame col="0"/>
  <Frame col="1"/>
</GridLayout>
```

#### Un frame con una página por defecto

```html
<Frame>
  <Page>
    <ActionBar title="Default Page Title" />
    <GridLayout>
      <Label text="Default Page Content" />
    </GridLayout>
  </Page>
</Frame>
```

#### Un frame con una página por defecto de un componente externo

```html
<Frame>
  <Page>
    <Home />
  </Page>
</Frame>
```

```js
import Home from './Home'

export default {
  components: {
    Home
  }
}
```

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`org.nativescript.widgets.ContentLayout`](https://github.com/NativeScript/tns-core-modules-widgets/blob/master/android/widgets/src/main/java/org/nativescript/widgets/ContentLayout.java) | [`UINavigationController`](https://developer.apple.com/documentation/uikit/uinavigationcontroller)
