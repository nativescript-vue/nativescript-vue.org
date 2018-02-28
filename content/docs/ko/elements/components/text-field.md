---
title: 텍스트필드 (TextField)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_text_field_
contributors: [qgp9]

---

텍스트필드(TextField) 컴포넌트는 편집가능한 한줄짜리 박스를 만듭니다.

---

```html
<TextField :text="textFieldValue" hint="Enter text..." />
```

**노트**: 이 컴포넌트는 `v-model` 을 이용한 양방향(two-way) 바인딩을 지원합니다:

```html
<TextField v-model="textFieldValue" />
```

[> screenshots for=TextField <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `text` | `String` | 텍스트필드의 값
| `hint` | `String` | 플레이스홀더 텍스트
| `editable` | `Boolean` | `true` 면 사용자가 텍스트필드의 값을 수정할 수 있음
| `maxLength` | `Number` | 입력 가능한 글자수를 제한
| `secure` | `Boolean` | `true` 면 입력된 텍스트를 숨깁니다. 기본값은 `false`.
| `keyboardType` | `KeyboardType` | 쉬운 텍스트 입력을위해 커스텀 키워드를 보여줍니다. 가능한 값: `datetime`, `phone`, `number`, `url`, `email`.
| `returnKeyType` | `ReturnKeyType` | 리턴키의 레이블. 가능한 값: `done`, `next`, `go`, `search`, `send`.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `textChange`| 텍스트가 바뀌면 발생
| `returnPress`| 리턴키가 눌리면 발생
| `focus`| 텍스트필드가 포커스되면 발생
| `blur`| 텍스트필드가 포커스를 잃으면 발생

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.EditText | UITextField
