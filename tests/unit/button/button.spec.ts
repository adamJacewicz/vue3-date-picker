import { shallowMount } from '@vue/test-utils';
import CButton    from '@/components/atoms/button.vue';

describe('c-button', () => {
  const button = shallowMount(CButton, {
    slots: {
      default: "Mock button!"
    }
  });

  it('render component with correct class', () => {
    expect(button.classes()).toContain('c-button');
  });

  it('render correct content', () => {
    expect(button.text()).toEqual('Mock button!');
  });

  it('should match snapshot', () => {
    expect(button.html()).toMatchSnapshot();
  });
});
