<template>
  <div class="font-sans leading-normal">
    <div class="min-h-screen">
      <div class="bg-blue-light">
        <div class="container mx-auto py-8 px-8 md:auto">
          <div class="flex flex-wrap">
            <div class="w-full md:w-1/2 my-8">
              <h1
                class="text-5xl leading-tight text-white"
              >Truly native apps using Vue.js and NativeScript</h1>

              <p class="w-4/5 leading-loose text-white mt-4">
                Want to release that app you've been dreaming about
                without the hassle of learning new languages?
                NativeScript-Vue is the right choice for you!
              </p>

              <a
                href="/en/docs/introduction"
                class="px-8 py-4 inline-block bg-green text-white font-bold text-lg no-underline mt-8"
              >Get Started</a>
            </div>

            <div class="hidden md:block md:w-1/2 my-8">
              <img class="w-auto" src="https://art.nativescript-vue.org/misc/phone.svg" alt="phone">
            </div>
          </div>
        </div>
      </div>

      <div class="container mx-auto py-8 px-4 md:px-0">
        <div class="flex flex-wrap -mx-3">
          <div class="w-full md:w-1/3 px-8">
            <h2 class="text-blue-dark">Easy to get started with.</h2>

            <p class="text-blue-dark leading-normal">
              NativeScript-Vue is easy to get started with, it is a single dependency that you can install through
              npm.
            </p>
          </div>

          <div class="w-full md:w-1/3 mt-8 md:mt-0 px-4">
            <h2 class="text-blue-dark">Familiar Syntax.</h2>

            <p
              class="text-blue-dark leading-normal"
            >NativeScript-Vue aims to have a syntax that you are used to from Vue.js.</p>
          </div>

          <div class="w-full md:w-1/3 mt-8 md:mt-0 px-4">
            <h2 class="text-blue-dark">Rapid workflow.</h2>

            <p
              class="text-blue-dark leading-normal"
            >With NativeScript-Vue you can build your apps rapidly, because you don't have to learn new languages.</p>
          </div>
        </div>
      </div>

      <div class="text-center px-4 md:px-0">
        <h1 class="text-blue-dark font-light">Sponsors</h1>

        <div class="flex flex-wrap justify-center my-8">
          <a
            href="https://www.privateinternetaccess.com/?source=nativescript-vue.org"
            target="_blank"
            rel="noopener"
            class="p-4"
          >
            <img
              class="max-h-16 w-auto"
              src="https://art.nativescript-vue.org/sponsors/pia.png"
              alt="PrivateInternetAccess"
            >
          </a>
          <a
            href="https://kiwiirc.com/?source=nativescript-vue.org"
            target="_blank"
            rel="noopener"
            class="p-4"
          >
            <img
              class="max-h-16 w-auto"
              src="https://art.nativescript-vue.org/sponsors/kiwiirc.png"
              alt="KiwiIRC"
            >
          </a>
          <a
            href="https://www.progress.com/?source=nativescript-vue.org"
            target="_blank"
            rel="noopener"
            class="p-4"
          >
            <img
              class="max-h-16 w-auto"
              src="https://art.nativescript-vue.org/sponsors/progress.png"
              alt="Progress"
            >
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeBlock"
};
</script>