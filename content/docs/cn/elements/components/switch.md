---
title: Switch - 开关
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_switch_.switch
contributors: [Pythonfo]
---

**Switch** 组件允许用户在两种状态之前切换。
默认状态为 `false` 或 "off"。

---

```html
<Switch checked="true" />
```

**Note**: 支持使用 `v-model` 来进行双向数据绑定：

```html
<Switch v-model="itemEnabled" />
```

[> screenshots for=Switch <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `checked` | `Boolean` | 组件的状态 |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `checkedChange`| 组件的 `checked` 属性改变时触发 |

## 原生组件（Native Component）
| Android | iOS |
|---------|-----|
| android.widget.Switch | UISwitch |
