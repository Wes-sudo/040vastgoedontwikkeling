import Vue from 'vue';

Vue.directive('scroll', {
    inserted: function (el, binding, vnode) {

      const callback = binding.value.bind(vnode);

      let f = function (evt) {
        if (callback(evt, el)) {
          window.removeEventListener('scroll', f)
        }
      }
      window.addEventListener('scroll', f)
    }
});

