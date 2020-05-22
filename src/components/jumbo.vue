<template>
  <div>
    <q-card square flat>
      <q-img class="jumboImg" src="../statics/img/polyPantherHD.jpg" />
      <div class="title text-amber-13 text-h1 text-weight-thin">
        <div class="text-h4">Find your way,</div>
        <div class="q-mb-lg">Become yourself</div>
        <q-form @submit="onSubmit" class="q-gutter-md q-mt-xl">
          <q-input
            v-model="nickname"
            type="text"
            label="Nickname"
            color="secondary"
            dark
          />
          <q-input
            v-model="email"
            type="text"
            label="Email"
            color="secondary"
            dark
          />
          <div class="q-mt-xl">
            <q-btn
              type="submit"
              color="amber-13"
              text-color="primary"
              class="text-h5 text-weight-bold full-width"
              icon="check"
              rounded
              >join us</q-btn
            >
          </div>
        </q-form>
      </div>
      <!-- TODO: add social networks logos -->
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
    nickname = '';
    email = '';
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
  .jumboImg {
    height: 80vh;
  }
  .title {
    position: absolute;
    top: 20%;
    right: 6%;
  }
</style>
