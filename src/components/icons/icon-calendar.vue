<script lang="tsx">
import {defineComponent} from 'vue';

export default defineComponent({
	name: 'IconCalendar',
	setup(props, {slots}) {
		const slot = slots.default!()
		return () => (
			<svg
				class="icon"
				xmlns='http://www.w3.org/2000/svg'
				stroke="currentColor"
				width="48px"
				height="48px"
				viewBox='0 0 512 512'>
				<rect
					fill='none'
					stroke-linejoin='round'
					stroke-width='24'
					x='48'
					y='80'
					width='416'
					height='384'
					rx='48'
				/>
				<path
					fill='none'
					stroke-linejoin='round'
					stroke-width='24'
					stroke-linecap='round'
					d='M128 58v32M384 58v32M464 160H48'
				/>
				<text
					x="256"
					fill="currentColor"
					y="400"
					stroke="none"
					font-size="256px"
				>
					{slot}
				</text>
			</svg>
		)
	}
});
</script>
<style lang="scss" scoped>
.icon {
	text-anchor: middle;
}
</style>
