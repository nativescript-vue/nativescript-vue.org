<template>
  <nav id="app" class="px-8 bg-blue-dark">
    <div class="container flex items-center flex-wrap mx-auto">
      <div class="flex-1 flex items-center">
        <a href="/">
          <div class="relative w-16 h-16">
            <img
              v-cloak
              class="w-16 h-16 absolute pin"
              src="https://art.nativescript-vue.org/NativeScript-Vue-White-Green.svg"
              alt="NativeScript-Vue Logo"
            >
            <img
              v-cloak
              class="w-16 h-16 absolute pin transition-all-ease hover:opacity-0"
              src="https://art.nativescript-vue.org/NativeScript-Vue-Green-White.svg"
              alt="NativeScript-Vue Logo"
            >
          </div>
        </a>
      </div>
      <div class="w-auto text-center relative">
        <input
          class="docSearch-input w-full md:w-48 px-4 py-2 text-blue-lightest bg-blue-light rounded-full"
          type="search"
          aria-label="Search"
          placeholder="Type to search..."
        >

        <div class="hidden absolute ml-2 mt-2">
          <div class="border bg-white rounded shadow w-48"></div>
        </div>
      </div>

      <!-- Bars -->
      <div class="ml-4 md:hidden text-right" @click="navOpen = !navOpen">
        <div class="inline-block">
          <div class="w-6 h-2px bg-white mb-1"></div>
          <div class="w-6 h-2px bg-white mb-1"></div>
          <div class="w-6 h-2px bg-white"></div>
        </div>
      </div>

      <!-- Nav -->
      <div class="nav-item flex-col md:flex-row w-full md:w-auto">
        <span v-for="links in $site.themeConfig.nav">
          <router-link class="no-underline text-blue-lightest md:ml-6 mr-4 py-4" :to="links.link">
            {{ links.text }}
            <span class="arrow"></span>
          </router-link>

          <span v-for="link in links.items">{{ link.text }}</span>
        </span>
        <!--<a
          href="<%= meta.lang(current, null, 'docs/introduction') %>"
          class="no-underline text-blue-lightest md:ml-6 mr-4 py-4"
        >Docs</a>
        <a
          href="/<%= meta.collections.blog[0].path %>"
          class="no-underline text-blue-lightest mr-4 py-4"
        >Blog</a>
        <div class="inline text-blue-lightest mr-4 py-4 relative group">Community
          <div
            class="pl-4 mt-3 md:pl-0 md:hidden group-hover:block hover:block md:absolute md:bg-white md:shadow md:rounded md:pin-r overflow-hidden z-50"
          >
            <div class="flex flex-col">
              <a
                href="https://github.com/nativescript-vue/nativescript-vue"
                target="_blank"
                rel="noopener"
                class="no-underline text-blue-lightest md:text-blue-dark hover:bg-green hover:text-white px-4 py-2"
              >GitHub</a>
              <a
                href="https://developer.telerik.com/wp-login.php?action=slack-invitation"
                target="_blank"
                rel="noopener"
                class="no-underline text-blue-lightest md:text-blue-dark hover:bg-green hover:text-white px-4 py-2"
              >Slack</a>
              <a
                href="https://twitter.com/VueNativeScript"
                target="_blank"
                rel="noopener"
                class="no-underline text-blue-lightest md:text-blue-dark hover:bg-green hover:text-white px-4 py-2"
              >Twitter</a>
              <a
                href="https://discourse.nativescript.org/c/vue"
                target="_blank"
                rel="noopener"
                class="no-underline text-blue-lightest md:text-blue-dark hover:bg-green hover:text-white px-4 py-2"
              >Forum</a>
            </div>
          </div>
        </div>-->
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Nav",
  data() {
    return {
      open: false
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    }
  },

  mounted() {
    const selector = document.querySelector(".docSearch-input");
    const lang = document.documentElement.lang || "en";
    const [version] = window.location.hostname.match(/v\d-\d-\d/) || ["master"];

    /*docsearch({
      apiKey: "31f842779e5b33726ec73f8f973b2202",
      indexName: "nativescript-vue",
      inputSelector: selector,
      algoliaOptions: { facetFilters: [`lang:${lang}`, `version:${version}`] },
      debug: false
    });*/
  }
};
</script>
