---
title: Директива v-view
contributors: [sn0wil]
---

Директива `v-view` используется для задания текущих элементов `View` в качестве родительского свойства.

### Использование

```html
<Child v-view:parentPropertyName />
<!-- равнозначно: -->
<Child ~parentPropertyName />
```

```html
<Child v-view:parentArrayPropertyName.array />
<!-- равнозначно: -->
<Child ~parentArrayPropertyName.array />
```

---

Существует много компонентов `NativeScript`, которые требуют установки свойства в действительный экземпляр `View`, что невозможно с использованием шаблона. Использование этой директивы экономит время, не регистрируя новые директивы / ссылки на родительские элементы и не устанавливая родительские свойства вручную.

Чтобы лучше проиллюстрировать, что делает эта директива, давайте посмотрим на компонент `RadSideDrawer` из [Progress NativeScript UI](http://docs.telerik.com/devtools/nativescript-ui/Controls/Angular/SideDrawer/getting-started):

Компонент `RadSideDrawer` ожидает, что свойства `drawerContent` и` mainContent` будут установлены в экземпляры `View`,
используя директиву `v-view`, и он будет выглядеть так:

```html
<RadSideDrawer>
  <StackLayout ~drawerContent />
  <StackLayout ~mainContent />
</RadSideDrawer>
```

Без этой директивы у вас бы было что-то вроде:

```html
<RadSideDrawer ref="drawer">
  <StackLayout ref="drawerContent" />
  <StackLayout ref="mainContent" />
</RadSideDrawer>
```

```javascript
{
  mounted() {
    this.$refs.drawer.nativeView.drawerContent = this.$refs.drawerContent.nativeView
    this.$refs.drawer.nativeView.mainContent = this.$refs.mainContent.nativeView
  }
}
```

Что может стать утомительным и очень подвержено ошибкам.
