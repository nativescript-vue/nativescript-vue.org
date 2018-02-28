---
title: 리스트뷰 (ListView)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_list_view_.listview
contributors: [qgp9]
---

리스트뷰(ListView) 컴포넌트는 수직 스크롤 리스트에 아이템을 보여줍니다.  
리스트에서 각 아이템이 어떻게 표시되는지를 지정하기 위해 다른 `v-template`를 설정할 수 있습니다.

---

```html
<ListView for="item in listOfItems" @itemTap="onItemTap">
  <v-template>
    <Label :text="item.text" />
  </v-template>

  <v-template if="$odd">
    <Label :text="item.text" color="red" />
  </v-template>
</ListView>
```

위 예에서 두번째 템플릿은 아이템의 인덱스가 홀수일때 사용됩니다.
편의를 위해 `$index`, `$even`, `$odd` 헬퍼를 사용할 수 있습니다.
그러나 필요하다면 임의의 유효한 자바스크립트 표현식과 함께 `v-template`의 `if` 조건을 사용할 수 있습니다.

`v-template` 컴포넌트에 대해 더 자세이 배우려면 [`v-template` 문서](/ko/docs/utilities/v-template) 를 확인하세요.

리스트뷰는 당신의 예상과 다르게 [`v-for`](https://vuejs.org/v2/guide/list.html#Mapping-an-Array-to-Elements-with-v-for) 처럼 아이템들의 룹을 돌지 않습니다.
대신 리스트뷰는 단지 현재 스크린에 보일 수 있는 아이템을 표시하기 위해 필요한 뷰를 만들고 스크롤이 발생할 경우 이미 off-screen 되었던 뷰를 재사용합니다.
이 컨셉은 뷰 재활용(recycling)이라고 불리며 모바일 어플리케이션에서 퍼포먼스를 향상시키기 위해 흔히 사용됩니다.
이는 당신이 `v-template` 안에서  결합된 이벤트리스너에 의존할 수 없고 대신 탭된 아이템(리스트의 실제 아이템도 마찬가지)의 인덱스를 포함하는 `itemTap` 이벤트를 사용해야 하기때문에 중요합니다.
(역자: 솔직히 뭔소린지 모르고 번역했습니다.)

```js
onItemTap(event) {
  console.log(event.index)
  console.log(event.item)
}
```

[> screenshots for=ListView <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `for` | `String` | 아이템 이터레이팅을 위한 표현식. 예:<br>- `item in listOfItems`<br>- `(item, index) in listOfItems`<br>- `item in [1, 2, 3, 4, 5]`
| `items` | `Array<any>` | 리스트뷰에 표시될 아이템 배열. **노트**: 이 프로퍼티는 오직 고급 사용을 위한 것입니다. 대부분의 경우 `for` 프로퍼티를 사용하기를 권장합니다.
| `separatorColor` | `Color` | 구분라인의 컬러. `transparent` 를 사용하여 제거할 수 있습니다.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `itemTap`| 리스트뷰 내의 아이템이 탭되었을때 발생. 탭된 아이템에 접근하려면 `event.item`을 사용하세요

## 네이티브 컴포넌트
| Android | iOS |
|---------|-----|
| android.widget.ListView | UITableView
