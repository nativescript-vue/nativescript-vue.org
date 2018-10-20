---
title: ActionBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar
contributors: [ianaya89]
---

El componente ActionBar es una abstraccio4n de NativeScript del `ActionBar` de Android y el `NavigationBar` de iOS.


---

#### Configurando un título

```html
<ActionBar title="MyApp" />
```

#### Configurando un título con apariencia personalizada

```html
<ActionBar>
  <StackLayout orientation="horizontal">
    <Image src="res://icon" width="40" height="40" verticalAlignment="center" />
    <Label text="NativeScript" fontSize="24" verticalAlignment="center" />
  </StackLayout>
</ActionBar>
```

#### Configurando un ícono de aplicación para Android

```html
<ActionBar title="My App" android.icon="res://icon" android.iconVisibility="always" />
```

#### Eliminando el borde

Tanto en Android como en iOS, un pequeño borde es dibujado en la parte inferior del componente `ActionBar`. Además, el color de fondo del `ActionBar` de iOS is levemente diferente al que uno especifíca ya que iOS aplica un filtro. Para eliminar este filtro y el borde, puedes usar el atributo `flat` con el valor `true`.

```html
<ActionBar title="My App" flat="true" />
```

## Propiedades

| Nombre | Tipo | Descripción |
|------|------|-------------|
| `title` | `String` | El título que se desea mostrar.
| `android.icon` | `String` | El ícono para mostrar en Android.
| `android.iconVisibility` | `String` | Indica cuando el ícono esta visible o no (solo Android).
| `flat` | `boolean` | Elimina el borde y el filtro en iOS.<br> Valor por defecto: `false`.
