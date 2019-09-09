<template>
  <div class="edit-page">
    <h2>Изменить данные</h2>

    <div class="form">
      <EForm :data="getEmployee()" @save="save" @cancel="$router.push('/')" />
    </div>
  </div>
</template>

<script>
import EForm from '@/components/Employee/Form.vue';

export default {
  components: {
    EForm,
  },
  computed: {
    employeeId() {
      return this.$route.params.id;
    },
  },
  methods: {
    getEmployee() {
      return this.$store.state.employees[this.employeeId];
    },
    save(data) {
      this.$store.commit('saveEmployee', { id: this.employeeId, data });
      this.$router.push('/');
    },
  },
};
</script>
