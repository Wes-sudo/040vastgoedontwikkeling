<template>
  <div id="layout">
    <Menu :variant="menuVariant"></Menu>
    <div style="display: flex; flex-direction: column; align-items: stretch; min-height: 100%;">
      <nuxt style="flex-grow: 1;" />
      <Footer style="flex-shrink: 0;" />
    </div>
  </div>
</template>
<script>



  export default {



    computed: {
      menuVariant() {
        return this.determineMenuVariant();
      }
    },

    methods: {
      determineMenuVariant() {
        return this.$route.name == 'index' ? 'transparent' : 'solid';
      }
    }
  };

</script>
<style lang="less">

html, body, #__nuxt, #__layout, #layout {
  width: 100%;
    height: 100%;

}

  body {
    overflow-y: scroll;
  }

  @font-face {
    font-family: 'ProximaSoftMark';
    src: url('/fonts/proxima-soft-medium-mark.woff2') format('woff2');
    font-weight: 400;
    font-style: normal;

  }
  body {
    font-size: 1rem;
    color:rgba(0,0,0,.80);
  }

  a {
    font-family: 'ProximaSoftMark';
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'ProximaSoftMark';
    color: #526488;
  }

  h1 {
    color: #35495e;
  }

  #menu {
    //opacity: 0;
    font-family: 'ProximaSoftMark';
  }
</style>
