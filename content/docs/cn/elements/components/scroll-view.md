---
title: ScrollView - 滚动视图
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors: [Pythonfo]
---

**ScrollView** 组件用于显示需要滚动的内容。

---

```html
<ScrollView orientation="horizontal">
  <StackLayout orientation="horizontal">
    <Label text="this" />
    <Label text="text" />
    <Label text="scrolls" />
    <Label text="horizontally" />
    <Label text="if necessary" />
  </StackLayout>
</ScrollView>
```

[> screenshots for=ScrollView <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `orientation` | `String` | `horizontal` 或 `vertical`。默认为 `vertical` |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `scroll`| 滚动时触发 |
