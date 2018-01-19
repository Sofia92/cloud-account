/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {Component, Input, OnInit} from '@angular/core';
import {AccountBook} from '../model/account-book';
import {Journal} from '../model/journal';
import {AccountService} from '../service/account.service';
import {NzMessageService} from 'ng-zorro-antd';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-account-detail-root',
  templateUrl: './account-detail.component.html',
  styleUrls: ['./account-detail.component.scss']
})

export class AccountDetailComponent implements OnInit {
  @Input('accountBook') currentBook: AccountBook;
  showJournalEditor: boolean;
  journals: Journal[];

  constructor(private _accountService: AccountService, private _message: NzMessageService) {
  }

  ngOnInit() {
    this._accountService.fetchJournalsByAccountBook(this.currentBook).subscribe((journals: Journal[]) => {
      this.journals = journals;
    })
  }

  openJournalEditor() {
    this.showJournalEditor = true;
  }

  closeJournalEditor() {
    this.showJournalEditor = false;
  }

  addJournalToBook(journal: Journal) {
    this.currentBook.createJournal(journal);
    this.closeJournalEditor();
    this._accountService.appendJournalToAccountBook(this.currentBook, journal).switchMap(() => {
      return this._accountService.fetchJournalsByAccountBook(this.currentBook)
    }).subscribe((journals: Journal[]) => {
      this._message.create('success', `这是一条成功提示`);
      this.journals = journals;
    })
  }
}
