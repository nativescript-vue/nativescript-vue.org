'use strict';

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

document.addEventListener('DOMContentLoaded', function () {
  var store = new Vue({
    data: {
      isMobile: false
    },
    methods: {
      _resizeListener: function _resizeListener() {
        this.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768;
      }
    }
  });

  // attach resize listener
  window.addEventListener('resize', store._resizeListener);
  store._resizeListener();

  new Vue({
    el: '#app',
    name: 'NavApp',

    data: {
      modalVisible: false,
      modalLoaded: false,
      navOpen: false
    },

    computed: {
      isMobile: function isMobile() {
        return store.isMobile;
      }
    },

    mounted: function mounted() {
      var lang = document.documentElement.lang || 'en';

      var _ref = window.location.hostname.match(/v\d-\d-\d/) || ['master'],
          _ref2 = _slicedToArray(_ref, 1),
          version = _ref2[0];

      docsearch({
        apiKey: '31f842779e5b33726ec73f8f973b2202',
        indexName: 'nativescript-vue',
        inputSelector: '.docSearch-input',
        algoliaOptions: { facetFilters: ['lang:' + lang, 'version:' + version] },
        debug: false
      });
    },


    directives: {
      nav: function nav(el) {
        el.addEventListener('change', function (e) {
          window.location.href = e.target.value;
        });
      }
    }
  });

  var carbonComponent = {
    render: function render(h) {
      return h('div', { class: 'carbon' });
    },

    mounted: function mounted() {
      var script = document.createElement('script');
      script.id = '_carbonads_js';
      script.src = '//cdn.carbonads.com/carbon.js?serve=CESD42JM&placement=nativescript-vueorg';

      this.$el.appendChild(script);
    }
  };

  new Vue({
    el: '#docs-app',
    name: 'DocsApp',

    computed: {
      isMobile: function isMobile() {
        return store.isMobile;
      }
    },

    components: {
      carbonComponent: carbonComponent
    }
  });
});