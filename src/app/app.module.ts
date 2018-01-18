import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {SharedModule} from './shared/shared.module';
import {AccountModule} from './modules/account/account.module';
import {SummaryModule} from './modules/summary/summary.module';

import {AppComponent} from './app.component';
import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', loadChildren: './modules/summary/summary.module#SummaryModule'},
  {path: 'account', loadChildren: './modules/account/account.module#AccountModule'}
];
@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    SharedModule,
    SummaryModule,
    AccountModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
