/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {HeaderComponent} from './header.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule
  ],
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent
  ]
})

export class SharedModule {

}
