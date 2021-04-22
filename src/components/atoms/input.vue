<template>
	<label class="c-input__label">
		{{ label }}
		<input v-bind="$attrs"
					 v-model="localValue"
					 class="c-input" />
	</label>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

export default defineComponent({
	name: 'C-Input',
	emits: [ 'update:modelValue' ],
	props: {
		label: {
			type: String,
			default: '',
		},
		value: {
			type: String,
			default: '',
		},
	},
	setup(props, context) {
		const localValue = computed({
			get: () => props.value,
			set: value => context.emit('update:modelValue', value),
		});

		return {
			localValue,
		};
	},
});
</script>
<style scoped lang="scss">
.c-input {
	outline: none;
	background: transparent;
	border: none;
	padding: 1rem 0.5rem;
	color: inherit;
	font-size: inherit;

	&::placeholder {
		color: var(--color-primary);
	}

	&:disabled {
		color: var(--color-primary-dark);
	}

	&__label {
		display: flex;
		align-items: center;
		justify-content: center;
		position: relative;
	}
}
</style>
