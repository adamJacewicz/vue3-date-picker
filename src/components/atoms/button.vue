<template>
	<button v-bind="$attrs"
					class="c-button">
		<slot />
	</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CButton',
	setup() {
		return {};
	},
});
</script>

<style scoped lang="scss">
.c-button {
	background: none;
	border: none;
	cursor: pointer;
	padding: .6rem .9rem;
	border-radius: .3rem;

	&:not(:disabled):hover {
		border-color: var(--color-primary-dark);
	}

	&:hover {
		color: var(--color-accent-darker);
	}

	&:disabled {
		cursor: not-allowed;
		color: var(--color-primary) !important;
	}
}
</style>
