import Vue from 'vue';
import Search from './search.vue';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

new Vue({
    el: '#app',
    render: function(createElement) {
        return createElement(
            Search
        )
    }
})
