<script lang="ts" setup>
import TheProgressLinear from '@/components/common/progress-linear/TheProgressLinear.vue'
import {useMocksStore}   from '@/stores/useMocksStore.js'
const mocks = useMocksStore()

</script>
<template>
    <div class="wrapper">
        <the-progress-linear width="876" progress="20" :store="mocks"/>
    </div>
</template>

<style lang="scss" scoped>
.wrapper {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>