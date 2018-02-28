---
title: 레이블 (Label)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_label_.label
contributors: [qgp9]
---

레이블(Label) 컴포넌트는 읽기전용 텍스트를 표시하는데 사용됩니다.

**노트**: `<Label>` HTML의 `<Label>` 과 **다릅니다**.

---

```html
<Label text="Label" />
```

[> screenshots for=Label <]

### FormattedString

특정 부분의 텍스트를 다르게 스타일링해야 한다면 `FormattedString` `Span` 요소를 결합하여 사용할 수 있습니다.

예:
```html
<Label textWrap="true">
  <FormattedString>
    <Span text="This text has a " />
    <Span text="red " style="color: red" />
    <Span text="piece of text. " />
    <Span text="Also, this bit is italic, " fontStyle="italic" />
    <Span text="and this bit is bold." fontWeight="bold" />
  </FormattedString>
</Label>
```

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `text` | `String` | 레이블의 텍트스.
| `textWrap` | `boolean` | 레이블의 텍스트가 래핑될것 인지 지정. 기본값은 `false`.

## 네이티브 컴포넌트

| Android | iOS |
|---------|-----|
| android.widget.TextView | UILabel
