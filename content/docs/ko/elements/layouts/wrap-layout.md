---
title: 랩핑 (WrapLayout)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_wrap_layout_
contributors: [qgp9]
---

WrapLayout 컨테이너는 orientation 프로퍼티에 기초하여 공간이 다 찰때까지 자식들을 행이나 열에 위치시키고 그들을 새로운 행이나 열로 래핑합니다.

### 예제

#### 기본 WrapLayout

```html
<WrapLayout backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_horizontal.svg" />

#### 수직 WrapLayout

```html
<WrapLayout orientation="vertical" backgroundColor="#3c495e">
  <Label text="first" width="30%" height="30%" backgroundColor="#43b883"/>
  <Label text="second" width="30%" height="30%" backgroundColor="#1c6b48"/>
  <Label text="third" width="30%" height="30%" backgroundColor="#289062"/>
  <Label text="fourth" width="30%" height="30%" backgroundColor="#289062"/>
</WrapLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/wrap_layout_vertical.svg" />

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
`orientation` | `String` | 흐름의 방향. `horizontal` 이면 아이템이 행들에 배치됨. `vertical` 이면 아이템들이 열들에 배치됨. 기본값은 `horizontal`.
`itemWidth` | `Number` | 각 자식을 측정하고 위치시키는데 쓰이는 너비. 기본값은 `Number.NaN`. 이 값은 자식들을 제한하지 않음.
`itemHeight` | `Number` | 각 자식을 측정하고 위치시키는데 쓰이는 높이. 기본값은 `Number.NaN`. 이 값은 자식들을 제한하지 않음.


## 추가적인 자식 Props

없음
