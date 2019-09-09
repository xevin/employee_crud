<template>
  <button
    type="button"
    class="edit-button"
    @click="$emit('click')"
    title="Редактировать">
    <svg xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 22 22">
      <!-- eslint-disable-next-line -->
      <path color="#4d4d4d" d="M14.996 3L3.004 14.992H3v4.01h4.01v-.004L19.002 7.006 19 7.004l.002-.002-4-4-.002.002-.002-.002M13 6.414l2.59 2.59-7.588 7.588v-1.59h-2V13.412L13 6.414m-7.998 7.998v1.59h2V17.592l-.41.41h-1.59l-1-1v-1.59l1-1"/>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/buttons.scss";

.edit-button {
  @extend .icon-button;
}
</style>
