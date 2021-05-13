<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ArrowLeft',
	setup() {
		return () => (
			<svg
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 512 512'
				class="icon">
				<path
					fill='none'
					stroke='currentColor'
					stroke-linecap='round'
					stroke-linejoin='miter'
					stroke-width='32'
					d='M296 352l-96-96 96-96'
				/>
			</svg>
		)
	}
});
</script>

