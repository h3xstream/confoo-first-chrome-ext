import Vue from 'vue';
import popup from './popup.vue';
const chromeInjector = require('./chromeInjector.js')

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//Automatic scan
chrome.tabs.query({active: true, currentWindow: true}).then(tabs => {
    var tab = tabs[0];
    chromeInjector.injectDomSearch(tab,(acronyms) => {


        vm.$children[0].initData(); //Clear

        for(let a of acronyms) {
            vm.$children[0].addAcronym(a, "AAAA!!");
        }
    });
});


let vm = new Vue({
    el: '#app',
    components: { popup },
    render: function(createElement) {
        return createElement(popup);
    }
  });

//Intended to be accessed using vm.$children[0].doSomething();
//https://v2.vuejs.org/v2/api/#ref

window.vm = vm;
