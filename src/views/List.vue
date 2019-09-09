<template>
  <div>
    <h2>Все сотрудники</h2>

    <ECard
      v-for="(person, id) in employees"
      :key="id"
      :id="id"
      :employee="person"
    />

    <div class="is-center">
      <button
        type="button"
        class="big-button button--primary"
        @click="$router.push('/add')">
        <strong>&plus;</strong>&nbsp;Добавить сотрудника
      </button>
    </div>
  </div>
</template>


<script>
import ECard from '@/components/Employee/Card.vue';

export default {
  components: {
    ECard,
  },
  computed: {
    employees() {
      return this.$store.state.employees;
    },
    sortByName() {
      return this.employees;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/buttons';
</style>
