/**
 * User: sofia
 * Date: 2018/1/19
 * Version: 1.0.0
 * Description:
 */
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AccountService} from '../../service/account.service';
import {Account} from '../../model/account';
import {Journal} from '../../model/journal';

@Component({
  selector: 'app-modal-create-journal',
  templateUrl: './create-journal.component.html',
  styleUrls: ['./create-journal.component.scss']
})

export class CreateJournalModalComponent implements OnInit {
  @Input('isOpen') isOpen: boolean;
  @Output('closeModal') closeModal = new EventEmitter();
  @Output('submitModal') submitModal = new EventEmitter();
  journal: Journal = new Journal({});
  accounts: Account[];
  income;
  out;

  constructor(private _accountService: AccountService) {
  }

  ngOnInit() {

    this._accountService.fetchAccounts().subscribe((accounts: Account[]) => {
      this.accounts = accounts;
      this.journal.account = accounts[0];
    });
  }

  cancel() {
    this.closeModal.emit();
  }

  confirm() {
    this.journal.income = this.income;
    this.submitModal.emit(this.journal);
  }

}
