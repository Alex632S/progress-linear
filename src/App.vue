<script lang="ts" setup>
import { ref }           from 'vue'
import { useMocksStore } from '@/stores/useMocksStore.js'
import TheProgressLinear from '@/components/common/progress-linear/TheProgressLinear.vue'
import TheInput          from '@/components/common/input/TheInput.vue'

const mocks = useMocksStore()

const currentValue = ref(0)
function changeValue(event) {
    currentValue.value = Number(event.target.value)
}

</script>
<template>
    <div class="wrapper">
        <the-progress-linear width="876" :store="mocks" :current="currentValue"/>
        <the-input @change="changeValue" :store="mocks" />
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
</style>