/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {AccountService} from '../service/account.service';
import {AccountBook} from '../model/account-book';

@Component({
  selector: 'app-account-books-root',
  templateUrl: './account-books.component.html',
  styleUrls: ['./account-books.component.scss']
})

export class AccountBooksComponent implements OnInit {
  accountBooks: AccountBook[];
  isCollapsed: boolean;
  @Output('currentBookEmitter') currentBook = new EventEmitter();

  constructor(private _accountService: AccountService) {
    this.isCollapsed = false;
  }

  ngOnInit() {
    this._accountService.fetchAccountBooks().subscribe((books: AccountBook[]) => {
      this.accountBooks = books;
      this.currentBook.emit(books[0]);
    })
  }

  toggleCollapsed() {
    this.isCollapsed = !this.isCollapsed;
  }

  setCurrentBook(book: AccountBook) {
    this.currentBook.emit(book);
  }
}
