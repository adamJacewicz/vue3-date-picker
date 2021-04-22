import { shallowMount, VueWrapper } from '@vue/test-utils';
import DatePickerPanel              from '@/components/molecules/date-picker/components/date-picker-panel.vue';
import Calendar                     from '@/components/molecules/date-picker/components/calendar.vue';
import dayjs                        from 'dayjs';

describe('date-picker-panel', () => {
  let wrapper!: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(DatePickerPanel, {
      data() {
        return {
          currentMonths: [ dayjs(), dayjs().add(1, 'months') ],
        };
      },
    });
  });

  it('should render component with correct class', () => {
    expect(wrapper.classes()).toContain('date-picker-panel');
  });

  it('should render 2 calendars', () => {
    const [ left, right ] = wrapper.findAllComponents(Calendar);
    expect(left.exists()).toBe(true);
    expect(right.exists()).toBe(true);
  });
});
