<script setup lang="ts">
import { ref } from "vue";
import IconsSvg from "../assets/IconsSvg.vue"

defineProps<{ msg: string }>();

const count = ref(0);

// Mocks values
const S = ref(900)
const n = ref(6)
const p = ref(25)

// 25 50 100 300 500

const params = {
  _SumAll: String(S.value) + 'px',
}

const wS = ref(0)
const width = ref()

const result = () => {

  if (count.value <= 25 ) {
    p.value = 25 
  }
  if (count.value >= 25 && count.value <= 50) {
    p.value = 25 
  }
  if (count.value >= 50 && count.value <= 100) {
    p.value = 50 
  }
  if (count.value >= 100 && count.value <= 200) {
    p.value = 100 
  }
  if (count.value >= 500 && count.value <= 1000) {
    p.value = 100 
  }

  count.value += 1 
  wS.value += (S.value / n.value) / p.value * (100 / S.value)
  width.value = String(wS.value + '%')
}


</script>

<template>
  
  <div class="progress-linear-wrapper">

    <div class="mark-wrapper mark-wrapper--z-full mark-wrapper--flex">
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg name-svg="star" width-svg="18px" height-svg="17px"></IconsSvg>
        </span>
      </div>

      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg name-svg="star" width-svg="18px" height-svg="17px"></IconsSvg>
        </span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg name-svg="star" width-svg="18px" height-svg="17px"></IconsSvg>
        </span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg name-svg="star" width-svg="18px" height-svg="17px"></IconsSvg>
        </span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg name-svg="star" width-svg="18px" height-svg="17px"></IconsSvg>
        </span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg name-svg="cup" width-svg="46.05px" height-svg="24.11px"></IconsSvg>
        </span>
      </div>
    </div>

    <div class="mark-wrapper mark-wrapper--z-full mark-wrapper--flex">
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--bottom mark-value--w-10 mark-value--left">0</span>
        <span class="mark-value mark-value--bottom mark-value--w-60 mark-value--right">
          <span v-if="count <= 25">{{ count + ' /' }}</span>  25</span>
      </div>

      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--bottom mark-value--w-60 mark-value--right">
          <span v-if="count > 25 && count <= 50">{{ count + ' /' }}</span> 50</span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--bottom mark-value--w-60 mark-value--right">
          <span v-if="count > 50 && count <= 100">{{ count + ' /' }}</span> 100</span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--bottom mark-value--w-60 mark-value--right">
          <span v-if="count > 100 && count <= 200">{{ count + ' /' }}</span> 200</span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--bottom mark-value--w-60 mark-value--right">
          <span v-if="count > 200 && count <= 500">{{ count + ' /' }}</span> 500</span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--bottom mark-value--right">
          <span v-if="count > 500 && count <= 1000">{{ count + ' /' }}</span> 1000</span>
      </div>
    </div>

    <div class="progress-linear">
        <div class="progress-linear__inner">
          <div class="scale"></div>
        </div>
      </div>
  </div>

  <button style="margin-top: 70px;" @click="result">+</button>


  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/vuejs/language-tools" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.progress-linear {
  width: v-bind('params._SumAll');
  height: 40px;

  position: relative;
}

.progress-linear__inner {
  width: 100%;
  height: 100%;
  border-radius: 30px;
  background-color: #f4efefd9;

  position: relative;
  overflow-x: hidden;
}

.scale {
  position: absolute;

  background-color: #3300FF;
  width: v-bind('width');
  height: 100%;

}

  .mark-wrapper {
    position: absolute;

    width: 100%;
    height: 100%;

  }

  .mark-wrapper--z-full {
    z-index: 9999;
  }
  .mark-wrapper--flex {
    display: flex;
  }
  .mark {
    flex: 1 1 auto;

    height: 100%;
  }
  .mark--border:not(:last-child) {
    border-right: solid 0.2px rgba(179, 179, 179, 1);
  }
  .progress-linear-wrapper {
    position: relative;
  }
  .mark-value {
    position: absolute;
    text-align: center; 
    transform: translateX(50%);
  }
  
  .mark-value--bottom {
    bottom: -29px; 
  }

  .mark-value--top {
    top: -29px; 
  }

  .mark-wrapper .mark:last-child .mark-value{
    transform: translateX(0%);
  }
  .mark--relative {
    position: relative;
  }

  .mark-value--w-10 {
    width: 15px; 
  }
  .mark-value--w-60 {
    width: 71px; 
  }
  .mark-value--right {
    right: 0; 
  }
  .mark-value--left {
    left: 0; 
  }
</style>
