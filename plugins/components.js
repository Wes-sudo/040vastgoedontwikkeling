import Vue from 'vue';
import Menu from '~/components/Menu';
import Footer from '~/components/Footer';
import Intro from '~/components/Intro';
import Logo from '~/components/Logo';

const components = {
    Menu,
    Footer,
    Intro,
    Logo
};

Object.entries(components).forEach(([name, component]) => {
    Vue.component(name, component)
});
