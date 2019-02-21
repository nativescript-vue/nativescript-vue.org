<template>
  <div>
    <div class="bg-grey-lighter md:hidden">
      <div class="container mx-auto p-4">
        <select
          onchange="window.location = this.options[this.selectedIndex].value"
          class="w-full p-2"
          title="Navigation"
        >categories</select>
      </div>
    </div>

    <div class="md:bg-docs-gradient min-h-screen">
      <div class="container mx-auto flex px-8">
        <div class="hidden md:w-1/4 md:block border-r-4 min-h-full">
          <div class="pl-4 md:pl-0 py-4 md:py-8">
            <ul id="docs-toc" v-for="item in $site.themeConfig.sidebar" class="list-reset">
              <li>
                <span
                  class="block text-blue-dark uppercase tracking-wide text-sm mt-4 mb-2"
                >{{item.title}}</span>
                <span v-for="link in item.children">
                  <router-link
                    class="pl-2 -mr-1 block py-1 border-r-4 pr-2 hover:border-green border-green-lightest text-blue-dark no-underline leading-tight hover:underline"
                    :to="link.link"
                  >{{ link.text }}</router-link>
                  {{link.items}}
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full md:w-3/4 bg-white min-h-screen docSearch-content">
          <div class="p-4 md:pl-8">
            <div
              class="text-blue-dark text-4xl mt-4 relative docSearch-lvl1"
            >{{ $page.frontmatter.title }}</div>
            <hr class="border-t-2 border-blue-lighter w-24 mx-0 mb-2">

            <!--<div class="text-blue-light mb-8">
                        by {{ $page.frontmatter.contributors.map(author => `<a href="https://github.com/${author}" target="_blank" rel="noopener" class="no-underline text-green hover:text-blue-dark">${author}</a>`).join(', ')
            </div>-->
            <div class="markdown-body">
              <Content/>
            </div>

            <!--<% if(current.next) { %>
                    <%- include('_partials/next', { next }) %>
            <% } %>-->
            <span v-if="$page.frontmatter.contributors != null">
              <Contributors/>
            </span>

            <div class="flex justify-center">
              <a
                href="https://github.com/nativescript-vue/nativescript-vue.org/tree/master/content/"
                target="_blank"
                rel="noopener"
                class="border border-green px-4 py-2 no-underline text-green hover:border-blue-dark hover:text-blue-dark my-8"
              >Improve this document</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Contributors from "../components/Contributors.vue";

export default {
  name: "DocsLayout",
  components: { Contributors }
};
</script>
<style lang="stylus">
@import '../styles/theme.styl';
</style>