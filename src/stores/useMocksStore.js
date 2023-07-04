import { defineStore } from 'pinia';
export const useMocksStore = defineStore('mocks', {
    state: () => ({
        stages: [
            {
                name: 'lvl-1',
                id: 1,
                thresholdPoints: 25,
                games: [
                    {
                        name: 'Game 1.1',
                        bestResult: 0,
                        isPlayed: false
                    }
                ]
            },
            {
                name: 'lvl-2',
                id: 2,
                thresholdPoints: 50,
                games: [
                    {
                        name: 'Game 2.1',
                        bestResult: 0,
                        isPlayed: false
                    }
                ]
            },
            {
                name: 'lvl-3',
                id: 3,
                thresholdPoints: 100,
                games: [
                    {
                        name: 'Game 3.1',
                        bestResult: 0,
                        isPlayed: false
                    }
                ]
            },
             {
                name: 'lvl-4',
                id: 4,
                thresholdPoints: 200,
                games: [
                    {
                        name: 'Game 4.1',
                        bestResult: 0,
                        isPlayed: false
                    }
                ]
            },
             {
                name: 'lvl-5',
                id: 5,
                thresholdPoints: 500,
                games: [
                    {
                        name: 'Game 5.1',
                        bestResult: 0,
                        isPlayed: false
                    }
                ]
            },
             {
                name: 'lvl-6',
                id: 6,
                thresholdPoints: 1000,
                games: [
                    {
                        name: 'Game 6.1',
                        bestResult: 0,
                        isPlayed: false
                    },
                    {
                        name: 'Game 6.2',
                        bestResult: 0,
                        isPlayed: false
                    }
                ]
            },
        ]
    }),
});
