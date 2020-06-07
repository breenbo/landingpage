<template>
  <q-header>
    <q-toolbar class="primary text-grey-4">
      <q-toolbar-title>
        <q-icon name="graphic_eq" class="text-h3" />
        {{ title }}
      </q-toolbar-title>
      <q-space />
      <!-- TODO : add modal to button -->
      <!-- slide transition of button when user reach the end of the jumbo -->
      <q-slide-transition>
        <q-btn
          v-if="scrollPosition > 730"
          color="secondary"
          rounded
          text-color="primary"
          icon="check"
          label="join us"
        />
      </q-slide-transition>
      <!-- scrollObserver to check scrollPosition with onScroll method -->
      <q-scroll-observer @scroll="onScroll" />
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
    scrollPosition = 0;
    buttons: Button = {
      home: { name: 'home', route: '/' },
      products: { name: 'products', route: '/products' },
      aboutUs: { name: 'about us', route: '/about' }
    };
    // get the store from TaskStore
    //store = getModule(TaskStore);
    // somedata:string = "some"
    //}}}
    //methods{{{1
    onScroll(info: any): void {
      this.scrollPosition = info.position;
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
    get currentLink() {
      return this.$route.path;
    }
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
