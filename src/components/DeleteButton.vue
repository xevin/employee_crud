<template>
  <button
    class="delete-button"
    @click="$emit('click')"
    title="Удалить"
  >
    <svg xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 1000 1000">
      <!-- eslint-disable-next-line -->
      <path d="M745,440.6V181L573.9,10H10v980h735v-1.8c137.8-15.3,244.9-132,245-273.8C989.9,572.5,882.8,455.8,745,440.6z M561.2,83.9l109.9,109.9H561.2V83.9z M71.3,928.8V71.2H500V255h183.8v185.6c-137.8,15.3-245,131.9-245,273.8c0,86.6,40.1,163.9,102.6,214.4H71.3z M714.4,925.2c-116.4-0.3-210.6-94.4-210.9-210.8C503.8,598,598,503.8,714.4,503.5c116.3,0.3,210.5,94.4,210.8,210.9C924.9,830.7,830.7,924.9,714.4,925.2z"/>
      <!-- eslint-disable-next-line -->
      <polygon points="775.6,591.9 714.4,653.1 653.1,591.9 591.9,653.1 653.1,714.4 591.9,775.6 653.1,836.9 714.4,775.6 775.6,836.9 836.9,775.6 775.6,714.4 836.9,653.1 "/>
    </svg>
  </button>
</template>


<style lang="scss" scoped>
@import "@/assets/buttons.scss";

.delete-button {
  @extend .icon-button;
}
</style>
