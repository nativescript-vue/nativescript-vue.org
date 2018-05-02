---
title: 액션아이템 (ActionItem)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem
contributors: [rigor789]
---

ActionItem 컴포넌트는 액션바에 추가적인 액션 버튼을 추가하는데 쓰임

---

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapShare"
    ios.systemIcon="9" ios.position="left"
    android.systemIcon="ic_menu_share" android.position="actionBar" />
  <ActionItem @tap="onTapDelete"
    ios.systemIcon="16" ios.position="right"
    text="delete" android.position="popup" />
</ActionBar>
```

#### 액션 아이템의 조건부 표시

ActionItems 은 `v-show` 디렉티브를 이용하여 조건부로 표시할 수 있습니다.

```html
<ActionBar title="My App">
  <ActionItem @tap="onTapEdit"
    v-show="!isEditing"
    ios.systemIcon="2" ios.position="right"
    android.systemIcon="ic_menu_edit" />
  <ActionItem @tap="onTapSave"
    v-show="isEditing"
    ios.systemIcon="3" ios.position="right"
    android.systemIcon="ic_menu_save" />
  <ActionItem @tap="onTapCancel"
    v-show="isEditing"
    ios.systemIcon="1"
    android.systemIcon="ic_menu_close_clear_cancel" />
</ActionBar>
```

## Props

| 이름 | 타입 | 설명 |
|------|------|------------|
| `ios.systemIcon` | `String` | iOS용 아이콘.
| `android.systemIcon` | `String` | 안드로이드용 아이콘.
| `ios.position` | `String` | iOS용 위치 설정.<br>가능한 값:<br>- `left` (기본값): 아이템을 액션바의 왼쪽에 위치.<br>- `right`: 아이템을 액션바의 오른쪽에 위치.
| `android.position` | `String` | 안드로이드용 위치설정.<br>가능한 값:<br>- `actionBar` (기본값): 아이템을 액션바 내에 위치.<br>- `popup`: 아이템을 옵션 메뉴에 위치. 아이템은 텍스트로 렌더링됨. .<br>- `actionBarIfRoom`: 공간이 있을 경우 아이템을 액션바 내에 위치. 아니면 옵션 메뉴에 둠.

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `tap`| 액션 아이템이 탭(tap)되었을때 호출(Emit)
