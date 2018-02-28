---
title: 네비게이션 버튼 (NavigationButton)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.navigationbutton
contributors: [rigor789]
---

NavigationButton 컴포넌트는 안드로이드 네비게이션 버튼과 iOS 백버튼(back  button)의 네이티브-스크립트 추상화입니다.

---

```html
<ActionBar title="My App">
  <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
</ActionBar>
```

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `text` | `String` | 텍스트를 iOS 에서 보여주도록 설정.
| `android.systemIcon` | `String` | 해당 아이콘이 안드로이드에서 보입니다.

*안드로이드의 아이콘 리스트는 다음 페이지에서 찾을 수 있습니다. <https://developer.android.com/reference/android/R.drawable.html>. 아이콘은 `ic_` 접두어와 함께 시작하는 것들입니다.*

## Events

| 이름 | 설명 |
|------|-------------|
| `tap`| 네비게이션 버튼을 탭(tab) 했을때 발생(Emit).
