<script setup lang="ts">
import { ref } from "vue";

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<template>
  
  <div class="progress-linear">
    <div style="height:20px; top: 41px;" class="mark-wrapper mark-wrapper--flex">
      <div class="mark mark-wrapper--flex">
        <div style="text-align:left;" class="mark">0</div>
        <div class="mark text-right">20 / 25</div>
      </div>
      
      <div class="mark text-right">50</div>
      <div class="mark text-right">100</div>

      <div class="mark text-right">200</div>

      <div class="mark text-right">500</div>
      <div class="mark text-right">1000</div>
    </div>
    
    <div class="progress-linear__inner">
      <div class="scale"></div>

      <div class="mark-wrapper mark-wrapper--flex">
        <div class="mark mark--border"></div>
        <div class="mark mark--border"></div>
        <div class="mark mark--border"></div>
        <div class="mark mark--border"></div>
        <div class="mark mark--border"></div>
        <div class="mark mark--border"></div>
      </div>
      
    </div>
  </div>


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
  width: 900px;
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
  width: 43%;
  height: 100%;

}

  .mark-wrapper {
    position: absolute;

    width: 100%;
    height: 100%;

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


  .text-right {
    text-align:right;
  }
</style>
