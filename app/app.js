import Vue from 'vue'

import App from '../Vue Components/App.vue'
import { Workspace } from './Workspace.js'
import {repository} from './repository';
Vue.config.productionTip = false;


let workspace = new Workspace(repository);

new Vue({
    el: '#app',
    data: { workspace: workspace },
    template: '<App v-bind:workspace="workspace" />',
    components: {
        'App': App
    }
});    

