<script setup lang="ts">
import { ref } from "vue";
import IconsSvg from "../assets/IconsSvg.vue";

defineProps<{ msg: string }>();

const stages = [
    {
      name: "Этап первый",
      id: 1,
      thresholdPoints: 25,
      games: [
        {
          name: "Игра 1.1",
          bestResult: 0,
          isPlayed: false
        }
      ]
    },
    {
      name: "Этап второй",
      id: 2,
      thresholdPoints: 50,
      games: [
        {
          name: "Игра 2.1",
          bestResult: 0,
          isPlayed: false
        }
      ]
    },
    {
      id: 3,
      name: "Этап третий",
      thresholdPoints: 100,
      games: [
        {
          name: "Игра 3.1",
          bestResult: 0,
          isPlayed: false
        }
      ]
    },
    {
      id: 4,
      name: "Этап четвертый",
      thresholdPoints: 200,
      games: [
        {
          name: "Игра 4.1",
          bestResult: 0,
          isPlayed: false
        }
      ]
    },
    {
      id: 5,
      name: "Этап пятый",
      thresholdPoints: 500,
      games: [
        {
          name: "Игра 5.1",
          bestResult: 0,
          isPlayed: false
        }
      ]
    },
    {
      id: 6,
      name: "Этап шестой",
      thresholdPoints: 1000,
      games: [
        {
          name: "Игра 6.1",
          bestResult: 0,
          isPlayed: false
        },
        {
          name: "Игра 6.2",
          bestResult: 0,
          isPlayed: false
        }
      ]
    }
  ]

const count = ref(0);

const S = ref(900);
const n = ref<number>(stages.length);
const p = ref(25);

const params = {
  _SumAll: String(S.value) + "px",
};

const wS = ref(0);
const width = ref();

const Area = (
  _mark: string,
  _value: number,
  _pre: number,
  _end: number,
): void => {
  if (
    (count.value === _pre && _mark === "plus") ||
    (count.value > _pre && count.value < _end) ||
    (count.value === _end && _mark === "minus")
  ) {
    p.value = _value;
  }
};


const result = (mark: string) => {
 
  for(let i: number = 0; i < stages.length; i++) {
    let pre = i - 1 <= 0 ? 0 : i - 1
    Area(
      mark, 
      stages[pre].thresholdPoints, 
      stages[i].thresholdPoints - stages[pre].thresholdPoints, 
      stages[i].thresholdPoints
    )
  }

  if (mark === "plus" && count.value < stages[stages.length - 1].thresholdPoints) {
    count.value += 1;
    wS.value += (S.value / n.value / p.value) * (100 / S.value);
  }

  if (mark === "minus" && count.value > 0) {
    count.value -= 1;
    wS.value -= (S.value / n.value / p.value) * (100 / S.value);
  }

  width.value = String(wS.value + "%");
};
</script>

<template>
  <div class="progress-linear-wrapper">
    <div class="mark-wrapper mark-wrapper--z-full mark-wrapper--flex">
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg
            :style="{ color: count >= 25 ? '#3300FF' : 'currentColor' }"
            name-svg="star"
            width-svg="18px"
            height-svg="17px"
          ></IconsSvg>
        </span>
      </div>

      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg
            :style="{ color: count >= 50 ? '#3300FF' : 'currentColor' }"
            name-svg="star"
            width-svg="18px"
            height-svg="17px"
          ></IconsSvg>
        </span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg
            :style="{ color: count >= 100 ? '#3300FF' : 'currentColor' }"
            name-svg="star"
            width-svg="18px"
            height-svg="17px"
          ></IconsSvg>
        </span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg
            :style="{ color: count >= 200 ? '#3300FF' : 'currentColor' }"
            name-svg="star"
            width-svg="18px"
            height-svg="17px"
          ></IconsSvg>
        </span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg
            :style="{ color: count >= 500 ? '#3300FF' : 'currentColor' }"
            name-svg="star"
            width-svg="18px"
            height-svg="17px"
          ></IconsSvg>
        </span>
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg
            :style="{ color: count >= 1000 ? '#3300FF' : 'currentColor' }"
            name-svg="cup"
            width-svg="46.05px"
            height-svg="24.11px"
          ></IconsSvg>
        </span>
      </div>
    </div>

    <div class="mark-wrapper mark-wrapper--z-full mark-wrapper--flex">
      <div class="mark mark--relative mark--border">
        <span
          class="mark-value mark-value--bottom mark-value--w-10 mark-value--left"
          >0</span
        >
        <span
          class="mark-value mark-value--bottom mark-value--w-60 mark-value--right"
        >
          <span v-if="count <= 25">{{ count + " /" }}</span> 25</span
        >
      </div>

      <div class="mark mark--relative mark--border">
        <span
          class="mark-value mark-value--bottom mark-value--w-60 mark-value--right"
        >
          <span v-if="count > 25 && count <= 50">{{ count + " /" }}</span>
          50</span
        >
      </div>
      <div class="mark mark--relative mark--border">
        <span
          class="mark-value mark-value--bottom mark-value--w-60 mark-value--right"
        >
          <span v-if="count > 50 && count <= 100">{{ count + " /" }}</span>
          100</span
        >
      </div>
      <div class="mark mark--relative mark--border">
        <span
          class="mark-value mark-value--bottom mark-value--w-60 mark-value--right"
        >
          <span v-if="count > 100 && count <= 200">{{ count + " /" }}</span>
          200</span
        >
      </div>
      <div class="mark mark--relative mark--border">
        <span
          class="mark-value mark-value--bottom mark-value--w-60 mark-value--right"
        >
          <span v-if="count > 200 && count <= 500">{{ count + " /" }}</span>
          500</span
        >
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--bottom mark-value--right">
          <span v-if="count > 500 && count < 1000">{{ count + " /" }}</span>
          1000</span
        >
      </div>
    </div>

    <div class="progress-linear">
      <div class="progress-linear__inner">
        <div class="scale"></div>
      </div>
    </div>
  </div>

  <div class="mark-wrapper--flex">
    <button style="margin-top: 70px" @click="result('minus')">-</button>
    <button style="margin-top: 70px" @click="result('plus')">+</button>
  </div>

  <div class="card">
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.progress-linear {
  width: v-bind("params._SumAll");
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

  background-color: #3300ff;
  width: v-bind("width");
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

.mark-wrapper .mark:last-child .mark-value {
  transform: translateX(0%);
}
.mark--relative {
  position: relative;
}

.mark-value--w-10 {
  width: 15px;
}
.mark-value--w-60 {
  width: 80px;
}
.mark-value--right {
  right: 0;
}
.mark-value--left {
  left: 0;
}
</style>
