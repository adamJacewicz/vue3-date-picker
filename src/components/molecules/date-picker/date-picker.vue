<template>
	<popup class="date-picker">
		<range-input
			:placeholder="placeholder"
			:label="label"
			v-model="selectedRange"
		/>
		<template #main>
			<date-picker-panel />
		</template>
	</popup>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { DatePickerType }                      from '@/types';
import RangeInput                              from '@/components/molecules/date-picker/components/range-input.vue';
import DatePickerPanel
																							 from '@/components/molecules/date-picker/components/date-picker-panel.vue';
import Popup                                   from '@/components/molecules/popup/popup.vue';
import { useDateRange }                        from '@/hooks/useDateRange';
import { provideStore }                        from '@/hooks/useStore';
import { Dayjs }                               from 'dayjs';

export default defineComponent({
	name: 'DatePicker',
	components: {
		Popup,
		RangeInput,
		DatePickerPanel,
	},
	emits: [ 'update:modelValue' ],
	props: {
		placeholder: {
			type: Array as PropType<string[]>,
			default: [ 'Start date', 'End date' ],
		},
		format: {
			type: String as PropType<string>,
			default: 'DD-MM-YYYY',
		},
		type: {
			type: String as PropType<DatePickerType>,
			default: 'range',
		},
		label: {
			type: String,
			default: 'Label',
		},
		modelValue: {
			type: Array as PropType<Date[] | Date>,
		},
		disabled: {
			type: Function as PropType<(date: Date) => boolean>,
			default: () => false,
		},
	},
	setup(props, context) {
		const store = useDateRange(props, context);
		const selectedRange = computed<Dayjs[]>({
			get: () => store.selectedRange.value,
			set: store.setRange,
		});

		provideStore(store);
		return {
			selectedRange,
		};
	},
});
</script>
