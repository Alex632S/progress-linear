<script lang="ts" setup>
import {ref} from 'vue'
interface Props {
    store   : object,
}

defineProps<Props>()
const emit = defineEmits(['update:value'])

const valueInput = ref(0)

function increment() {
    if(valueInput.value < 1000) valueInput.value += 1
    emit('update:value', valueInput.value)
}
function decrement() {
    if(valueInput.value > 0) valueInput.value -= 1
    emit('update:value', valueInput.value)
}

</script>

<template>
    <div class="counter">
        <input class="counter__input"
               type="number"
               :max="store.stages[store.stages.length - 1].thresholdPoints"
               min="0"
               :value="valueInput"
               style="user-select: none; opacity: 0;"
        >
        <div class="counter__inner">
            <div class="counter__arrow" @click="decrement">
                <span>-</span>
            </div>
            <div class="counter__arrow" @click="increment">
                <span>+</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.counter {
    margin-top: 70px;
    position: relative;
}

.counter__input[type=number] {
    @include fontInter;

    width: max-content;
    text-align: center;
    border-radius: 20px;
    padding: 0.5em;
    appearance: textfield;
    border: .2em solid $color-primary;
    color: $color-primary-dark-2;
    outline: $color-primary;
    font-size: 16px;
}

.counter__arrow {
    width: 50px;
    height: 50px;
    background: white;
    box-shadow: 0px 4px 34px -4px rgba(34, 60, 80, 0.25);
    border-radius: 50%;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    cursor: pointer;
    user-select: none;
}
.counter__arrow:active {
    transform: scale(.95);
    box-shadow: 0px 4px 34px -4px rgba(34, 60, 80, 0.25);
}
.counter__inner {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>
