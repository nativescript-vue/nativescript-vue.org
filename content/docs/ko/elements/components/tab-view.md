---
title: 탭뷰 (TabView)
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_tab_view_.tabview
contributors: [qgp9]
---

탭뷰(TabView) 컴포넌트는 탭으로 그룹화된 컨텐츠를  표시할 수 있도록 해줍니다.

---

```html
<TabView :selectedIndex="selectedIndex">
  <TabViewItem title="Tab 1">
    <label text="Content for Tab 1"></label>
  </TabViewItem>
  <TabViewItem title="Tab 2">
    <label text="Content for Tab 2"></label>
  </TabViewItem>
</TabView>
```

[> screenshots for=TabView <]

## Props

| 이름 | 타입 | 설명 |
|------|------|-------------|
| `selectedIndex` | `Number` | 현재 선택된 탭. 기본값은 `0`

## 이벤트

| 이름 | 설명 |
|------|-------------|
| `selectedIndexChanged`| tab-view-item 컴포넌트중 하나가 탭되었을때 발생

## Native Component
| Android | iOS |
|---------|-----|
| android.support.v4.view.ViewPager | UITabBarController
