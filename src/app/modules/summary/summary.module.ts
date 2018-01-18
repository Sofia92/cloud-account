/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SummaryIndexComponent} from './pages/index.page';


const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'index'},
  {path: 'index', component: SummaryIndexComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  declarations: [
    SummaryIndexComponent,
  ],
  exports: [],
  providers: []
})

export class SummaryModule {
}
