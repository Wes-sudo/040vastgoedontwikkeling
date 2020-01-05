<template>
    <b-navbar
        toggleable="md"
        variant="faded"
        type="dark"
        fixed="top"
        id="menu"
        :class="[variant, {scrolling: isScrolling}]"
        v-scroll="handleScroll"
    >
        <b-container>
            <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

            <b-navbar-brand to="/" tag="h1" class="mb-0">
                <img src="~/assets/logo.png" class="logo" width="60" height="60" />
            </b-navbar-brand>

            <b-collapse is-nav id="nav_collapse">
                <b-navbar-nav>
                    <b-nav-item to="/werkwijze">Werkwijze</b-nav-item>
                    <b-nav-item to="/projecten">Projecten</b-nav-item>
                    <b-nav-item to="/vacatures">Vacatures</b-nav-item>
                    <b-nav-item to="/contact">Contact</b-nav-item>
                    <b-nav-item to="/contact">
                        <b-button class="d-md-none" variant="warning">
                            <fa class="icon" icon="phone" />Neem contact op
                        </b-button>
                    </b-nav-item>
                </b-navbar-nav>

                <b-navbar-nav class="ml-auto d-none d-md-block align-items-center">
                    <b-nav-item to="/contact">
                        <b-button variant="warning">
                            <fa class="icon" icon="phone" />Neem contact op
                        </b-button>
                    </b-nav-item>
                </b-navbar-nav>
            </b-collapse>
        </b-container>
    </b-navbar>
</template>
<script>

function isScrollingNext() {
    return typeof window !== 'undefined' ? window.scrollY > 0 : false;
}

export default {

    props: {
        variant: {
            type: String,
            default: 'solid'
        }
    },

    data() {
        return {
            isScrolling: isScrollingNext()
        };
    },

    methods: {
        handleScroll() {
            this.isScrolling = isScrollingNext();
        }
    }
}
</script>
<style lang="less" scoped>
#menu {
    &.solid {
        transition: box-shadow 0.4s ease; //background-color .4s ease,
        background-color: #fff - rgba(255, 255, 255, 1);
        box-shadow: 0 1px 0.5rem rgba(0, 0, 0, 0.15);

        .navbar-nav:first-child {
            transition: transform 0.2s ease;
            transform: translateX(0);
        }
    }
    &.transparent {
        transition: background-color 0.4s ease, box-shadow 0.4s ease;
        background-color: rgba(0, 0, 0, 0); // - rgba(255, 255, 255, 0);
        box-shadow: 0 1px 0.5rem rgba(0, 0, 0, 0);

        .logo {
            opacity: 0;
        }

        &.scrolling {
            transition: background-color 0.4s 0.2s ease,
                box-shadow 0.4s 0.2s ease;
            background-color: #fff - rgba(255, 255, 255, 1);
            box-shadow: 0 1px 0.5rem rgba(0, 0, 0, 0.15);

            .logo {
                transition: opacity 0s 0.8s;
                opacity: 0.75;
            }

            .navbar-nav:first-child {
                transform: translateX(0);
            }
        }
    }
}
</style>
