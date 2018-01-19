/**
 * User: sofia
 * Date: 2018/1/19
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {CreateJournalModalComponent} from './account/create-journal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    ReactiveFormsModule,
    NgZorroAntdModule.forRoot(),
  ],
  declarations: [
    CreateJournalModalComponent,
  ],
  providers: [],
  exports: [
    CreateJournalModalComponent,
  ]
})

export class AccountComponentModule {
}
