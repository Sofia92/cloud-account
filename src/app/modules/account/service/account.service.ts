/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {NgModule} from '@angular/core';
import {environment} from './../../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {AccountSerialize} from './account-serialize';
import {AccountBook} from '../model/account-book';

const api = environment.host;
@NgModule()
export class AccountService {
  constructor(private http: HttpClient) {
  }

  fetchAccountBooks() {
    return this.http.get(`${api}/account-books`).map((books) => {
      return books.map(book => {
        const normalizedBook = AccountSerialize.normalizeAccountBook(book);
        return AccountBook.createByJSON(normalizedBook);
      })
    })
  }
}
