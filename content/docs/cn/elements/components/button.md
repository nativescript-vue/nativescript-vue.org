---
title: Button - 按钮
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
contributors: [Pythonfo]
---

**Button** 组件用于显示一个可以点击的按钮。

但它并不仅限于点击交互，[在官方文件中阅读更多关于NativeScript的可用手势](https://docs.nativescript.org/ui/gestures)。

---

```html
<Button text="Button" />
```

[> screenshots for=Button <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `text` | `String` |  按钮里的文本 |
| `textWrap` | `boolean` |Determines whether or not the Button wraps text. Default `false` |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `tap` | 组件被点击时触发 |

## 原生组件（Native Component）
| Android | iOS |
|---------|-----|
| [android.widget.Button](https://developer.android.com/reference/android/widget/Button.html) | [UIButton](https://developer.apple.com/documentation/uikit/UIButton) |
