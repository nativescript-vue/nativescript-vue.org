---
title: 快速开始
contributors: [nuochong]
---

如果您不想在尝试使用NativeScript-Vue之前安装和配置系统，那么 [NativeScript Playground](/en/docs/getting-started/playground-tutorial) 可以满足您的需求。

但是，如果 [您已准备好系统进行本机开发](/en/docs/getting-started/installation)，则可以使用 [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template):

**支持的功能**

-   `.vue` 单个文件组件
-   Vuex状态管理（选择加入）
-   NativeScript主题
-   应用程序预设

```shell
$ npm install -g @vue/cli @vue/cli-init
$ vue init nativescript-vue/vue-cli-template <project-name>
$ cd <project-name>
$ npm install
$ tns run android --bundle
$ # or
$ tns run ios --bundle
```

这组命令将在您的系统上执行以下操作：

1. 通过 `@vue/cli-init` 附件安装最新的Vue CLI并支持Vue CLI 2.x模板。
2. 使用 [vue-cli-template](https://github.com/nativescript-vue/vue-cli-template)创建项目。
3. 切换到包含新创建的项目的目录。
4. 在本地安装任何npm依赖项。
5. 在所选连接的设备上构建和运行项目，或为所选平台安装模拟器。 `--bundle` 选项触发webpack构建，该构建编译 `.vue` 文件并监视更改。
