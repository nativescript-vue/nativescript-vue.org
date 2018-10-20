---
title: 액션바 (ActionBar)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar
contributors: [rigor789, eddyverbruggen]
---

액션바 컴포넌트는 안드로이드 액션바와 iOS NavigationBar의 네이티브-스크립트 추상화 입니다.

---

#### 제목 사용

```html
<ActionBar title="MyApp" />
```

#### 커스텀 제목 view

```html
<ActionBar>
  <StackLayout orientation="horizontal">
    <Image src="res://icon" width="40" height="40" verticalAlignment="center" />
    <Label text="NativeScript" fontSize="24" verticalAlignment="center" />
  </StackLayout>
</ActionBar>
```

#### 안드로이드에서 앱 아이콘 설정

```html
<ActionBar title="My App" android.icon="res://icon" android.iconVisibility="always" />
```

#### 가장자리 경계(border) 없애기
iOS와 안드로이드에서 작은 보더가 액션바 바닥에 그려집니다.
추가로 iOS에서 액션바의 배경색은 iOS가 적용하는 필터때문에 지정한 값과 약간 달라집니다.
이 필터와 보더를 제거하려면 `flat` 을 `true` 로 설정하세요

```html
<ActionBar title="My App" flat="true" />
```

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `title` | `String` | 액션바에 나타나는 제목.
| `android.icon` | `String` | 안드로이드에서 보여지는 아이콘.
| `android.iconVisibility` | `String` | 아이콘이 보여질지 지정.
| `flat` | `boolean` | 보더와 iOS 컬러 필터를 제거. 기본값은 `false`.
