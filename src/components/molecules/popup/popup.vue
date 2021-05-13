<script lang="tsx">
import { defineComponent } from 'vue';
import { usePopup }        from '@/hooks/usePopup';

export default defineComponent({
	name: 'Popup',
	setup(props, { slots }) {
		const { isPopupVisible, hidePopup, togglePopup } = usePopup();
		return () => (
			<div class="popup">
				<div class="popup__trigger"
						 onClick_stop={togglePopup}>
					{slots.default && slots.default()}
				</div>

				{isPopupVisible && (
					<div
						v-click-outside={hidePopup}
						class="popup__content">
						{slots.header && (
							<header class="popup__header">
								{slots.header()}
							</header>
						)}
						{slots.main && (
							<header class="popup__main">
								{slots.main()}
							</header>
						)}
						{slots.footer && (
							<header class="popup__footer">
								{slots.footer()}
							</header>
						)}
					</div>)
				}
			</div>
		);
	},
});

</script>
<style scoped lang="scss">
.popup {
	position: relative;

	&__content {
		position: absolute;
		box-shadow: var(--box-shadow);
		border-radius: .3rem;
		top: calc(100% + 1rem);
		transition: all 150ms;
		min-width: calc((100% - 92px) / 2);
		border: 1px solid var(--color-primary);
	}
}
</style>
