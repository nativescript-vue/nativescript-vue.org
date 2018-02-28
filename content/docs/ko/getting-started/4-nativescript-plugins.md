---
title: 네이티브-스크립트 플러그인 사용하기
contributors: [qgp9]
---

플러그인들은 어떤 네이티브-스크립트 앱에서도 작동하지만, 아마도 *UI* 플러그인들이 어떻게 Vue와 함께 작동하시는지 궁금할 겁니다.

UI 플러그인은 네이트브스크립트 UI 플러그인이 앵귤러앱에서 사용되던 것과 거의 똑같이 작동합니다.
예를 들면, [listview sample](https://github.com/rigor789/nativescript-vue/tree/master/samples/app/app-with-list-view.js)에 사용되는 [nativescript-gradient](https://github.com/EddyVerbruggen/nativescript-gradient)가 있습니다.

네이티브-스크립트 CLI를 사용해서 플러그인을 설치하세요.

```shell
$ tns plugin add nativescript-gradient
```

앱의 엔트리 파일을 열고 다음 내용을 제일 위에 추가합니다.:

```js
Vue.registerElement('Gradient', () => require('nativescript-gradient').Gradient)
```

이제 템플릿에서 새로 등록된 요소를 사용할 수 있습니다:

```html
<Gradient direction="to right" colors="#FF0077, red, #FF00FF">
  <Label text="Best gradient." horizontalAlignment="center"
         style="color: white; padding: 20" />
</Gradient>
```
