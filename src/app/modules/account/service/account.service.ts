/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {Injectable} from '@angular/core';
import {environment} from './../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AccountSerialize} from './account-serialize';
import {AccountBook} from '../model/account-book';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Account} from '../model/account';
import {Journal} from '../model/journal';

const api = environment.host;
@Injectable()
export class AccountService {
  constructor(private http: HttpClient) {
  }

  fetchAccountBooks(): Observable<AccountBook[]> {
    return this.http.get(`${api}/account_books`).map((books: any[]) => {
      return books.map(book => {
        const normalizedBook = AccountSerialize.normalizeAccountBook(book);
        return AccountBook.createByJSON(normalizedBook);
      })
    })
  }

  fetchAccounts(): Observable<Account[]> {
    return this.http.get(`${api}/accounts`).map((accounts: any[]) => {
      return accounts.map(account => {
        const normalizedAccount = AccountSerialize.normalizeAccount(account);
        return Account.createByJSON(normalizedAccount);
      })
    })
  }

  fetchJournalsByAccountBook(book: AccountBook): Observable<Journal[]> {
    return this.http.get(`${api}/account_books/${book.id}/journals`).map((journals: any[]) => {
      return journals.map(journal => {
        const normalizedJournal = AccountSerialize.normalizeJournal(journal);
        return Journal.createByJSON(normalizedJournal);
      })
    })
  }

  appendJournalToAccountBook(book: AccountBook, journal: Journal) {
    const params = AccountSerialize.deNormalizeJournal(book, journal);
    return this.http.post(`${api}/account_journals`, params)
  }
}
