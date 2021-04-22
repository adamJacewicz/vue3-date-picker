import { mount, VueWrapper } from '@vue/test-utils';
import RangeInput            from '@/components/molecules/date-picker/components/range-input.vue';
import CInput                from '@/components/atoms/input.vue';
import dayjs                 from 'dayjs';

describe('RangeInput', () => {
  let wrapper!: VueWrapper<any>;

  beforeEach(() => {
    wrapper = mount(RangeInput, {
      props: {
        placeholder: [ 'Check in', 'Check out' ],
        format: 'YYYY/MM/DD',
        label: 'Label',
        disabled: false,
        modelValue: [ dayjs(new Date('2021-03-02')), dayjs(new Date('2021-04-02')) ],
      },
    });
  });

  it('should render component with correct class', () => {
    expect(wrapper.classes()).toContain('range-input');
  });

  it('should render formatted dates', () => {
    const [ startInput, endInput ] = wrapper.findAllComponents(CInput);
    const [ startDate, endDate ] = wrapper.vm.formattedValue;
    expect(startInput.props('value')).toEqual(startDate);
    expect(endInput.props('value')).toEqual(endDate);
  });

  it('render clear button', () => {
    const button = wrapper.get('.range-input__clear-btn');
    expect(button.isVisible()).toBe(true);
  });


  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
