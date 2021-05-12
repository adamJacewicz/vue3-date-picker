<script lang="tsx">
import {  defineComponent } from 'vue';
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
	setup(props, { attrs }) {
		return () => (
			<label class="c-input__label">
				{props.label}
				<input v-model={props.value}
							 class="c-input" {...attrs} />
			</label>
		);
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
