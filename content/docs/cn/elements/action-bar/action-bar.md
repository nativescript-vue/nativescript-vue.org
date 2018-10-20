---
title: ActionBar
apiRef: https://docs.nativescript.org/api-reference/classes/_ui_action_bar_.actionbar
contributors: [nuochong]
---

ActionBar组件是Android ActionBar和iOS NavigationBar的NativeScript抽象。

---

#### 使用标题

```html
<ActionBar title="MyApp" />
```

#### 使用自定义标题视图

```html
<ActionBar>
  <StackLayout orientation="horizontal">
    <Image src="res://icon" width="40" height="40" verticalAlignment="center" />
    <Label text="NativeScript" fontSize="24" verticalAlignment="center" />
  </StackLayout>
</ActionBar>
```

#### 为Android设置应用程序图标

```html
<ActionBar title="My App" android.icon="res://icon" android.iconVisibility="always" />
```

#### 删除边框
在iOS和Android上，在ActionBar的底部绘制了一个小边框。此外，iOS上ActionBar的背景颜色与您指定的略有不同，因为iOS应用了过滤器。要删除此过滤器和边框，请设置 `flat` 为 `true`。

```html
<ActionBar title="My App" flat="true" />
```

## 道具

| 名称 | 类型 | 描述 |
|------|------|-------------|
| `title` | `String` | 要在ActionBar中显示的标题。
| `android.icon` | `String` | Android上显示的图标。
| `android.iconVisibility` | `String` | 设置图标可见时的设置。
| `flat` | `boolean` | 删除边框和iOS颜色过滤器。默认 `false`。
