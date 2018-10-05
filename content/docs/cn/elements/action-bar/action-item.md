---
title: ActionItem
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionitem
contributors: [nuochong]
---

ActionItem组件用于向ActionBar添加其他操作按钮。

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

#### 有条件地显示行动项目

ActionItems可以根据条件使用 `v-show` 指令显示 。

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

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `ios.systemIcon` | `String` | 设置iOS的图标。
| `android.systemIcon` | `String` | 设置Android的图标。
| `ios.position` | `String` | 设置iOS的位置。<br>可能的值：<br>- `left` （默认值）：将项目放在ActionBar的左侧。<br>- `right`：将项目放在ActionBar的右侧。
| `android.position` | `String` | 设置Android的位置。<br>可能的值：<br>- `actionBar` （默认值）：将项目放在ActionBar中。<br>- `popup`：将项目放在选项菜单中。项目将呈现为文本。<br>- `actionBarIfRoom`：如果有足够的空间，将项目放在ActionBar中。否则，将其放在选项菜单中。

## 活动

| 名称 | 描述 |
|------|-------------|
| `tap`| 已触发ActionItem时发出。
