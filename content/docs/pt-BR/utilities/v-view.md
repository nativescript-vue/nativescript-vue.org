---
title: diretiva v-view
contributors: [alexhiroshi]
---

A diretiva `v-view` é usada para definir os elementos `View` atuais com uma propriedade pai.

### Uso

```html
<Child v-view:parentPropertyName />
<!-- same as: -->
<Child ~parentPropertyName />
```

```html
<Child v-view:parentArrayPropertyName.array />
<!-- same as: -->
<Child ~parentArrayPropertyName.array />
```

---

Existem muitos componentes `NativeScript` que precisam de uma configuração de propriedade para uma instância válida de `View`, o que não é possível com um template. Usando essa diretiva, você ganha tempo por não ter que registrar uma nova diretiva / referência nos elementos pai, e configurar as propriedades do pai manualmente.

Para ilustrar melhor o que essa diretiva faz, vamos ver o componente `RadSideDrawer` do pacote [Progress NativeScript UI](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/getting-started):

O componente `RadSideDrawer` espera que as propriedades `drawerContent` e `mainContent` sejam definidas para as instâncias da `View`, usando a diretiva `v-view` ficaria assim:

```html
<RadSideDrawer>
  <StackLayout ~drawerContent />
  <StackLayout ~mainContent />
</RadSideDrawer>
```

Sem essa diretiva você teria que fazer algo como:

```html
<RadSideDrawer ref="drawer">
  <StackLayout ref="drawerContent" />
  <StackLayout ref="mainContent" />
</RadSideDrawer>
```

```javascript
{
  mounted() {
    this.$refs.drawer.nativeView.drawerContent = this.$refs.drawerContent.nativeView
    this.$refs.drawer.nativeView.mainContent = this.$refs.mainContent.nativeView
  }
}
```

Que pode ser tedioso e muito propenso a erros.
