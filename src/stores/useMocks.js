import { defineStore } from 'pinia';
export const useMocks = defineStore('testStore', {
    state: () => ({
        test: [
            {
                name: 'hello'
            },
            {
                name: 'bye'
            },
            {
                name: 'welcome'
            },
        ]
    }),
});
