<script setup lang="ts">
import { ref } from "vue";
import IconsSvg from "../assets/IconsSvg.vue";

const props = defineProps({
  widthFull: String,
});

const stages = [
  {
    name: "Этап первый",
    id: 1,
    thresholdPoints: 25,
    games: [
      {
        name: "Игра 1.1",
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    name: "Этап второй",
    id: 2,
    thresholdPoints: 50,
    games: [
      {
        name: "Игра 2.1",
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    id: 3,
    name: "Этап третий",
    thresholdPoints: 100,
    games: [
      {
        name: "Игра 3.1",
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    id: 4,
    name: "Этап четвертый",
    thresholdPoints: 200,
    games: [
      {
        name: "Игра 4.1",
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    id: 5,
    name: "Этап пятый",
    thresholdPoints: 500,
    games: [
      {
        name: "Игра 5.1",
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
  {
    id: 6,
    name: "Этап шестой",
    thresholdPoints: 1000,
    games: [
      {
        name: "Игра 6.1",
        bestResult: 0,
        isPlayed: false,
      },
      {
        name: "Игра 6.2",
        bestResult: 0,
        isPlayed: false,
      },
    ],
  },
];

const count = ref(0);

const S = ref<number>(Number(props.widthFull));
const n = ref<number>(stages.length);
const p = ref<number>(stages[0].thresholdPoints);

const params = {
  _SumAll: String(S.value) + "px",
};

const wS = ref(0);
const width = ref();

const Area = (_mark: string): void => {
  for (let i: number = 0; i < stages.length; i++) {
    let pre = i === 0 ? 0 : i - 1;
    if (
      (count.value === stages[pre].thresholdPoints && _mark === "plus") ||
      (count.value > stages[pre].thresholdPoints &&
        count.value < stages[i].thresholdPoints) ||
      (count.value === stages[i].thresholdPoints && _mark === "minus")
    ) {
      p.value =
        stages[i].thresholdPoints - stages[pre].thresholdPoints === 0
          ? stages[0].thresholdPoints
          : stages[i].thresholdPoints - stages[pre].thresholdPoints;
    }
  }
};

const result = (mark: string) => {
  Area(mark);

  if (
    mark === "plus" &&
    count.value < stages[stages.length - 1].thresholdPoints
  ) {
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
      <div v-for="(stage, index) in stages" :key="stage.id" class="mark mark--relative mark--border">
        <span class="mark-value mark-value--top mark-value--right">
          <IconsSvg
            :style="{ color: count >= stage.thresholdPoints ? '#f23b3b' : 'currentColor', strokeWidth: count >= stage.thresholdPoints ? '1.5' : '1'}"
            class="icon-svg"
            :name-svg="index === stages.length - 1 ? 'cup' : 'star'"
            :width-svg="index === stages.length - 1 ? '46.05px' : '18px'"
            :height-svg="index === stages.length - 1 ? '24.11px' : '17px'"
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
          <span v-if="count <= 25">{{ count + " /" }}</span>
          {{ stages[0].thresholdPoints }}</span
        >
      </div>

      <div class="mark mark--relative mark--border">
        <span
          class="mark-value mark-value--bottom mark-value--w-60 mark-value--right"
        >
          <span v-if="count > 25 && count <= 50">{{ count + " /" }}</span>
          {{ stages[1].thresholdPoints }}</span
        >
      </div>
      <div class="mark mark--relative mark--border">
        <span
          class="mark-value mark-value--bottom mark-value--w-60 mark-value--right"
        >
          <span v-if="count > 50 && count <= 100">{{ count + " /" }}</span>
          {{ stages[2].thresholdPoints }}</span
        >
      </div>
      <div class="mark mark--relative mark--border">
        <span
          class="mark-value mark-value--bottom mark-value--w-60 mark-value--right"
        >
          <span v-if="count > 100 && count <= 200">{{ count + " /" }}</span>
          {{ stages[3].thresholdPoints }}</span
        >
      </div>
      <div class="mark mark--relative mark--border">
        <span
          class="mark-value mark-value--bottom mark-value--w-60 mark-value--right"
        >
          <span v-if="count > 200 && count <= 500">{{ count + " /" }}</span>
          {{ stages[4].thresholdPoints }}</span
        >
      </div>
      <div class="mark mark--relative mark--border">
        <span class="mark-value mark-value--bottom mark-value--right">
          <span v-if="count > 500 && count < 1000">{{ count + " /" }}</span>
          {{ stages[5].thresholdPoints }}</span
        >
      </div>
    </div>

    <div class="progress-linear">
      <div class="progress-linear__inner">
        <div class="scale"></div>
      </div>
    </div>
  </div>

  <div class="mark-wrapper--flex" style="justify-content:center; gap: 10px;">
    <button style="margin-top: 70px" @click="result('minus')">-</button>
    <button style="margin-top: 70px" @click="result('plus')">+</button>
  </div>

  <div class="card">
    <p>
      Progress linear
    </p>
  </div>
</template>

<style scoped>

.read-the-docs {
  color: #888;
}

.progress-linear {
  width: v-bind("params._SumAll");
  height: 35px;

  position: relative;
}

.progress-linear__inner {
  width: 100%;
  height: 100%;
  border-radius: 30px;

  border: 1px solid rgba(255, 255, 255, 0.6);
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) -3.62%,
    rgba(255, 255, 255, 0.2) 100%
  );
  backdrop-filter: blur(15px);
  box-shadow:
    0px 30px 30px 0px rgba(0, 0, 0, 0.4),
    0px 0px 5px 0px #cf7474 inset,
    0px -1px 8px 0px #9375b6 inset;

  position: relative;
  overflow-x: hidden;
}

.scale {
  position: absolute;

  width: v-bind("width");
  height: 100%;

  border-radius: 5px;
  background: linear-gradient(
      180deg,
      #f23b3b,
      rgba(254, 200, 241, 0) 26.73%
    ),
    radial-gradient(137.13% 253.39% at 76.68% 66.67%, #602ea6 0%, #f23b3b 100%);
  background-blend-mode: overlay, normal;
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
