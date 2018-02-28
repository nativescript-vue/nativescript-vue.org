---
title: 버튼 (Button)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_button_.button
contributors: [qgp9]
---

버튼(Button) 컴포넌트는 탭(tab) 이벤트에 반응하는 버튼을 표시하는데 사용됩니다.

상호작용이 탭(tab) 이벤트로만 제한되는 것은 아닙니다.
[네이티브-스크립트에서 사용가능한 모든 제스쳐에대하여 공식 문서를 읽어보세요](https://docs.nativescript.org/ui/gestures).

---

```html
<Button text="Button" />
```

[> screenshots for=Button <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `text` | `String` | 버튼에 보이는 텍스트.
| `textWrap` | `boolean` | 버튼의 텍스트가 래핑될지 결정. 기본값은 `false`.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `tap` | 버튼이 눌릴때 발생(Emit)

## 네이티브 컴포넌트
| Android | iOS |
|---------|-----|
| android.widget.Button | UIButton
