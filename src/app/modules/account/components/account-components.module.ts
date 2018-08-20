/**
 * User: sofia
 * Date: 2018/1/19
 * Version: 1.0.0
 * Description:
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateJournalModalComponent } from './account/create-journal.component';
import { ApolloUiModule } from '../../../../ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ApolloUiModule,
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
