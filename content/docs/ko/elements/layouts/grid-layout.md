---
title: 그리드 (GridLayout)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_grid_layout_
contributors: [qgp9]
---

GridLayout은 자식 요소들을 행과 열의 테이블 구조로 배치합니다.
하나의 셀(cell)은 여러 자식 요소를 가질 수 있고, 여러 행/열로 확장(span)되거나 겹쳐질(overlap) 수 있습니다.
GridLayout은 기본값으로 하나의 행과 하나의 열을 가지고 있습니다.
행/열을 추가하려면,  열의 정의를(쉼표로 분리) `columns` 프로퍼티에, 행의 정의를(쉼표로 분리) `rows` 프로퍼티에 명시해야 합니다.
열의 너비와 행의 높이는  픽셀의 절대량, 사용 가능한 공간의 퍼센티지, 혹은 자동으로 지정할 수 있습니다.:

- **Absolute**: 고정된 픽셀 크기.
- **Star (*)**: 가능한 최대 값(모든 auto 와, 고정 크기 열이 채워진 후), 모든 star-sized 열 크기에 비례하여 나누어짐. 따라서 `3/7` 은 `30/70` 과 같음.
- **Auto**: 포함된 자식 요소들에 필요한 최대한의 공간을 차지.

### 예제

#### 복잡한 그리드 레이아웃

```html
<GridLayout columns="40, auto, *" rows="40, auto, *" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" colSpan="2" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" rowSpan="2" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
  <Label text="1,2" row="1" col="2" backgroundColor="#289062"/>
  <Label text="2,1" row="2" col="1" backgroundColor="#1c6b48"/>
  <Label text="2,2" row="2" col="2" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout.svg" />

#### 그리드 레이아웃과 별-크기(star sizing)

```html
<GridLayout columns="*, 2*" rows="2*, 3*" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_star_sizing.svg" />

#### 그리드 레이아웃과 고정/자동 크기

```html
<GridLayout columns="80, auto" rows="80, 80" backgroundColor="#3c495e">
  <Label text="0,0" row="0" col="0" backgroundColor="#43b883"/>
  <Label text="0,1" row="0" col="1" backgroundColor="#1c6b48"/>
  <Label text="1,0" row="1" col="0" backgroundColor="#289062"/>
  <Label text="1,1" row="1" col="1" backgroundColor="#43b883"/>
</GridLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/grid_layout_fixed_auto.svg" />


## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
`columns` | `String` | 열의 너비를 나타내는 쉼표로 나누어진 문자열 값. 열의 너비는 절대값이나 `auto`, `*`가 가능. 숫자는 고정된 절대값 너비를 의미하고, `auto`는 가장 넓은 자식의 너비, `*` 는 컬럼이 가능한 모든 가로공간을 차지하도록 만듬.
`rows` | `String` | 행의 높이를 나타내는 쉼표로 나누어진 문자열 값. 행의 높이는 절대값이나 `auto`, `*`가 가능. 숫자는 고정된 절대값 높이를 의미하고, `auto`는 가장 높은 자식의 높이, `*` 는 행이 가능한 모든 세로 공간을 차지하도록 만듬.


## 추가적인 자식 Props

요소가 GridLayout의 직접적인 자식일때 다음 prop들이 가능합니다:

| 이름 | 타입 | 설명 |
|------|------|-------------|
`row` | `Number` | 요소의 행
`column` | `Number` | 요소의 열
`rowSpan` | `Number` | 요소가 확장되는 행의 수
`columnSpan` | `Number` | 요소가 확장되는 열의 수
