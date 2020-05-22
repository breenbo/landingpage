<template>
  <div>
    <div class="row q-mx-xl text-grey-8">
      <q-card flat class="q-my-xl">
        <q-card-section>
          <div class="text-h2">Amet fugiat veniam dolor</div>
        </q-card-section>
      </q-card>
    </div>
    <div class="row q-gutter-xl q-mx-xl q-my-sm">
      <q-card class="col q-my-xl" v-for="n in 3" :key="n">
        <q-avatar size="150px" class="avatar">
          <q-img
            src="statics/img/profilSmall.jpg"
            spinner-color="primary"
            spinner-size="82px"
          />
        </q-avatar>
        <q-card-section>
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </q-card-section>
        <q-card-section class="text-h5 text-grey-7">
          Consectetur ab reiciendis perferendis obcaecati ea sint Quod
          consectetur recusandae eos voluptates vitae officiis? Quidem dolorum
          atque ratione ab deserunt. Voluptatibus reprehenderit consequatur
          quaerat eveniet
        </q-card-section>
      </q-card>
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
  export default class TestimonialLanding extends Vue {
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
  .cardImage {
    height: 30%;
  }
  .avatar {
    border-radius: 50% !important;
    position: absolute;
    z-index: 5;
    top: -28%;
    right: 10%;
  }
</style>
