---
title: Button
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
contributors: [nuochong]
---

`<Button>` 是一个UI组件，显示一个对用户手势作出反应的按钮。

有关可用手势的更多信息，请参阅 [Gestures in the official NativeScript documentation](https://docs.nativescript.org/ui/gestures)。

---

```html
<Button text="Button" @tap="onButtonTap" />
```

[> screenshots for=Button <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `text` | `String` | 设置按钮的标签。
| `textWrap` | `Boolean` | 获取或设置窗口小部件是否包装标签的文本。适用于较长的标签。默认值是 `false`。

## 活动

| 名称 | 描述 |
|------|-------------|
| `tap` | 点击按钮时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.Button`](https://developer.android.com/reference/android/widget/Button.html) | [`UIButton`](https://developer.apple.com/documentation/uikit/uibutton)
