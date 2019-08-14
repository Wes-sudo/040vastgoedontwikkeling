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
html,
body,
#__nuxt,
#__layout,
#layout {
    width: 100%;
    height: 100%;
}

body {
    font-size: 1rem;
    overflow-y: scroll;
    color: rgba(0, 0, 0, 0.8);
}

a {
    font-family: 'Nunito', sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Nunito', sans-serif;
    color: #8c5c11;;
}

#menu {
    //opacity: 0;
    font-family: 'Nunito', sans-serif;
}
</style>
