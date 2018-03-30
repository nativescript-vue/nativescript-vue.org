---
title: ActionItem
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem
contributors: [alexhiroshi]
---

O componenete ActionItem é usado para incluir botões de ação adicionais na ActionBar.

---

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapShare"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" />
  <ActionItem @tap="onTapDelete"
    ios.systemIcon="16" ios.position="right"
    text="delete" android.position="popup" />
</ActionBar>
```

#### Condicionalmente mostrando action itens

As ActionItems podem ser exibidas com base em uma condição usando a diretiva `v-show`.

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapEdit"
    v-show="!isEditing"
    ios.systemIcon="2" ios.position="right"
    android.systemIcon="ic_menu_edit" />
  <ActionItem @tap="onTapSave"
    v-show="isEditing"
    ios.systemIcon="3" ios.position="right"
    android.systemIcon="ic_menu_save" />
  <ActionItem @tap="onTapCancel"
    v-show="isEditing"
    ios.systemIcon="1"
    android.systemIcon="ic_menu_close_clear_cancel" />
</ActionBar>
```

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `ios.systemIcon` | `String` | Define o ícone para iOS.
| `android.systemIcon` | `String` | Define o ícone para Android.
| `ios.position` | `String` | Define a posição para o iOS.<br>Possíveis valores:<br>- `left` (padrão): Coloca o item do lado esquerdo da ActionBar.<br>- `right`: Coloca o item do lado direito da ActionBar.
| `android.position` | `String` | Define a posição para o Android.<br>Possíveis valores:<br>- `actionBar` (padrão): Coloca o item na ActionBar.<br>- `popup`: Coloca o item no menu de opções. Os itens serão renderizado como texto.<br>- `actionBarIfRoom`: Coloca o item na ActionBar se houver espaço. Caso contrário, coloca no menu de opções.

## Eventos

| nome | descrição |
|------|-------------|
| `tap`| Emitido quando o ActionItem for tocado.
