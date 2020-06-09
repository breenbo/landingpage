import { Action, Module, Mutation, VuexModule } from 'vuex-module-decorators';
import Store from './index';
import { User } from 'components/models.ts'

@Module({
    dynamic: true,
    name: 'LoginStore',
  namespaced: true,
  store: Store
})
export default class LoginStore extends VuexModule {
  //{{{1 state
  public formData: User = {
      nickname:'',
      email:''
  }
  // thankYou to display and hide thank you modal
  public thankYou = false
  // alert to display and hide form modal
  public alert = false
  //}}}

  // getters
  //{{{1 getters
  /*
     public get taskSorted(): {
        return something
     }
  */

  //}}}

  // only way to change datas in state
  //{{{1 Mutation
  @Mutation
  public logUser(value: User) {
      this.formData = value
  }

  @Mutation
  public setThankYou(value: boolean): void {
      this.thankYou = value
  }
  
  @Mutation
  public setAlert(value:boolean):void {
      this.alert = value
  }
  // @Mutation
  // public setLoggedIn(value: boolean): void {
  //   this.loggedIn = value;
  // }
  //}}}

  // function to reacts to user interactions
  //{{{1 Actions
  @Action
  public logUserAction(user: User) {
      this.context.commit('logUser', user)
  }

  @Action
  public setThankYouAction (value: boolean): void {
      this.context.commit('setThankYou', value)
  }

  @Action
  public setAlertAction(value: boolean): void {
      this.context.commit('setAlert', value)
  }
  // @Action
  // public registerUser(user: { email: string; password: string }) {
  //   firebaseAuth
  //     .createUserWithEmailAndPassword(user.email, user.password)
  //     .then(response => {
  //       console.log('Success', response);
  //     })
  //     .catch(error => {
  //       showErrorMessage(error.message);
  //     });
  // }
  //}}}
}
