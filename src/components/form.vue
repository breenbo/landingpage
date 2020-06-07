<template>
  <q-form
    @submit.prevent="onSubmit"
    class="q-gutter-md"
    :class="$q.screen.gt.sm ? 'q-my-xl' : 'q-mt-md q-mb-lg'"
  >
    <q-input
      v-model="formData.nickname"
      type="text"
      label="Nickname"
      color="secondary"
      class="text-h5"
      dark
      clearable
      lazy-rules
      :input-style="{ color: 'hsl(46,100%,90%)' }"
      :rules="[
        val => val.length >= 6 || 'Please choose nick with more than 6 chars.'
      ]"
    />
    <q-input
      v-model="formData.email"
      type="email"
      label="Email"
      color="secondary"
      class="text-h5"
      dark
      clearable
      lazy-rules
      :input-style="{ color: 'hsl(46,100%,90%)' }"
      :rules="[
        val => isValidEmailAdress(val) || 'Please enter a valid email adress'
      ]"
    />
    <div class="q-mt-sm">
      <q-btn
        type="submit"
        color="amber-13"
        text-color="primary"
        class="text-h5 text-weight-bold full-width"
        icon="check"
        rounded
        >{{ buttonText }}</q-btn
      >
    </div>
  </q-form>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component, Prop } from 'vue-property-decorator';
  // use store datas
  //}}}

  @Component({
    //declare components{{{1
    //}}}
    //filter{{{1
    //filters: {
    //niceDate(value: string): string {
    //return date.formatDate(value, 'Do MMMM');
    //}
    //// TIPS : filter must return something
    //}
    //}}}
  })
  export default class Form extends Vue {
    //props{{{1
    @Prop(String) readonly buttonText!: string;
    //}}}
    //datas{{{1
    formData = {
      nickname: '',
      email: ''
    };
    // get the store from TaskStore
    //store = getModule(TaskStore);
    // somedata:string = "some"
    //}}}
    //methods{{{1
    isValidEmailAdress(email: string): boolean {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }
    //submitForm(): void {
    //// send taskToSubmit to store
    //this.store.updateTasksAction({
    //id: this.id,
    //updates: this.taskToSubmit
    //});
    //}
    //}}}
    //computed{{{1
    // get data from store : computed method
    // don't use getter because no manipulation before get it
    // use getters to manipulate datas before getting them
    //get searchField(): string {
    //return this.store.searchField;
    //}
    //set searchField(term: string) {
    //this.store.setSearchFieldAction(term);
    //}
    //}}}
    //hooks{{{1
    //mounted() {
    //somefunction: () => {
    //return something
    //}
    //}
    //}}}
  }
</script>

<style scoped>
</style>
