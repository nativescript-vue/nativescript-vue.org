---
title: ActionBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar
contributors: [alexhiroshi, WesleiRamos]
---

O componente ActionBar é uma abstração do NativeScript para o ActionBar do Android e o NavigationBar do iOS.

---

#### Usando um título

```html
<ActionBar title="MyApp" />
```

#### Usando um título personalizado

```html
<ActionBar>
  <StackLayout orientation="horizontal">
    <Image src="res://icon" width="40" height="40" verticalAlignment="center" />
    <Label text="NativeScript" fontSize="24" verticalAlignment="center" />
  </StackLayout>
</ActionBar>
```

#### Configurando um ícone de aplicativo para Android

```html
<ActionBar title="My App" android.icon="res://icon" android.iconVisibility="always" />
```

#### Removendo a borda
No iOS e no Android, uma pequena borda é desenhada na parte debaixo da ActionBar.
Além disso, a cor de fundo da ActionBar no iOS, é um pouco diferente da que você especifica
porque o iOS aplica um filtro. Para remover o filtro e a borda defina `flat` como `true`.

```html
<ActionBar title="My App" flat="true" />
```

## Propriedades

| nome | tipo | descrição |
|------|------|-------------|
| `title` | `String` | O título que será mostrado na ActionBar.
| `android.icon` | `String` | O ícone que será mostrado no Android.
| `android.iconVisibility` | `String` | Define quando o ícone é visível.
| `flat` | `boolean` | Remove a borda e o filtro de cores do iOS. Padrão `false`.
