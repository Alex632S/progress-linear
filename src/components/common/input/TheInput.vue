<script lang="ts" setup>
interface Props {
    store   : object,
}
defineProps<Props>()
defineEmits(['update'])
</script>

<template>
    <div class="counter">
        <input class="counter__input"
               @input="$emit('update', $event.target.value)"
               type="number"
               :max="store.stages[store.stages.length - 1].thresholdPoints"
               min="0"
        >
    </div>
</template>

<style lang="scss" scoped>
.counter {
  margin-top: 70px;
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
</style>
