---
title: NavigationButton
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton
contributors: [nuochong]
---

NavigationButton组件是Android导航按钮和iOS后退按钮的NativeScript抽象。

---

```html
<ActionBar title="My App">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
</ActionBar>
```

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `text` | `String` | 设置要在iOS上显示的文本。
| `android.systemIcon` | `String` | Android上显示的图标。

*Android的图标列表可以在 <https://developer.android.com/reference/android/R.drawable.html>找到，图标是以 `ic_` 前缀开头的图标。*

## 活动

| 名称 | 描述 |
|------|-------------|
| `tap`| 轻触NavigationButton时发出。
