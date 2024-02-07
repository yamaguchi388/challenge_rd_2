import { mount } from '@vue/test-utils';
import { createPinia, setActivePinia } from 'pinia';
import BalancedCS from './path/to/BalancedCS.vue';
import { useCsStore } from './path/to/your/csStore';

jest.mock('./path/to/your/csStore');

describe('BalancedCS.vue', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
        const csStore = useCsStore();

        csStore.$state = { balancedCS: 1 };
    });

    it('displays the CS with the most clients', async() => {
        const wrapper = mount(BalancedCS, {
            global: {
                plugins: [createPinia()]
            }
        });
        await wrapper.vm.$nextTick();
        expect(wrapper.text()).toContain('O CS com mais clientes é o ID: 1');
    });
});