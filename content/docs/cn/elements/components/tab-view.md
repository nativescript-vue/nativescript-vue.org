---
title: TabView - 选项卡
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview
contributors: [Pythonfo]
---

**TabView** 组件会将内容分组到选项卡中，并允许用户在选项卡之间切换。

---

```html
<TabView :selectedIndex="selectedIndex">
  <TabViewItem title="Tab 1">
    <Label text="Content for Tab 1" />
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <Label text="Content for Tab 2" />
  </TabViewItem>
</TabView>
```

[> screenshots for=TabView <]

## 属性（Props）

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `selectedIndex` | `Number` | 获取或设置当前选择的选项卡。默认为0 |
| `tabTextColor` | `Color` | 获取或设置选项卡的文本颜色（样式属性） |
| `tabBackgroundColor` | `Color` | 获取或设置选项卡的背景色（样式属性） |
| `selectedTabTextColor` | `Color` | 获取或设置当前选择的选项卡的文本颜色（样式属性） |

## 事件（Events）

| 名称 | 描述 |
|------|-------------|
| `selectedIndexChanged` | 组件的 `selectedIndex` 改变时触发 |

## 原生组件（Native component）

| Android | iOS |
|---------|-----|
| [`android.support.v4.view.ViewPager`](https://developer.android.com/reference/android/support/v4/view/ViewPager.html) | [`UITabBarController`](https://developer.apple.com/documentation/uikit/uitabbarcontroller) |
