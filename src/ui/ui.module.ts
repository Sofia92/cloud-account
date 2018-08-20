/**
 * User: sofia
 * Date: 2018/8/19
 * Version: 1.0.0
 * Description:
 */
import { NgModule } from '@angular/core';
import { ApButton } from './components/button/button';
import { ApModal } from './components/modal/modal';
@NgModule({
  declarations: [
    ApButton,
    ApModal,
  ],
  exports: [
    ApButton,
    ApModal,
  ]
})
export class ApolloUiModule {
}
