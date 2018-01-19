/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {Component} from '@angular/core';
import {AccountBook} from '../model/account-book';

@Component({
  selector: 'app-account-page-root',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss']
})

export class AccountPageComponent {
  currentBook: AccountBook;

  setCurrentBook(book: AccountBook) {
    this.currentBook = book;
  }
}
