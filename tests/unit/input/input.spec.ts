import { shallowMount } from '@vue/test-utils';
import CInput           from '@/components/atoms/input.vue';

describe('Input', () => {
  const input = shallowMount(CInput, {
    props: {
      value: 'Mock!',
    },
  });

  it('render component with correct class', () => {
    expect(input.classes()).toContain('c-input__label');
  });

  it('store correct value', () => {
    expect(input.props('value')).toEqual('Mock!');
  });

  it('should match snapshot', () => {
    expect(input.html()).toMatchSnapshot();
  });
});
