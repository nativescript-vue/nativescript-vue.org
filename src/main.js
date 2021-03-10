document.addEventListener('DOMContentLoaded', () => {
  const store = new Vue({
    data: {
      isMobile: false
    },
    methods: {
      _resizeListener() {
        this.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768
      }
    },
  })

  // attach resize listener
  window.addEventListener('resize', store._resizeListener);
  store._resizeListener();

  new Vue({
    el: '#app',
    name: 'NavApp',

    data: {
      modalVisible: false,
      modalLoaded: false,
      navOpen: false,
    },

    computed: {
      isMobile() {
        return store.isMobile
      }
    },

    mounted() {
      const lang = document.documentElement.lang || 'en'
      const [version] = window.location.hostname.match(/v\d-\d-\d/) || ['master']

      docsearch({
        apiKey: '31f842779e5b33726ec73f8f973b2202',
        indexName: 'nativescript-vue',
        inputSelector: '.docSearch-input',
        algoliaOptions: {facetFilters: [`lang:${lang}`, `version:${version}`]},
        debug: false
      })
    },

    directives: {
      nav(el) {
        el.addEventListener('change', (e) => {
          window.location.href = e.target.value
        })
      }
    }
  });

  const carbonComponent = {
    render: h => h('div', { class: 'carbon' }),

    mounted() {
      const script = document.createElement('script')
      script.id = '_carbonads_js'
      script.src = '//cdn.carbonads.com/carbon.js?serve=CESD42JM&placement=nativescript-vueorg'

      this.$el.appendChild(script)
    }
  }

  new Vue({
    el: '#docs-app',
    name: 'DocsApp',

    computed: {
      isMobile() {
        return store.isMobile
      }
    },

    components: {
      carbonComponent
    }
  })
});
