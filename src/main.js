document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: '#app',

    data: {
      modalVisible: false,
      modalLoaded: false,
      isMobile: false,
      navOpen: false,
    },
    created() {
      this._resizeListener = () => {
        this.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768
      };
      window.addEventListener('resize', this._resizeListener);
      this._resizeListener();
    },
    mounted() {
      const selector = document.querySelector('.docSearch-input')
      const lang = document.documentElement.lang || 'en'
      const [version] = window.location.hostname.match(/v\d-\d-\d/) || ['master']

      docsearch({
        apiKey: '31f842779e5b33726ec73f8f973b2202',
        indexName: 'nativescript-vue',
        inputSelector: selector,
        algoliaOptions: {facetFilters: [`lang:${lang}`, `version:${version}`]},
        debug: false
      })
    },
    destroyed() {
      window.removeEventListener('resize', this._resizeListener)
    },
    methods: {},
    directives: {
      nav(el) {
        el.addEventListener('change', (e) => {
          window.location.href = e.target.value
        })
      }
    }
  });
});
