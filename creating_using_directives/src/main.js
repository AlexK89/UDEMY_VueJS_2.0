import Vue from 'vue'
import App from './App.vue'

// Directives have 5 HOOKs:
// - bind(el, binding, vnode) - once directive is attached
// - inserted(el, binding, vnode) - inserted in parentNode
// - update(el, binding, vnode, oldVnode) - once component is updated(without children)
// - componentUpdated(el, binding, vnode, oldVnode) - once component is updated(with children)
// - unbind(el, binding, vnode) - once directive is removed

//custom directives
Vue.directive('highlight', {
	bind(el, binding, vnode) {
		// el.style.background = 'green';
		if(binding.arg == 'background') {
			el.style.background = binding.value;
		} else {
			el.style.color = binding.value;
		}
	}
});

new Vue({
	el: '#app',
	render: h => h(App)
})
