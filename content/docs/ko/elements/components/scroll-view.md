---
title: 스크롤뷰 (ScrollView)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_scroll_view_.scrollview
contributors: [qgp9]
---

스크롤뷰(ScrollView) 컴포넌트는 스크롤 가능한 컨텐츠를 표시할 수 있게 해줍니다.

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

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `orientation` | `String` | `horizontal` 혹은 `vertical`. 기본값은 `vertical`.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `scroll`| 스크롤 이벤트가 발생했을때 발생(Emit)
