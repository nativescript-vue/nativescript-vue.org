---
title: Switch
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [nuochong]
---

`<Switch>` 是一个UI组件，允许用户在两​​种状态之间切换。

默认状态为 `false` 或OFF。

---

```html
<Switch checked="true" />
```

`<Switch>`使用提供双向数据绑定 `v-model`。

```html
<Switch v-model="itemEnabled" />
```

[> screenshots for=Switch <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `checked` | `Boolean` | 获取或设置开关选择的值。<br/>默认值：`false`。

## 活动

| 名称 | 描述 |
|------|-------------|
| `checkedChange`| 当开关选择改变时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.Switch`](https://developer.android.com/reference/android/widget/Switch.html) | [`UISwitch`](https://developer.apple.com/documentation/uikit/uiswitch)
