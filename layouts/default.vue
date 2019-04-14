<template>
  <div>
    <Menu :variant="menuVariant"></Menu>
    <nuxt />
    <Footer />
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
