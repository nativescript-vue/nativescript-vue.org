---
title: Placeholder
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_placeholder_.placeholder
contributors: [msaelices]
---

El elemento `<Placeholder>` te permite añadir cualquier widget nativo a tu aplicación. Para hacer eso, necesitas añadir un Placeholder donde sea en la jerarquía de tu interfaz y entonces crear y configurar el widget nativo que quieres que aparezca allí. Finalmente, pasa la vista del widget nativo como vista en los argumentos del evento `creatingView`.

---

```html
<Placeholder @creatingView="creatingView" />
```

#### Ejemplo con TextView en Android

```js
methods: {
  creatingView: function(args) {
      const nativeView = new android.widget.TextView(args.context);
      nativeView.setSingleLine(true);
      nativeView.setEllipsize(android.text.TextUtils.TruncateAt.END);
      nativeView.setText("Native View - Android");
      args.view = nativeView;
  }
}
```

#### Ejemplo con UILabel en iOS

```js
methods: {
  creatingView: function(args) {
      const nativeView = new UILabel();
      nativeView.text = "Native View - iOS";
      args.view = nativeView;
  }
}
```
