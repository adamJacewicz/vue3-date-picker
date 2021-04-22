import { computed, ref } from 'vue';


export const usePopup = () => {
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
