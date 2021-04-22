<template>
  <div class="popup">

    <div class="popup__trigger"
         @click.stop="togglePopup">
      <slot />
    </div>

    <div
      v-click-outside="hidePopup"
      class="popup__content"
      v-show="isPopupVisible">

      <header
        v-if="$slots.header"
        class="popup__header">
        <slot name="header" />
      </header>

      <main
        v-if="$slots.main"
        class="popup__main">
        <slot name="main" />
      </main>

      <footer
        v-if="$slots.footer"
        class="popup__footer">
        <slot name="footer" />
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { usePopup }        from '@/hooks/usePopup';

export default defineComponent({
  name: 'Popup',
  setup() {
    const { isPopupVisible, hidePopup, togglePopup } = usePopup();
    return { isPopupVisible, hidePopup, togglePopup };
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
