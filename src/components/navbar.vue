<template>
  <q-header>
    <q-toolbar class="primary text-grey-2">
      <q-toolbar-title>
        <q-icon name="graphic_eq" class="text-h3" />
        {{ title }}
      </q-toolbar-title>
      <div>
        <q-btn
          v-for="button in buttons"
          :key="button.id"
          flat
          :label="button.name"
          :to="button.route"
        />
      </div>
      <q-space />
      <div class="q-ml-lg">
        <q-btn flat label="login" />
        <q-btn rounded outline label="signup" />
      </div>
    </q-toolbar>
  </q-header>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component } from 'vue-property-decorator';
  import { Button } from 'components/models';
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
  export default class Navbar extends Vue {
    //props{{{1
    //@Prop(String) readonly someProp!: string
    //}}}
    //datas{{{1
    title = 'Title';
    logo = 'SVGlogo';
    buttons: Button = {
      home: { name: 'home', route: '/' },
      products: { name: 'products', route: '/products' },
      pricing: { name: 'contact', route: '/contact' },
      aboutUs: { name: 'about us', route: '/about' }
    };
    // get the store from TaskStore
    //store = getModule(TaskStore);
    // somedata:string = "some"
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
