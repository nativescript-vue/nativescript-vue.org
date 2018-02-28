---
title: 플렉스박스 (FlexboxLayout)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_flexbox_layout_
contributors: [qgp9]
---

FlexboxLayout 컨테이너는 [Css Flexbox Layout](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox)의 유사 구현입니다.

### 샘플

#### 기본 플렉스 레이아웃

```html
<FlexboxLayout backgroundColor="#3c495e">
  <Label text="first" width="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_stretch.svg" />

#### 컬럼 플렉스 레이아웃

```html
<FlexboxLayout flexDirection="column" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_stretch.svg" />

#### 행 레이아웃과 flex-start 로 아이템 정렬(align)

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_flex-start.svg" />

#### 행 레이아웃과 사용자 순서

```html
<FlexboxLayout alignItems="flex-start" backgroundColor="#3c495e">
  <Label text="first" order="2" width="70" height="70" backgroundColor="#43b883"/>
  <Label text="second" order="3" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third" order="1" width="70" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_row_custom_order.svg" />

#### 랩핑 (Wrapping)

```html
<FlexboxLayout flexWrap="wrap" backgroundColor="#3c495e">
  <Label text="first" width="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_wrap.svg" />

#### 리버스 컬럼과 여러가지 alignSelf

```html
<FlexboxLayout flexDirection="column-reverse"
               justifyContent="space-around" backgroundColor="#3c495e">
  <Label text="first" height="70" backgroundColor="#43b883"/>
  <Label text="second" alignSelf="center" width="70" height="70" backgroundColor="#1c6b48"/>
  <Label text="third\nflex-end" alignSelf="flex-end" width="70" height="70" backgroundColor="#289062"/>
  <Label text="fourth" height="70" backgroundColor="#289062"/>
</FlexboxLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/flexbox_layout_column_reverse_space_around_align_self.svg" />

## Props

| 이름 | 타입 | 설명 |
|-----|-----|-----|
`flexDirection` | `String` | flex 컨테이너 안에서 flex 아이템들이 위치하는 방향. 다음 4가지 값이 가능: `row` (텍스트 방향과 같음), `row-reverse` (텍스트 방향과 반대), `column` (row와 같지만 위에서 아래), and `column-reverse` (row-reverse와 같지만 위에서 아래). 기본값은 `row`.
`flexWrap` | `String` | flex 아이템이 한 줄로 강제될지 여러 줄이 가능할지 설정. 여러 줄로 설정되면, 새로운 줄이 쌓이는 방향을 결정하는 교차축(cross-axis)도 정의됨. 3가지 다른 값이 가능:  `nowrap` (한줄. 컨텐츠는 오버플로우 될 수 있음), `wrap` (여러줄. 방향은 flexDirection), `wrap-reverse` (여러 줄. flexDirection 반대방향). 기본값은  `nowrap`.
`justifyContent` | `String` |  메인 축을 따라 정렬. 줄 위의 모든 플렉스 아이템들이 융통성이 없을때 혹은 융통성은 있지만 최대 크기에 도달했을때, 남은 공간을 분배하는데 유용합니다. 또한 아이템들이 줄을 넘어갈 때(overflow), 아이템들의 정렬을 제어합니다. 가능한 5가지 값: `flex-start` (아이템들이 줄의 시작쪽으로 뭉쳐짐(pack)), `flex-end` (아이템들이 줄의 끝쪽으로 뭉쳐짐), `center` (아이템들이 줄의 중간에 위치), `space-between` (아이템들이 줄위에 균등하게 배치됨; 첫번째 아이템의 줄의 시작 부분에, 마지막 아이템의 줄의 끝에 배치), `space-around` (아이템들이 그들ㅇ르 둘러싸는 일정한 공간을 가지며 중위에 균등하게 배치됨.). 기본값은 `flex-start`.
`alignItems` | `String` | 플렉스 항목들이 교차축(cross axis)을 따라 배치되는 방법을 설정. `justifyContent` 의 교차축(주축의 수직) 버젼으로 생각할 수 있습니다. 5가지 가능한 값: `flex-start` (아이템의 교차-시작 여백(margin) 가장자리가 줄의 교차-시작에 위치), `flex-end` (교차-끝 여백 가장자리가 줄의 교차-끝 부분에 놓임), `center` (아이템들이 교차축의 중앙에 위치), `baseline` (기준선 정렬(baseline align) 처럼 정렬됨), `stretch` (아이템들을 늘려서 컨테이너를 채움. 하지만 `min-width`/`max-width` 는 유지됨). 기본 값은 `stretch`.
`alignContent` | `String` | `justifyContent` 가 주축 내의 각 아이템들을 배치하는 것 처럼, `alignContent`sms 교차축 상에서 아이템들을 배치. 가능한 6가지 값: `flex-start` (라인들이 컨테이너의 시작부분으로 뭉쳐짐), `flex-end` (라인들이 컨테이너의 끝 부분으로 뭉쳐짐), `center` (라인들이 컨테이너의 중앙으로 뭉쳐짐), `space-between` (라인들이 균등하게 배포치됨. 첫번째 라인은 컨테이너의 시작 부분에, 마지막 라인은 컨테이너의 끝 부분에 배치.), `space-around` (라인들이 일정한 간격으로 균등하게 배치됨), `stretch` (라인들이 남은 공간을 채우도록 늘려짐). 기본값은 `stretch`. 이 프로퍼티는 플렉스 컨테이너가 하나의 라인만 가지고 있을때는 아무런 효과가 없음.

## 추가적인 자식 Props

요소가 FlexboxLayout의 직접적인 자식일때 다음 prop들이 가능합니다:

| 이름 | 타입 | 설명 |
|------|------|-------------|
`order` | `Number` | 플렉스 아이템의 기본 순서를 변경
`flexGrow` | `Number` | 플렉스 아이템이 필요한 경우 커질수 (grow) 있는지 나타내는 단위 없는 비율. 이 값은 아이템이 차지해야 하는 플렉스 컨테이너의 사용가능한 공간의 크기를 결정.
`flexShrink` | `Number` | "flex shrink factor" 값. 행(row)에 충분한 공간이 없을때 플렉스 아이템이 다른 플렉스아이템들에대해 상대적으로 얼마나 줄어들어야햐는지 결정. 생략될 경우, 1이 설정되고 음수 공간을 분배할땐 flex basis 가 곱해집니다.
`alignSelf` | `String` | `alignItems`를 오버라이드. `alignItems` 처럼 5가지 값이 가능:`flex-start` (아이템의 교차-시작 여백(margin) 가장자리가 줄의 교차-시작에 위치), `flex-end` (교차-끝 여백 가장자리가 줄의 교차-끝 부분에 놓임), `center` (아이템들이 교차축의 중앙에 위치), `baseline` (기준선 정렬(baseline align) 처럼 정렬됨), `stretch` (아이템들을 늘려서 컨테이너를 채움. 하지만 `min-width`/`max-width` 는 유지됨). 기본 값은 `stretch`.
`flexWrapBefore` | `Boolean` | 아이템 래핑을 제어하는 부울값. `true` 로 설정되면 아이템의 새로운 라인으로 래핑 되도록 강제. 기본값은 `false`. (이 프로퍼티는 공식 flexbox 스펙에는 없습니다.)
