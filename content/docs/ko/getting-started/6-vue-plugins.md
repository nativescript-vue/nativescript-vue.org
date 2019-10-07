---
title: Vue 플러그인 사용하기
contributors: [qgp9]
---

## vue-router

Coming soon...

## Vuex

Vuex 는 Vue.js의 상태 관리 패턴이자 라이브러리입니다. Vuex 는 어플리케이션 내의 모든 컴포넌트를 위한 저장소로 사용되고 상태들이 예측 가능한 방법으로 변화되도록 확신할 수 있는 룰을 제공합니다. Vuex는 네이티브-스크립트 앱에서도 사용될수 있습니다; 그 예로 [NativeScript Groceries Vue sample](https://github.com/tralves/groceries-ns-vue)를 확인하세요.

### 설치

Vue.js 앱에 설치했던 것과 같은 방법으로 Vuex를 설치합니다. npm 의 경우는 다음과 같습니다:

```shell
$ npm install vuex --save
```

최신 버젼의 Vuex가 당신의 package.json 파일에 추가될 것입니다.

### 임포트 (Import)

앱의 `main.js`파일의 제일 위에서 Vuex를 임포트합니다:

```js
import Vuex from 'vuex'
Vue.use(Vuex)
```
이제 일반적인 웹을 위한 Vue 앱에서 앱의 상태를 관리하던 것 처럼 Vuex를 사용할 수 있습니다.

### 저장소 만들기

새로운 Vue 인스턴스 생성 위쪽에 혹은 별도의 폴더에 (예를 들어 앱 폴더 안의 `/store`) 상태를 저장하기 위한 새로운 const 변수를 만드세요. 이 것이 Vuex API를 호출하기 위한 장소입니다. 간단한 저장소 constant는 카운터의 상태를 포함합니다. 당신은 앱 전체에서 이 카운터의 상태의 변화를 추적할 수 있습니다:

```js
const store = new Vuex.Store({
    state: {
      count: 0
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
})
```

### 저장소 사용하기

이제 방금 생성한 저장소를 호출하여 상태를 관리할 수 있습니다. 아래의 예에서 앱은 당신이 '+'나 '-' 버튼을 누를 때 카운터의 상태를 추적합니다. 상태 자체를 조작하는 것이 아니라 값의 증가나 감소를 위한 mutation 을 호출한다는 점을 기억하세요..

```js
new Vue({
  computed: {
    count(){
      return store.state.count
    }
  },

  template: `
    <Page>
      <ScrollView>
        <StackLayout>
          <Button @tap="increment" text="+" />
          <Button @tap="decrement" text="-" />
          <Label :text="count" />
        </StackLayout>
      </ScrollView>
    </Page>
  `,

  methods: {
    increment() {
      store.commit('increment')
    },
    decrement() {
      store.commit('decrement')
    }
  }
}).$start()
```

Vuex에 대한 더 자세한 정보와 상태 관리 방법은 [Vuex 문서](https://vuex.vuejs.org)를 참조하세요. Vuex 다양한 요소를 관리하는 좋은 아키텍쳐는 Groceries 앱의 [`/store` 폴더](https://github.com/tralves/groceries-ns-vue/tree/master/app/store/)의 에서 볼 수 있습니다.
