<template>
  <q-layout view="hHr LpR lFf">
    <navbar />
    <q-page-container>
      <router-view></router-view>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component } from 'vue-property-decorator';
  import Navbar from 'components/navbar.vue';
  // use store datas
  //}}}

  //{{{1. props

  //const taskProp = Vue.extend({
  //props: ['task', 'id']
  //});
  //}}}

  @Component({
    //declare components{{{1
    components: { Navbar }
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
  export default class MainLayout extends Vue {
    //props{{{1
    //@Prop(String) readonly someProp!: string
    //}}}
    //methods{{{1
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
