/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {AccountService} from './service/account.service';
import {AccountPageComponent} from './pages/account.page';
import {AccountBooksComponent} from './pages/account-books.component';
import {AccountDetailComponent} from './pages/account-detail.component';


const accountRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component: AccountPageComponent},
];
@NgModule({
  imports: [
    FormsModule,
    HttpClientModule,
    RouterModule.forChild(accountRoutes)
  ],
  declarations: [
    AccountPageComponent,
    AccountBooksComponent,
    AccountDetailComponent,
  ],
  providers: [AccountService],
  exports: []
})

export class AccountModule {
}
