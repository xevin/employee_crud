<template>
  <div class="employee-form">
    <div class="columns">
      <div class="column is-third">
        <div>
          <div class="form-row">
            <input
              id="lastname"
              class="form-input"
              type="text"
              placeholder="Фамилия"
              v-model="data.lastName">
          </div>

          <div class="form-row">
            <input
              id="firstname"
              class="form-input"
              type="text"
              placeholder="Имя"
              v-model="data.firstName">
          </div>

          <div class="form-row">
            <input
              id="middlename"
              class="form-input"
              type="text"
              placeholder="Отчество"
              v-model="data.middleName">
          </div>
        </div>
      </div>

      <div class="column is-third">
        <div class="form-row">
          <input
            id="position"
            class="form-input"
            type="text"
            placeholder="Должность"
            v-model="data.position"
          >
        </div>

        <div class="form-row">
          <label for="type">Тип записи</label>
          <select
            id="type"
            class="form-select"
            name="type"
            placeholder="Тип"
            v-model="data.type">
            <option
              v-for="(type, pkey) in $store.state.employeeTypes"
              :key="pkey">{{ type }}</option>
          </select>
        </div>
      </div>

      <div class="column is-third">
        <div class="form-phone form-row">
          <div>Номер телефона</div>
          <InputList
            :value-list="data.phones"
            @input="updatePhones"
            :max="MAX_EMAILS"
          ></InputList>
        </div>

        <div class="form-phone form-row">
          <label class="is-block is-left">Электронная почта</label>
          <InputList
            :value-list="data.emails"
            @input="updateEmails"
            :max="MAX_PHONES"
          ></InputList>
        </div>

      </div>

    </div>

    <div class="footer">
      <button
        type="button"
        class="big-button"
        @click="$emit('cancel')">Отмена</button>

      <button
        type="button"
        class="big-button button--primary"
        @click="$emit('save', data)">Сохранить</button>
    </div>
  </div>
</template>

<script>
import InputList from '@/components/InputList.vue';

const MAX_PHONES = 4;
const MAX_EMAILS = 4;

export default {
  components: {
    InputList,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {
          phones: [],
          emails: [],
        };
      },
    },
  },
  data() {
    return {
      MAX_PHONES,
      MAX_EMAILS,
    }
  },
  methods: {
    updatePhones(val) {
      this.data.phones = val;
    },
    updateEmails(val) {
      this.data.emails = val;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/buttons.scss";

.footer {
  padding-top: 1em;
}
</style>
