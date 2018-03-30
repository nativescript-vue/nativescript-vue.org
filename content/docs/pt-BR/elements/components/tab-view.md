---
title: TabView
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview
contributors: [alexhiroshi]
---

`<TabView>` é um componente de navegação que mostra conteúdos agrupados em abas, e deixa o usuário alterar entre elas.

---

```html
<TabView :selectedIndex="selectedIndex">
  <TabViewItem title="Tab 1">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```

[> screenshots for=TabView <]

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `selectedIndex` | `Number` | Obtém ou define a aba atualmente selecionada. Padrão é `0`.
| `tabTextColor` | `Color` | (Propriedade de estilo) Obtém ou define a cor do texto dos títulos das abas.
| `tabBackgroundColor` | `Color` | (Propriedade de estilo) Obtém ou define a cor de fundo das abas.
| `selectedTabTextColor` | `Color` | (Propriedade de estilo) Obtém ou define a cor do texto do título da aba selecionada.

## Eventos

| nome | descrição |
|------|-------------|
| `selectedIndexChanged` | Emitido quando um componente `<TabViewItem>` é tocado.

## Componente Nativo

| Android | iOS |
|---------|-----|
| [`android.support.v4.view.ViewPager`](https://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller)
