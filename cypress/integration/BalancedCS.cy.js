import { createPinia } from 'pinia';
import { useCsStore } from '../../src/stores/csStore';
import BalancedCS from '../../src/components/BalancedCS.vue';


describe('<BalancedCS />', () => {
    let pinia;

    beforeEach(() => {
        pinia = createPinia();
        cy.mount(BalancedCS, {
            global: {
                plugins: [pinia]
            }
        });
    });

    it('correctly balances CSs and clients', () => {

        const csStore = useCsStore(pinia);
        csStore.setCustomerSuccess([{ id: 1, score: 50 }, { id: 2, score: 100 }]);
        csStore.setClients([{ id: 1, score: 20 }, { id: 2, score: 60 }]);
        csStore.setCsAway([]);

        csStore.balanceCS();

        cy.wait(500);
        expect(csStore.balancedCS).to.equal(1);
    });
});