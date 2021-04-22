import { createApp }    from 'vue';
import { clickOutside } from '@/directives/click-outside';
import App              from '@/views/root.vue';

createApp(App)
	.directive('click-outside', clickOutside)
	.mount('#app');
