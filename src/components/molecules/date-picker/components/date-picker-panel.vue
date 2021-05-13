<script lang="tsx">
import { computed, defineComponent, ref } from 'vue';
import Calendar                           from '@/components/molecules/date-picker/components/calendar.vue';
import dayjs                              from 'dayjs';

export default defineComponent({
	name: 'DatePickerPanel',
	components: {
		Calendar,
	},
	props: {},
	setup() {
		const currentMonths = ref([ dayjs(), dayjs().add(1, 'months') ]);
		const disabledBtn = computed(() => {
			const [ left, right ] = currentMonths.value;
			const diff = right.month() - left.month() - 1;
			return !diff;
		});

		return () => (
			<div class="date-picker-panel">
				<calendar
					class="date-picker-panel__calendar left"
					disabled-btn={disabledBtn.value}
					v-model={currentMonths.value[0]}
				/>
				<calendar
					class="date-picker-panel__calendar right"
					disabled-btn={disabledBtn.value}
					v-model={currentMonths.value[1]}
				/>
			</div>
		);
	},
});

</script>
<style scoped lang="scss">
.date-picker-panel {
	align-items: flex-start;
	display: flex;
}
</style>
