---
title: ListPicker
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_picker_.listpicker
contributors: [qgp9]
---

ListPicker 컴포넌트는 사용자가 리스트로 부터 값을 선택할 수 있도록 해줍니다.

---

```html
<ListPicker :items="listOfItems" selectedIndex="0"
    @selectedIndexChange="selectedIndexChanged" />
```

**노트**: 이 컴포넌트는 `v-model` 을 이용한 양방향(two-way) 바인딩을 지원합니다:

```html
<ListPicker :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=ListPicker <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `items` | `Array<String>` | 리스트 선택기에 표시되는 옵션들의 스트링 배열.
| `selectedIndex` | `Number` | 현재 선택된 아이템의 인덱스.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `selectedIndexChange`| 리스트 선택기에서 선택된 옵션(인덱스)가 바뀔때 발생(Emit)

## 네이티브 컴포넌트

| Android | iOS |
|---------|-----|
| android.widget.NumberPicker | UIPickerView
