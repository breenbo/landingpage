<template>
  <div class="bg-primary text-white q-mt-xl">
    <div class="row q-gutter-md q-mx-md">
      <div class="col text-caption q-ma-lg">
        Sit alias corrupti corporis consequatur at. Ducimus exercitationem
        delectus animi aspernatur eius commodi, soluta Animi minima placeat est
        iste vitae animi delectus Est nulla et nihil maiores porro perferendis
        Nam!
      </div>
      <div class="col text-caption q-ma-lg">
        Sit alias corrupti corporis consequatur at. Ducimus exercitationem
        delectus animi aspernatur eius commodi, soluta Animi minima placeat est
        iste vitae animi delectus Est nulla et nihil maiores porro perferendis
        Nam!
      </div>
      <div class="col text-caption q-ma-lg">
        Sit alias corrupti corporis consequatur at. Ducimus exercitationem
        delectus animi aspernatur eius commodi, soluta Animi minima placeat est
        iste vitae animi delectus Est nulla et nihil maiores porro perferendis
        Nam!
      </div>
      <div class="col text-caption q-ma-lg">
        Sit alias corrupti corporis consequatur at. Ducimus exercitationem
        delectus animi aspernatur eius commodi, soluta Animi minima placeat est
        iste vitae animi delectus Est nulla et nihil maiores porro perferendis
        Nam!
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component } from 'vue-property-decorator';
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
  export default class Footer extends Vue {
    //props{{{1
    //@Prop(String) readonly someProp!: string
    //}}}
    //datas{{{1
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
