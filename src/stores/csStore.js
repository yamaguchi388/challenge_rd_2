import { defineStore } from 'pinia';

export const useCsStore = defineStore('csStore', {
    state: () => ({
        customerSuccess: [],
        clients: [],
        csAway: []
    }),
    actions: {
        balanceCS() {
            const availableCSs = this.customerSuccess
                .filter(cs => !this.csAway.includes(cs.id))
                .sort((a, b) => a.score - b.score);

            let csClientCount = availableCSs.map(cs => ({ id: cs.id, count: 0 }));


            this.clients.forEach(client => {
                const cs = availableCSs.find(cs => cs.score >= client.score);
                if (cs) {
                    const csIndex = csClientCount.findIndex(item => item.id === cs.id);
                    csClientCount[csIndex].count += 1;
                }
            });

            const maxCount = Math.max(...csClientCount.map(cs => cs.count));
            const csWithMaxClients = csClientCount.filter(cs => cs.count === maxCount);

            if (csWithMaxClients.length > 1) {
                return 0;
            }

            return csWithMaxClients[0] ? csWithMaxClients[0].id : 0;
        },
        setCustomerSuccess(csList) {
            this.customerSuccess = csList;
        },
        setClients(clientList) {
            this.clients = clientList;
        },
        setCsAway(csAwayList) {
            this.csAway = csAwayList;
        }
    }
});