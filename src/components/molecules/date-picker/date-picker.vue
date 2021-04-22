<template>
  <popup class="date-picker">
    <range-input
      :placeholder="placeholder"
      :label="label"
      v-model="selectedRange"
    />
    <template #main>
      <date-picker-panel />
    </template>
  </popup>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { DatePickerType }            from '@/types';
import RangeInput                    from '@/components/molecules/date-picker/components/range-input.vue';
import DatePickerPanel               from '@/components/molecules/date-picker/components/date-picker-panel.vue';
import Popup                         from '@/components/molecules/popup/popup.vue';
import { useDateRange }              from '@/hooks/useDateRange';
import { provideStore }              from '@/hooks/useStore';

export default defineComponent({
  name: 'DatePicker',
  components: {
    Popup,
    RangeInput,
    DatePickerPanel,
  },
  emits: [ 'update:modelValue', 'update:disabledDates' ],
  props: {
    placeholder: {
      type: Array as PropType<string[]>,
      default: [ 'Start date', 'End date' ],
    },
    format: {
      type: String,
      default: 'DD-MM-YYYY',
    },
    type: {
      type: String as PropType<DatePickerType>,
      default: 'range',
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Array as PropType<Date[]>,
      required: true,
    },
    disabled: {
      type: Function as PropType<(date: Date) => boolean>,
      default: () => false,
    },
  },
  setup(props, context) {
    const store = useDateRange(props, context);
    provideStore(store);
    return {
      selectedRange: store.selectedRange,
    };
  },
});
</script>
