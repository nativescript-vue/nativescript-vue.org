---
title: Slider - 滑块
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider
contributors: [Pythonfo]

---

**Slider** 用于让用户在指定的范围内选择一个值。

---

```html
<Slider value="80" @valueChange="onValueChanged" />
```

**Note**: 支持使用 `v-model` 来进行双向数据绑定：

```html
<Slider v-model="value" />
```

[> screenshots for=Slider <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Number` | 当前值 |
| `minValue` | `Number` | 最小大值。默认为 `0` |
| `maxValue` | `Number` | 最大值，默认为 `100` |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `valueChange`| 组件的 `value` 属性改变时触发 |

## 原生组件（Native Component）

| Android | iOS |
|---------|-----|
| android.widget.SeekBar | UISlider |
