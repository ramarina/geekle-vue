import Vue from 'vue';
import wrap from '@vue/web-component-wrapper';
import App from './App';

const WrappedElement = wrap(Vue, App);
customElements.define('vue-application', WrappedElement);
