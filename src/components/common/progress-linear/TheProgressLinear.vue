<script lang="ts" setup>
import IconsSvg from '@/assets/IconsSvg.vue'
interface Props {
    store   : object,
    width   : string,
    progress: string,
    icon    : object
}

const props = defineProps<Props>()
</script>

<template>
    <div class="line" :style="{ maxWidth: props.width + 'px' }">
        <div v-for="(item, index) in store.stages" :key="index" class="line__slot">
            <div class="line__inner">
                <icons-svg class="line__icon" name-svg="star" width-svg="24px" height-svg="22px" />
                <div class="line__progress" :style="{ width: props.progress + '%' }">
                    {{ item.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.line {
    display: flex;
    width: 100%;
    height: 40px;
}

.line__slot {
    flex: 1 1 auto;
    height: inherit;
    position: relative;
}

.line__inner {
    width: 100%;
    height: inherit;
}

.line__slot:first-child {
    .line__inner {
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        overflow-x: hidden;
    }
}

.line__slot:last-child {
    .line__inner {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        overflow-x: hidden;
    }
}

.line__slot:not(:last-child) {
    border-right: 1px solid $color-primary-gray;
    background: $color-secondary;
}

.line__icon {
    color: $color-primary;
    position: absolute;
    top: -1.8em;
    right: 0;
    transform: translateX(50%);
}

.line__progress {
    height: inherit;
    background: $color-primary;
}
</style>
