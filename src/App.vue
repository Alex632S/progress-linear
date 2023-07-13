<script lang="ts" setup>
import { ref }           from 'vue'
import { useMocksStore } from '@/stores/useMocksStore.js'
import TheProgressLinear from '@/components/common/progress-linear/TheProgressLinear.vue'
import TheInput          from '@/components/common/input/TheInput.vue'

const mocks = useMocksStore()
const currentValue = ref(0)
const status = ref(0)

let widthBlock = mocks.stages[mocks.stages.length - 1].thresholdPoints / mocks.stages.length;
let progress = 0;
let step;

function changeValue(event) {
    function calculation(status, target, key) {
        progress = Math.floor(status) < Math.floor(target) ? progress + step : progress - step;

    }

    if (event >= 0 && event <= mocks.stages[0].thresholdPoints) {
        step = widthBlock / mocks.stages[0].thresholdPoints;
        calculation(status.value, event, 0);
    }

    else if (event > mocks.stages[0].thresholdPoints && event <= mocks.stages[1].thresholdPoints) {
        step = widthBlock / (mocks.stages[1].thresholdPoints - mocks.stages[0].thresholdPoints);
        calculation(status.value, event, 1);
    }

    else if (event > mocks.stages[1].thresholdPoints && event <= mocks.stages[2].thresholdPoints) {
        step = widthBlock / mocks.stages[1].thresholdPoints;
        calculation(status.value, event, 2);
    }

    else if (event > mocks.stages[2].thresholdPoints && event <= mocks.stages[3].thresholdPoints) {
        step = widthBlock / mocks.stages[2].thresholdPoints;
        calculation(status.value, event, 3);
    }

    else if (event > mocks.stages[3].thresholdPoints && event <= mocks.stages[4].thresholdPoints) {
        step = widthBlock / (mocks.stages[4].thresholdPoints - mocks.stages[3].thresholdPoints);
        calculation(status.value, event, 4);
    }

    else if (event > mocks.stages[4].thresholdPoints && event <= mocks.stages[5].thresholdPoints) {
        step = widthBlock / (mocks.stages[5].thresholdPoints - mocks.stages[4].thresholdPoints);
        calculation(status.value, event, 5);
    }

    currentValue.value = progress;
    status.value = event;
}
</script>

<template>
    <div class="wrapper">
        <h1 class="title">Progress linear</h1>
        <the-progress-linear width="876" :store="mocks" :current="currentValue" :valueInput="status"/>
        <the-input @update:value="changeValue" :store="mocks" />
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    padding: 0 10px 0 10px;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.title {
    margin-bottom: 100px;
    text-align: center;
    @include fontInter;
    font-size: 30px;
}
</style>