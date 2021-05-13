<script lang="tsx">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ArrowRight',
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
					d='M216 352l96-96-96-96'
				/>
			</svg>
		)
	}
});
</script>

