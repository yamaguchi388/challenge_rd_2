import { createPinia, setActivePinia } from 'pinia';
import { useCsStore } from './path/to/your/csStore';

describe('csStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia());
    });

    it('correctly balances CSs and clients', () => {
        const csStore = useCsStore();
        csStore.setCustomerSuccess([{ id: 1, score: 50 }, { id: 2, score: 100 }]);
        csStore.setClients([{ id: 1, score: 20 }, { id: 2, score: 30 }, { id: 3, score: 35 }, { id: 4, score: 40 }, { id: 5, score: 60 }, { id: 6, score: 80 }]);
        csStore.setCsAway([]);

        const result = csStore.balanceCS();
        expect(result).toBe(1);
    });
});