import { mount, VueWrapper } from '@vue/test-utils';
import DatePicker            from '@/components/molecules/date-picker/date-picker.vue';
import Popup                 from '@/components/molecules/popup/popup.vue';
import { clickOutside }      from '@/directives/click-outside';

describe('DatePicker', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
    wrapper = mount(DatePicker, {
        global: {
          directives: {
            clickOutside: clickOutside,
          },
        },
        props: { modelValue: [ new Date('2021-03-23'), new Date('2021-03-27') ] },
      },
    );
  });

  it('should render component with correct class', () => {
    expect(wrapper.classes()).toContain('date-picker');
  });

  it('render popup element', () => {
    expect(wrapper.findComponent(Popup).exists()).toBe(true);
  });
});
