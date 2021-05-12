<script lang="tsx">
import { computed, defineComponent, PropType } from 'vue';
import { Dayjs }                               from 'dayjs';
import CInput                                  from '@/components/atoms/input.vue';

export default defineComponent({
	name: 'DateInput',
	components: {
		CInput,
	},
	emits: [ 'update:modelValue', 'click' ],
	props: {
		placeholder: {
			type: String,
		},
		format: {
			type: String,
			default: 'DD-MM-YYYY',
		},
		label: {
			type: String,
		},
		modelValue: {
			type: Array as PropType<Dayjs[]>,
			required: true,
		},
	},
	setup(props, { attrs, emit }) {
		const showClearButton = computed(() => props.modelValue.some(date => !!date));
		const formattedValue = computed(() => props.modelValue.map(date => date?.format(props.format)));
		const onReset = () => emit('update:modelValue', []);
		return () => (
			<div
				v-bind={attrs}
				class="date-input"
				onClick={ev => emit('click', ev)}>

				<c-input
					placeholder={props.placeholder}
					value={formattedValue.value[ 0 ]} />

				<button
					class="date-input__clear-btn"
					v-if={showClearButton.value}
					onClick={onReset}>&Cross;
				</button>
			</div>
		);
	},
});
</script>

<style scoped lang="scss">
.date-input {
	border-radius: .3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	text-align: center;
	border: 1px solid var(--color-primary);

	&__clear-btn {
		position: absolute;
		right: 0;
		border: none;
		background: none;
		cursor: pointer;
		margin-right: 1rem;
	}
}
</style>
