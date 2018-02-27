---
title: v-view 디렉티브
contributors: [qgp9]
---

`v-view` 디렉티브는 현재 요소 `View` 를 부모 프로퍼티로 지정하는데 사용됩니다.

### 사용법

```html
<Child v-view:parentPropertyName />
<!-- same as: -->
<Child ~parentPropertyName />
```

```html
<Child v-view:parentArrayPropertyName.array />
<!-- same as: -->
<Child ~parentArrayPropertyName.array />
```

---

많은 `NativeScript` 컴포넌트들은 유효한 `View` 인스턴스를 프로퍼티로 설정해야합니다. 이는 템플릿으로는 불가능 합니다.
이 디렉티브를 사용하면 부모 요소에 대한 새로운 디렉티브나 참조를 추가할 필요가 없이 부모 프로퍼티를 수동으로 설정하여 시간을 절약할 수 있습니다.

이 디렉티브의 작동방식에 대한 더 이해하기 위해  [Progress NativeScript UI](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/getting-started) 패키지의 `RadSideDraw` 컴포넌트를 살펴봅시다.

`RadSideDrawer` 컴포넌트는 `drawContent` 와 `mainContent` 프로퍼티들이 `View` 인스턴스로 설정될 것이라고 예상합니다.
`v-view` 디렉티브를 사용하면 다음과 같습니다.

```html
<RadSideDrawer>
  <StackLayout ~drawerContent />
  <StackLayout ~mainContent />
</RadSideDrawer>
```

`v-view` 디렉티브를 사용하지 않으면 다음 처럼 해야 합니다.

```html
<RadSideDrawer ref="drawer">
  <StackLayout ref="drawerContent" />
  <StackLayout ref="mainContent" />
</RadSideDrawer>
```

```javascript
{
  mounted() {
    this.$refs.drawer.drawerContent = this.$refs.drawerContent.nativeView
    this.$refs.drawer.mainContent = this.$refs.mainContent.nativeView
  }
}
```

이는 지루하기도 하고 쉽게 실수로 에러를 만들기도 합니다.
