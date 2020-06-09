<template>
  <div class="formContainer">
    <q-form
      @submit.prevent="submitForm"
      class="q-gutter-md"
      :class="$q.screen.gt.sm ? 'q-my-xl' : 'q-mt-md q-mb-lg'"
    >
      <q-input
        v-model="formData.nickname"
        type="text"
        label="Nickname"
        ref="nickname"
        color="secondary"
        class="text-h5"
        dark
        clearable
        lazy-rules="ondemand"
        :input-style="{ color: 'hsl(46,100%,90%)' }"
        :rules="[
          val => val.length >= 6 || 'Please choose nick with more than 6 chars.'
        ]"
      />
      <q-input
        v-model="formData.email"
        type="email"
        label="Email"
        ref="email"
        color="secondary"
        class="text-h5"
        dark
        clearable
        lazy-rules="ondemand"
        :input-style="{ color: 'hsl(46,100%,90%)' }"
        :rules="[
          val => isValidEmailAdress(val) || 'Please enter a valid email adress'
        ]"
      />
      <div class="q-mt-lg">
        <q-btn
          type="submit"
          color="amber-13"
          text-color="primary"
          class="text-weight-bold full-width"
          :class="$q.screen.gt.xs ? 'text-h5' : 'text-h6'"
          icon="check"
          rounded
          >{{ buttonText }}</q-btn
        >
      </div>
    </q-form>
    <q-dialog v-model="thankYou">
      <q-card class="bg-secondary thankCard">
        <q-card-section class="row items-center">
          <div :class="$q.screen.gt.sm ? 'text-h2' : 'text-h4'" class="q-my-lg">
            Thank you {{ nickname | titleCase }}
          </div>
          <div
            class="row items-center"
            :class="$q.screen.gt.sm ? 'text-h4' : 'text-subtitle1'"
          >
            <div class="col-3">
              <q-icon name="check_circle_outline" size="4em" />
            </div>
            <div class="col-9 q-pl-md q-mb-md">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae, itaque.
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script lang="ts">
  //Imports{{{1
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { getModule } from 'vuex-module-decorators';
  import { User } from 'components/models.ts';
  // use store datas
  import LoginStore from '../store/loginStore';
  //}}}

  @Component({
    //declare components{{{1
    //}}}
    //filter{{{1
    filters: {
      titleCase(word: string): string {
        return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
      }
    }
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
    loginStore = getModule(LoginStore);

    formData: User = {
      nickname: 'azertyu',
      email: 'f@f.fr'
    };

    nickname = '';

    //}}}
    //methods{{{1
    isValidEmailAdress(email: string): boolean {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    submitForm(): void {
      this.loginStore.logUserAction(this.formData);
      this.loginStore.setThankYouAction(true);
      this.nickname = this.formData.nickname;
      this.formData.nickname = '';
      this.formData.email = '';
      // hide alert form
      this.loginStore.setAlertAction(false);
      //this.loginStore.logUserAction(this.formData);
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
    get thankYou() {
      return this.loginStore.thankYou;
    }

    set thankYou(value: boolean) {
      this.loginStore.setThankYouAction(value);
    }
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
  .formContainer {
    width: 100%;
  }
  .thankCard {
    max-width: 800px !important;
  }
</style>
