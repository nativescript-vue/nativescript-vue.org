---
title: 텍스트뷰 (TextView)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_text_view_.textview
contributors: [qgp9]
---

텍스트뷰(TextView) 컴포넌트는 편집가능한 여러 줄 박스를 나타냅니다.
이 컴포넌트는 `editable` 프로퍼티를 `false` 로 설정함으로써 읽기전용 컨텐츠를 표시하는 데도 사용할 수 있습니다.

---

```html
<TextView text="Multi\nLine\nText" />
```

**노트**: 이 컴포넌트는 `v-model` 을 이용한 양방향(two-way) 바인딩을 지원합니다:

```html
<TextView v-model="textViewValue" />
```

### 다른 스타일의 여러 줄 텍스트를 표시

```html
<TextView editable="false">
  <FormattedString>
    <Span text="You can use text attributes such as " />
    <Span text="bold, " fontWeight="Bold" />
    <Span text="italic " fontStyle="Italic" />
    <Span text="and " />
    <Span text="underline." textDecoration="Underline" />
  </FormattedString>
</TextView>
```

[> screenshots for=TextView <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `text` | `String` | 텍스트 뷰의 값.
| `hint` | `String` | 텍스트 플레이스홀더.
| `editable` | `Boolean` | `true`로 설정되면 사용자가 텍스트뷰의 값을 변경할 수 있음.
| `maxLength` | `Number` | 글자수를 제한.
| `keyboardType` | `KeyboardType` | 쉬운 입력을 위한 커스텀 키보드를 보여줌. 가능한 값: `datetime`, `phone`, `number`, `url`, `email`.
| `returnKeyType` | `ReturnKeyType` | 리턴키의 레이블. 가능한 값: `done`, `next`, `go`, `search`, `send`.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `textChange`| 텍스트가 바뀌면 발생.
| `returnPress`| 리턴키가 눌리면 발생
| `focus`| 텍스트뷰가 포커스되면 발생
| `blur`| 텍스트뷰가 포커스를 잃으면 발생

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.EditText | UITextView
