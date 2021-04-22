import { shallowMount, VueWrapper } from '@vue/test-utils';
import Popup                        from '@/components/molecules/popup/popup.vue';
import { clickOutside }             from '@/directives/click-outside';

describe('Popup', () => {
  let wrapper: VueWrapper<any>;
  beforeEach(() => {
   wrapper = shallowMount(Popup, {
      global: {
        directives: {
          clickOutside: clickOutside,
        },
      },
    });
  });

  it('render component with correct class', () => {
    expect(wrapper.classes()).toContain('popup');
  });

  it('show and hide popup on click trigger element', async () => {
    const [ trigger, content ] = wrapper.findAll('.popup__trigger, .popup__content');
    await trigger.trigger('click');
    expect(content.isVisible()).toBe(true);
    await trigger.trigger('click');
    expect(content.isVisible()).toBe(false);
  });

  it('not to hide popup on click popup element', async () => {
    const [ trigger, content ] = wrapper.findAll('.popup__trigger, .popup__content');
    await trigger.trigger('click');
    expect(content.isVisible()).toBe(true);
    await content.trigger('click');
    expect(content.isVisible()).toBe(true);
  });

  it('should match snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot();
  });
});
