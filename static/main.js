'use strict';

document.addEventListener('DOMContentLoaded', function () {
  new Vue({
    el: '#app',

    data: {
      modalVisible: false,
      isMobile: false,
      navOpen: false
    },
    created: function created() {
      var _this = this;

      this._resizeListener = function () {
        _this.isMobile = Math.max(document.documentElement.clientWidth, window.innerWidth || 0) <= 768;
      };
      window.addEventListener('resize', this._resizeListener);
      this._resizeListener();
    },
    destroyed: function destroyed() {
      window.removeEventListener('resize', this._resizeListener);
    },

    methods: {}
  });
});