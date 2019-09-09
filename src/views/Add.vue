<template>
  <div class="add-employee">
    <h2>Новый сотрудник</h2>

    <div class="add-employee__content">
      <EForm @save="save" @cancel="$router.push('/')"></EForm>
    </div>
  </div>
</template>

<script>
import EForm from '@/components/Employee/Form.vue';


export default {
  components: {
    EForm,
  },
  methods: {
    save(data) {
      this.$store.commit('addEmployee', data);
      this.$router.push('/');
    },
  },
};
</script>
