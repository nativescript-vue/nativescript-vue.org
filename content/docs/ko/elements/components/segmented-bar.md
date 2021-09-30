---
title: 세그먼트바 (SegmentedBar)
apiRef: http://docs.nativescript.org/api-reference/modules/_ui_segmented_bar_.html
contributors: [qgp9]
---

세그먼트바(SegmentedBar) 컴포넌트는 불연속적인 선택을 위해 탭형태의 뷰 컬랙션을 보여주는 간단한 방법을 제공합니다.

---

```html
<SegmentedBar :items="listOfItems" selectedIndex="0"
    @selectedIndexChanged="onSelectedIndexChange" />
```

**노트**: 이 컴포넌트는 `v-model` 을 이용한 양방향(two-way) 바인딩을 지원합니다:

```html
<SegmentedBar :items="listOfItems" v-model="selectedItem" />
```

[> screenshots for=SegmentedBar <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `items` | `Array<SegmentedBarItem>` | 세그먼트바에 표시될 아이템 리스트.
| `selectedIndex` | `Number` | 선택된 아이템들의 인덱스
| `selectedBackgroundColor` | `Color` | 선텍된 아이템들의 배경색. 전체 바에 배경색을 적용하려면 `backgroundColor`를 사용하세요.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `selectedIndexChanged`| 세그멘트 바의 아이템이 탭될때 발생.

## Native Component
| Android | iOS |
|---------|-----|
| android.widget.TabHost | UISegmentedControl
