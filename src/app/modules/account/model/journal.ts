/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {Category, ICategoryInterface} from './category';
import {IAccountInterface, Account} from './account';
enum StateType {
  Income = 1,
  Payments = 2
}

export interface IJournalInterface {
  id?: number;
  account?: IAccountInterface;
  category?: ICategoryInterface;
  money?: number;
  state?: StateType;
  comments?: string;
  costAt?: Date;
}

export class Journal implements IJournalInterface {
  id?: number;
  account?: Account;
  category?: Category;
  money?: number;
  state?: StateType;
  comments?: string;
  costAt?: Date;

  static createByJSON(json: IJournalInterface = {}): Journal {
    const {id, account, category, money, state, comments, costAt} = json;
    return new Journal({id, account, category, money, state, comments, costAt});
  }

  constructor(attr: IJournalInterface = {}) {
    this.id = attr.id;
    this.account = attr.account;
    this.category = attr.category;
    this.money = attr.money;
    this.state = attr.state;
    this.comments = attr.comments;
    this.costAt = attr.costAt;
  }
}
