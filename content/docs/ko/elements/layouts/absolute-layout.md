---
title: 고정 (AbsoluteLayout)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_absolute_layout_
contributors: [qgp9]
---

AbsoluteLayout 컨테이너는 네이티브-스크립트에서 가장 간단한 레이아웃 컨테이너입니다. 이 컨테이너는 자식들의 위치로 절대 top-left 좌표를 사용합니다.
AbsoluteLayout은 자식들의 레이아웃을 제안하지 않고 런타임에 자신의 크기가 변경될때 자식들의 크기를 변경하지 않습니다.

### 예제

#### 그리드 같은(grid-like) 레이아웃

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,10" left="120" top="10" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="10,120" left="10" top="120" width="100" height="100" backgroundColor="#43b883"/>
  <Label text="120,120" left="120" top="120" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_grid.svg" />

#### 요소 겹침 (Overlapping elements)

```html
<AbsoluteLayout backgroundColor="#3c495e">
  <Label text="10,10" left="10" top="10" width="100" height="100" backgroundColor="#289062"/>
  <Label text="30,40" left="30" top="40" width="100" height="100" backgroundColor="#43b883"/>
</AbsoluteLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/absolute_layout_overlap.svg" />


## Props

AbsoluteLayout은 prop이 없습니다.

## 추가적인 자식들의 Props (Additional Children Props)

요소가 AbsoluteLayout의 바로 아래 자식일때, 다음 prop들을 사용할 수 있습니다:

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `top` | `Number` | 부모 AbsoluteLayout의 top으로 부터 거리
| `left` | `Number` | 부모 AbsoluteLayout의 left로 부터 거리
