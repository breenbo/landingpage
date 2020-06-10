<template>
  <q-intersection class="contentContainer">
    <transition appear enter-active-class="animated fadeInUp">
      <div>
        <div
          class="row text-grey-8"
          :class="$q.screen.gt.xs ? 'q-mx-xl' : 'q-mx-xs'"
        >
          <q-card flat :class="$q.screen.gt.sm ? 'q-my-xl' : 'q-my-md'">
            <q-card-section>
              <div
                :class="
                  $q.screen.gt.lg
                    ? 'text-h2'
                    : $q.screen.gt.xs
                    ? 'text-h3'
                    : 'text-h5'
                "
              >
                Amet fugiat veniam dolor
              </div>
            </q-card-section>
          </q-card>
        </div>
        <!-- 2 testimonials for big screens -->
        <div
          class="row justify-around q-gutter-xl q-mx-xl q-my-sm"
          v-if="$q.screen.gt.sm"
        >
          <q-card class="col q-my-xl testiCard" v-for="n in 2" :key="n" flat>
            <q-avatar size="150px" class="avatar">
              <q-img
                srcset="statics/img/profilSmall.webp"
                src="statics/img/profilSmall.jpg"
                spinner-color="primary"
                spinner-size="82px"
              />
            </q-avatar>
            <q-card-section>
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-grey-6 text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section class="text-h5 text-grey-7 q-px-xl">
              Consectetur ab reiciendis perferendis obcaecati ea sint Quod
              consectetur recusandae eos voluptates vitae officiis? Quidem
              dolorum atque ratione ab deserunt. Voluptatibus reprehenderit
              consequatur quaerat eveniet.
            </q-card-section>
          </q-card>
        </div>

        <!-- 1 testimonial for big screens -->
        <div class="row justify-center q-gutter-xl q-my-lg" v-else>
          <q-card class="col q-my-xl testiCard" flat>
            <q-avatar
              :size="
                $q.screen.gt.sm ? '150px' : $q.screen.gt.xs ? '120px' : '100px'
              "
              :class="
                $q.screen.gt.sm
                  ? 'avatar'
                  : $q.screen.gt.xs
                  ? 'avatarMedium'
                  : 'avatarSmall'
              "
            >
              <q-img
                srcset="statics/img/profilSmall.webp"
                src="statics/img/profilSmall.jpg"
                spinner-color="primary"
                spinner-size="82px"
              />
            </q-avatar>
            <q-card-section v-if="$q.screen.gt.xs">
              <div class="text-h6">Our Changing Planet</div>
              <div class="text-grey-6 text-subtitle2">by John Doe</div>
            </q-card-section>
            <q-card-section
              class="text-grey-7"
              :class="
                $q.screen.gt.xs ? 'q-px-xl text-h5' : 'q-px-lg text-subtitle1'
              "
            >
              Consectetur ab reiciendis perferendis obcaecati ea sint Quod
              consectetur recusandae eos voluptates vitae officiis? Quidem
              dolorum atque ratione ab deserunt. Voluptatibus reprehenderit
              consequatur quaerat eveniet.
            </q-card-section>
          </q-card>
        </div>
      </div>
    </transition>
  </q-intersection>
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
  .cardImageBig {
    height: 30%;
  }
  .cardImageSmall {
    height: 20%;
  }
  .avatar {
    border-radius: 50% !important;
    position: absolute;
    z-index: 5;
    top: -70px;
    right: 10%;
  }
  .avatarMedium {
    border-radius: 50% !important;
    position: absolute;
    z-index: 5;
    top: -40px;
    right: 10%;
  }
  .avatarSmall {
    border-radius: 50% !important;
    position: absolute;
    z-index: 5;
    top: -90px;
    right: 10%;
  }
  .testiCard {
    max-width: 600px;
  }
  .contentContainer {
    min-height: 410px;
  }
  .fadeInUp {
    transition-duration: 1s;
  }
</style>
