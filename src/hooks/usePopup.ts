import { computed, ComputedRef, ref } from 'vue';

type PopupHook = {
	isPopupVisible: ComputedRef<boolean>
	hidePopup: () => void
	showPopup: () => void
	togglePopup: () => void
}

export const usePopup = (): PopupHook => {
	const isPopupVisible = ref<boolean>(false);

	const togglePopup = (): void => {
		isPopupVisible.value = !isPopupVisible.value;
	};
	const hidePopup = (): void => {
		isPopupVisible.value = false;
	};
	const showPopup = (): void => {
		isPopupVisible.value = true;
	};

	return {
		isPopupVisible: computed(() => isPopupVisible.value),
		hidePopup,
		showPopup,
		togglePopup,
	};
};
