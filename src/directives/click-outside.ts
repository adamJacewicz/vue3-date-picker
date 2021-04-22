import { Directive } from 'vue';

let onOutsideClick: (e: MouseEvent) => void;

export const clickOutside: Directive<HTMLElement> = {
  beforeMount(el, binding) {
    onOutsideClick = (e) => {
      el !== e.target && !el.contains(e.target as Node) && binding.value();
    };
    document.addEventListener('click', onOutsideClick);
  },
  beforeUnmount() {
    document.removeEventListener('click', onOutsideClick);
  },
};
