<script lang="ts" setup>
import IconsSvg from '@/assets/IconsSvg.vue'
interface Props {
    store   : object,
    width   : string,
    progress: number
}

const props = defineProps<Props>()
</script>

<template>
    <div class="line" :style="{ maxWidth: props.width + 'px' }">
        <div class="line__progress-wrap">
            <div class="line__progress" :style="{ width: props.progress + '%' }"></div>
        </div>
        <div v-for="(item, index) in store.stages" :key="index" class="line__slot">
            <div class="line__inner">
                <icons-svg v-if="store.stages.length - 1 !== index"
                           style="transform: translateX(50%);"
                           class="line__icon"
                           name-svg="star"
                           width-svg="18px"
                           height-svg="16.94px"
                />
                <icons-svg v-if="store.stages.length - 1 === index"
                           style="transform: translateY(-9%);"
                           class="line__icon"
                           name-svg="cup"
                           width-svg="48px"
                           height-svg="25px"
                />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.line {
    display: flex;
    width: 100%;
    height: 40px;
    position: relative;
}

.line__progress-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    overflow-x: hidden;
    top: 0;
    left: 0;
    right: 0;
    background: $color-secondary;
}

.line__progress {
    height: inherit;
    background: $color-primary;
    max-width: 100%;
    min-width: 0%;
}

.line__slot {
    flex: 1 1 auto;
    height: inherit;
    position: relative;
    z-index: 2;
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
    .line__inner  {
        border-top-right-radius: 20px;
        border-bottom-right-radius: 20px;
        overflow-x: hidden;
    }
}

.line__slot:not(:last-child) {
    border-right: 1px solid $color-primary-dark;
}

.line__icon {
    color: $color-primary;
    position: absolute;
    top: -1.8em;
    right: 0;
}
</style>
