---
title: 독 (DockLayout)
apiRef: https://docs.nativescript.org/api-reference/modules/_ui_layouts_dock_layout_
contributors: [qgp9]
---

DockLayout는 도킹 메커니즘을 제공하는 레이아웃입니다. 자식 요소들은 레이아웃의 `left`, `right`, `top`, `bottom` 혹은 center 에 도킹될 수 있습니다. 자식 요소의 도킹 방향을 정의하려면 `dock` 프로퍼티를 사용합니다.
자식 요소를 DockLayout의 중간(center)에 위치시킬때, 자식요소는 반드시 DockLayout의 **마지막 자식** 이어야 하고
DockLayout의 `stretchLastChild` 프로퍼티가 반드시 `true` 여야 합니다.

### 샘플

#### 마지막 자식을 늘리지(stretch)않고 모든 방향으로 도킹

```html
<DockLayout stretchLastChild="false" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" height="40" backgroundColor="#289062"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_no_stretch.svg" />

#### 마지막 자식을 늘리면서(stretch) 모든 방향으로 도킹

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="top" dock="top" height="40" backgroundColor="#289062"/>
  <Label text="right" dock="right" width="40" backgroundColor="#43b883"/>
  <Label text="bottom" dock="bottom" backgroundColor="#1c6b48"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_stretch.svg" />

#### 한 방향의 여러 자식들

```html
<DockLayout stretchLastChild="true" backgroundColor="#3c495e">
  <Label text="left 1" dock="left" width="40" backgroundColor="#43b883"/>
  <Label text="left 2" dock="left" width="40" backgroundColor="#289062"/>
  <Label text="left 3" dock="left" width="40" backgroundColor="#1c6b48"/>
  <Label text="last child" backgroundColor="#43b883"/>
</DockLayout>
```
<img class="md:w-1/2 lg:w-1/3" src="https://art.nativescript-vue.org/layouts/dock_layout_multiple_on_same_side.svg" />

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
`stretchLastChild` | `Boolean` | 마지막 자식을 남은 공간에 맞추는 늘이기(stretching)의 활성/비활성화

## 추가적인 자식 Props

요소가 DockLayout의 직접적인 자식일때 다음 Prop들이 가능:

| 이름 | 타입 | 설명 |
|------|------|-------------|
`dock` | `String` | 요소의 도킹 방향을 지정. 가능한 값: `top`, `right`, `bottom`, `left`
