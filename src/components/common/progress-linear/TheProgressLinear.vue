<script lang="ts" setup>
import IconsSvg         from '@/assets/IconsSvg.vue'
import { watchEffect }  from 'vue'
interface Props {
    store   : any,
    width   : string,
    current : number
}
const props = defineProps<Props>()

//
// watchEffect(() => {
//     if (props.store.games[0].bestResult <= props.store.thresholdPoints) {
//         props.store.games[0].bestResult = props.current
//
//         if (props.store.games[0].bestResult > 0) {
//             props.store.games[0].isPlayed = true
//         }
//     } else if (props.store.games[0].bestResult > props.store.thresholdPoints) {
//         props.store.games[0].isPlayed = false
//     }
// })
</script>

<template>
    <div class="line"
         :style="{ maxWidth: width + 'px' }"
    >

        <div class="line__progress-wrap">
            <div class="line__progress"
                 :style="{ width: current * 100 / store.stages[store.stages.length - 1].thresholdPoints + '%' }"
            ></div>
        </div>
        <div class="line__slot"
             v-for="(item, index) in store.stages"
             :key="index"
        >
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
                <div v-if="index === 0"
                     class="line__value line__value--position"
                >0</div>
                <div class="line__value">
                    <span v-show="item.games[0].bestResult <= item.thresholdPoints">
                        {{ current }}
                        &nbsp;/&nbsp;
                    </span>
                    <span>{{ item.thresholdPoints }}</span>
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
    position: relative;
}

.line__value {
    position: absolute;
    bottom: -74%;
    right: 0;
    width: max-content;
    opacity: 50%;
    transform: translateX(50%);

    @include fontInter;
}

.line__value.line__value--position {
    left: 7px;
    transform: translateX(-50%);
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
    top: -70.8%;
    right: 0;
}
</style>
