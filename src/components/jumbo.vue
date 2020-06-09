<template>
  <div>
    <q-card square flat class="bg-primary" :class="$q.screen.gt.md ? 'bigHeader': $q.screen.gt.sm ? 'mediumHeader': 'smallHeader'">
      <div
        class="row justify-end text-amber-13 text-weight-thin title q-mx-lg"
        :class="$q.screen.gt.md ? 'text-h1' : $q.screen.gt.sm ? 'text-h2':$q.screen.gt.xs ? 'text-h3': 'text-h4'"
      >
      <img
          v-if="$q.screen.gt.sm"
        class="col-sm-5 col-md-6 image hidden-xs"
        :srcset="`${imgJumbo}.webp`"
        :src="`${imgJumbo}.jpg`"
      />
        <div v-else-if="$q.screen.gt.xs" class="col-sm-4 self-center paw">
        </div>
        <div class="col-12 col-md-6"
             :class="$q.screen.gt.xs ? 'q-mt-xl':'q-mt-lg'"
            >
            <div class="col"
                 :class="$q.screen.gt.sm ? 'text-h4':$q.screen.gt.xs ? 'text-h5':'text-h6'"
                >Find your way,</div>
            <div class="col q-mb-lg"
                 :class="$q.screen.gt.sm ? 'q-mb-lg':'q-mb-md'"
                >Become yourself</div>
            <form-module buttonText="get free stuff" class="col"/>
        </div>
      </div>
    </q-card>
  </div>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component } from 'vue-property-decorator';
  // use store datas
  //}}}

  @Component({
    //declare components{{{1
    components: {
      socials: () => import('components/socials.vue'),
      formModule: () => import('components/form.vue')
    }
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
  export default class Jumbo extends Vue {
    //props{{{1
    //@Prop(String) readonly someProp!: string
    //}}}
    //datas{{{1
    titleJumbo = 'Be yourself';
    imgJumbo = 'statics/img/polyPantherHDsmall';
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

<style scoped lang="sass">
  .bigHeader
    height: 650px

  .mediumHeader
    height: 550px

  .smallHeader
    height: 450px

  .image
    max-height: 650px
    position: absolute
    bottom: 0
    left: 0

</style>
