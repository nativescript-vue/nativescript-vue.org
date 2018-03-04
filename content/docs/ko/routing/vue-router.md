---
title: Vue Router
contributors: [qgp9]
---

[수동 라우팅](/ko/docs/routing/manual-routing) 이 당신의 유스-케이스와 잘 맞지 않는다면, 완전히 지원되는 [Vue Router](https://router.vuejs.org/kr) 를 배워보세요.

## 설치
명령줄에서 다음을 실행합니다:
```bash
npm i vue-router --save
```

## 사용법
전체 예제를 설명과 함께 잘라서 봅시다.
Vue Router에는 더 다양한 트릭들이 있기 때문에 [공식문서](https://router.vuejs.org/kr)를 꼭 방문해 보세요.

---
Vue, VueRouter 를 require 하고, 서로 악수하게 합니다 🤝
```js
const Vue = require('nativescript-vue');
const VueRouter = require('vue-router');

Vue.use(VueRouter);
```

---
현재 라우터를 제목(`$route.path`)으로 `Master` 페이지를 정의합니다.
그리고 `@tap="$router.push('/detail')"` 과 함께 버튼을  만들어서 새 페이지가 스택에 추가되고 그 페이지로 이동할 수 있게 합니다.

또한 `user` 쿼리 파라미터(query param)와 함께 같은 페이지로 향하는 버튼도 만듭니다.
```html
const Master = {
  template: `
    <Page>
      <ActionBar :title="$route.path" />
      <StackLayout>
        <Button text="To Details" @tap="$router.push('/detail')" />
        <Button text="To Details (with query param)" @tap="$router.push('/detail?user=John+Appleseed')"></Button>
      </StackLayout>
    </Page>
  `
};
```

---
`Detail` 페이지를 `NavigationButton` 과 함께 정의합니다.
iOS 에서 이 것은 자동으로 스택의 전페이지로 이동하게 만듭니다.
하지만 안드로이드에선 `tap` 핸들러가 필요합니다.(iOS에서는 무시됩니다.)
따라서  `@tap="$router.back()"` 를 추가합니다.

`Master` 페이지의 두번째 버튼에서 `user` query param을 썼던걸 기억하시나요?
`Details` 페이지에서 다음처럼 그것을 참조할 수 있습니다:
`<Label :text="$route.query.user">`

마지막으로, 아래 예제처럼 `$router.go(<number-of-pages>)` 이용해 뒤로 (혹은 앞으로) 이동할 수 있습니다.

```html
const Detail = {
  template: `
    <Page>
      <ActionBar :title="$route.path">
        <NavigationButton text="Back!" android.systemIcon="ic_menu_back" @tap="$router.back()" />
      </ActionBar>
      <StackLayout>
        <Label :text="$route.query.user" v-if="$route.query.user" />
        <Button text="Back to Master" @tap="$router.go(-1)" />
      </StackLayout>
    </Page>
  `
};
```

---
아래처럼 어플리케이션의 모든 페이지를 정의합니다.
```js
const router = new VueRouter({
  pageRouting: true,
  routes: [
    {path: '/master', component: Master},
    {path: '/detail', component: Detail},
    {path: '*', redirect: '/master'}
  ]
});
```

---
그리고 앱이 시작할때 라우트들 중 하나를 로드합니다:
```js
router.replace('/master');
```

---
오, 그리고 `Vue` 에가 당신의 라우트들에 대해 알려주는 걸 잊지 마세요:
```js
new Vue({
  router
}).$start();
```
