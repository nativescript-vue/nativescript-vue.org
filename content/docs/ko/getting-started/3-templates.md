---
title: 템플릿
contributors: [qgp9]
outdated: true
---

여러분의 `nativescript-vue` 앱을 시작하기 위해 네이티브-스크립트의 [템플릿 시스템](https://docs.nativescript.org/tooling/app-templates)을 사용할 수 있습니다. 이 템플릿들은 `nativescript-vue` 플러그인을 사용하는 네이티브-스크립트 앱을 생성합니다. 어떤 템플릿들은 Vue.js 단일 파일 컴포넌트(`.vue`) 와 라이브-리로드(livereload) 지원과 같은 추가 기능이 내장되어 있습니다.

## nativescript-vue-template

#### 프로젝트 링크

[https://github.com/tralves/nativescript-vue-template](https://github.com/tralves/nativescript-vue-template)

#### 설명

이 것은 가장 기본적인 템플릿입니다. 이 템플릿은 여러분의 앱의 시작점으로 사용될 수 있는 몇개의 앱 샘플을 포함하고 있습니다. 그것들을 시도해 보려면, `app-with-list-view.js`, `app-with-router.js`, `app-with-tab-view.js`, 또는 `app-with-vmodel.js` 의 코드들을 복사해서 여러분의 앱의 `app.js` 파일에 붙여 넣으면 됩니다.

#### 설치

```shell
$ tns create sample-app --template nativescript-vue-template
```

*더 자세한 설명은 [프로젝트 링크](https://github.com/tralves/nativescript-vue-template) 를 참조하세요.*

## nativescript-vue-rollup-template

#### 프로젝트 링크

[https://github.com/tralves/nativescript-vue-rollup-template](https://github.com/tralves/nativescript-vue-rollup-template)

#### 설명
원래의 [rigor789's](https://github.com/rigor789/nativescript-vue-rollup-template)에서 포크된 이 프로젝트는 현재 가장 안정되고 기능적으로 완벽합니다. [🍏 🍍 🍓 Groceries Vue](https://github.com/tralves/groceries-ns-vue) 에서 어떻게 사용되는지 볼 수 있습니다.

이 템플릿은 다음을 지원합니다:

- livereload;
- .vue 단일파일 컴포넌트;
- scss 임포트와 .vue 파일의 `<style>` 태그 내에서의 사용;
- root imports (앱 폴더의 최상단을 의미하는 `/` 으로 시작하는 임포트);
- 바벨 (`es2015`  `stage-2` presets);

#### 설치

```shell
$ tns create sample-app --template nativescript-vue-rollup-template
```

*더 자세한 정보는 [프로젝트 링크](https://github.com/tralves/nativescript-vue-rollup-template) 를 참조하세요*

## nativescript-vue-webpack-template

#### 프로젝트 링크

[https://github.com/tralves/nativescript-vue-webpack-template](https://github.com/tralves/nativescript-vue-webpack-template)

#### 설명

웹팩 템플릿은 rollup 과 같은 기능을 가진 웹팩(webpack)을 이용합니다.
이 템플릿은 코드공유 즉, 웹 빌드와 네이티브(안드로이드/iOS) 빌드간에 최대한 많은 로직을 공유하는 프로젝트를 만들수 있는 기능을 지원하기 위해 발전하고 있습니다.


 기능:

- livereload;
- .vue 단일파일 컴포넌트;
- scss 임포트와 .vue 파일의 `<style>` 태그 내에서의 사용;
- 바벨 (`es2015`  `stage-2` presets);
- (곧) 네이티브/웹 코드공유;

#### 설치

```shell
$ tns create sample-app --template https://github.com/tralves/nativescript-vue-webpack-template
```

*더 자세한 정보는 [프로젝트 링크](https://github.com/tralves/nativescript-vue-webpack-template) 를 참조하세요.*
