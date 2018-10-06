---
title: Slider
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_slider_.slider
contributors: [nuochong]

---

`<Slider>` 是一个UI组件，它提供了一个滑块控件，用于选择指定数值范围内的值。

---

```html
<Slider value="80" @valueChange="onValueChanged" />
```

`<Slider>` 使用 `v-model`以下方法提供双向数据绑定：

```html
<Slider v-model="value" />
```

[> screenshots for=Slider <]

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `value` | `Number` | 获取或设置滑块的当前选定值。<br/>默认值： `0`。
| `minValue` | `Number` | 获取或设置滑块的最小值。<br/>默认值： `0`。
| `maxValue` | `Number` | 获取或设置滑块的最大值。<br/>默认值： `100`。

## 活动

| 名称 | 描述 |
|------|-------------|
| `valueChange`| 滑块的值更改时发出。

## 原生组件

| Android | iOS |
|---------|-----|
| [`android.widget.SeekBar`](https://developer.android.com/reference/android/widget/SeekBar.html) | [`UISlider`](https://developer.apple.com/documentation/uikit/uislider)
