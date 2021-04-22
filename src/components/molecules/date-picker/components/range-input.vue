<template>
	<div
		v-bind="$attrs"
		@click="ev => $emit('click', ev)"
		class="range-input"
	>
		<icon-calendar>
			{{ new Date().getDate() }}
		</icon-calendar>

		<c-input
			:disabled="disabled"
			:placeholder="placeholder[0]"
			:value="formattedValue[0]"
		/>

		<span class="range-input__separator">&rarr;</span>

		<c-input
			:disabled="disabled"
			:placeholder="placeholder[1]"
			:value="formattedValue[1]"
		/>

		<c-button
			aria-label="clear-button"
			class="range-input__clear-btn"
			@click.stop="onReset">
			<icon-clear />
		</c-button>
	</div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import CInput                                  from '@/components/atoms/input.vue';
import CButton                                 from '@/components/atoms/button.vue';
import IconCalendar                            from '@/components/icons/icon-calendar.vue';
import IconClear                               from '@/components/icons/icon-clear.vue';
import { Dayjs }                               from 'dayjs';

export default defineComponent({
	name: 'RangeInput',
	components: {
		CInput, IconCalendar, IconClear, CButton,
	},
	emits: [ 'update:modelValue', 'click' ],
	props: {
		placeholder: {
			type: Array as PropType<string[]>,
		},
		format: {
			type: String,
			default: 'DD-MM-YYYY',
		},
		label: {
			type: String,
		},
		disabled: {
			type: Boolean,
			default: false,
		},
		modelValue: {
			type: Array as PropType<(Dayjs | undefined)[]>,
		},
	},
	setup(props, context) {
		const isClearBtnVisible = computed(() => props.modelValue?.some((date) => !!date));
		const formattedValue = computed(() => props.modelValue?.map((date) => date?.format(props.format)));
		const onReset = () => context.emit('update:modelValue', []);

		return {
			formattedValue,
			isClearBtnVisible,
			onReset,
		};
	},
});
</script>
<style lang="scss">
.range-input {
	& .c-input, & .c-input__label {
		text-align: center;
		cursor: pointer;
	}
}
</style>
<style scoped lang="scss">
.range-input {
	position: relative;
	border-radius: .3rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid var(--color-primary);
	background: var(--color-white);
	padding: 0 1rem;
	cursor: pointer;

	&:hover {
		& .range-input__clear-btn {
			visibility: visible;
			color: var(--color-text) !important;
		}
	}

	&__separator {
		font-size: 2.2rem;
		margin: 0 1rem;
	}

	&__clear-btn {
		visibility: hidden;
	}

	&__clear-btn, .icon {
		display: flex;
		align-items: center;
		justify-content: center;
		padding: 0;
		width: 25px;
		height: 25px;
		color: var(--color-primary);
		border: none;
		background: none;
		cursor: pointer;
	}
}
</style>
