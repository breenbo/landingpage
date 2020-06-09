<template>
  <div
    class="bg-primary text-white"
    :class="$q.screen.gt.xs ? 'q-mt-xl' : 'q-mt-sm'"
  >
    <div class="row" :class="$q.screen.gt.xs ? 'q-mt-xl' : 'q-mt-sm'">
      <socials
        class="col-12 col-sm-5 col-md-3 col-lg-2"
        :class="$q.screen.gt.xs ? 'q-my-lg' : 'q-mt-md'"
      />
      <div class="col-12 col-sm-6 col-md-8 col-lg-3 text-caption q-pa-md">
        Sit alias corrupti corporis consequatur at. Ducimus exercitationem
        delectus animi aspernatur eius commodi, soluta Animi minima placeat est
        iste vitae animi delectus Est nulla et nihil maiores porro perferendis
        Nam!
      </div>
      <template v-if="$q.screen.gt.md">
        <div class="col-lg-3 text-caption q-pa-md">
          Sit alias corrupti corporis consequatur at. Ducimus exercitationem
          delectus animi aspernatur eius commodi, soluta Animi minima placeat
          est iste vitae animi delectus Est nulla et nihil maiores porro
          perferendis Nam!
        </div>
        <div class="col-lg-3 text-caption q-pa-md">
          Sit alias corrupti corporis consequatur at. Ducimus exercitationem
          delectus animi aspernatur eius commodi, soluta Animi minima placeat
          est iste vitae animi delectus Est nulla et nihil maiores porro
          perferendis Nam!
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component } from 'vue-property-decorator';
  import socials from 'components/socials.vue';
  // use store datas
  //}}}

  @Component({
    //declare components{{{1
    components: { socials }
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
