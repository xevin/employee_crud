<template>
  <div class="employee-card">
    <div class="columns">
      <div class="column employee-name">
        <div>
          <div class="row"><strong>{{ employee.lastName }}</strong></div>
          <div>
            {{ employee.firstName }} {{ employee.middleName }}
          </div>

          <br>

          <div>
            <em>{{ employee.position }}</em>
          </div>
        </div>
      </div>

      <div class="column">
        <div
          v-for="phone in employee.phones"
          :key="phone">
          {{ phone }}
        </div>
      </div>

      <div class="column">
        <div
          v-for="email in employee.emails"
          :key="email">
          {{ email }}
        </div>
      </div>

      <div class="column">
        <EditButton @click="editEmployee()" />
        <DeleteButton @click="deleteEmployee()" />
      </div>
    </div>
  </div>
</template>


<script>
import EditButton from '@/components/EditButton.vue';
import DeleteButton from '@/components/DeleteButton.vue';

export default {
  components: {
    EditButton,
    DeleteButton,
  },
  props: {
    id: { type: String },
    employee: {
      type: Object,
    },
  },
  methods: {
    editEmployee() {
      this.$router.push(`/edit/${this.id}`);
    },
    deleteEmployee() {
      const msg = `Удалить сотрудника '${this.employee.lastName} ${this.employee.firstName}'?`;
      /* eslint-disable-next-line */
      if(confirm(msg)) {
        this.$store.commit('deleteEmployee', this.id);
      }
    },
  },
};
</script>


<style lang="scss" scoped>
.employee-card {
  padding: 1em;
  border: 1px solid #ccc;
  margin-bottom: .5em;

  &:nth-child(odd) {
    background-color: #eee;
    border-color: #ccc;
  }
}
.employee-name {
  max-width: 260px;
  width: 260px;
}
.row {
  text-align: left;
}
.column {
  text-align: left;
}
.column:first-child {
  text-align: left;
}
.column:last-child {
  text-align: right;
}
</style>
