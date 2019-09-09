<template>
  <div class="input-list">
    <div
      class="input-group"
      v-for="(i, n) in valuesLength"
      :key="n"
    >
      <input class="form-input" v-model="valueList[n]">
      <button class="input-group-button" @click="deleteItem(n)">&times;</button>
    </div>

    <div class="input-group is-center">
      <button
        v-show="isNotFull"
        class="icon-button"
        @click="addItem()"
      >+</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'InputList',
  props: {
    valueList: { type: Array, default() { return [] }},
    max: { type: Number, default: 10 },
  },
  computed: {
    valuesLength() {
      return this.valueList.length;
    },
    isNotFull() {
      return this.valueList.length < this.max;
    }
  },
  methods: {
    addItem() {
      console.log('addItem', [...this.valueList, '']);
      if (this.isNotFull) {
        this.$emit('input', [...this.valueList, '']);
      }
    },
    deleteItem(n) {
      let newValueList = this.valueList;
      newValueList.splice(n, 1);
      this.$emit('input', newValueList);
    },
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/buttons.scss";

.input-group {
  width: 100%;
  box-sizing: border-box;
  display: inline-flex;
  padding: .1em 0;

  input {
    flex-grow: 1;

    &:focus {
      outline: none;
    }
  }
}

.input-group-button {
  border-radius: 4px;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
  cursor: pointer;
}

.form-input {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  border-right: 0;
}
</style>
