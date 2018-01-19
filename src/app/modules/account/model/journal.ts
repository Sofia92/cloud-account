/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {Category, ICategoryInterface} from './category';
import {IAccountInterface, Account} from './account';
import {Base} from './base';

export interface IJournalInterface {
  id?: number | string;
  account?: IAccountInterface;
  category?: ICategoryInterface;
  money?: number;
  income?: boolean;
  comments?: string;
  costAt?: Date;
}

export class Journal extends Base implements IJournalInterface {
  account?: Account;
  category?: Category;
  money?: number;
  income?: boolean;
  comments?: string;
  costAt?: Date;

  static createByJSON(json: IJournalInterface = {}): Journal {
    const {id, account, category, money, income, comments, costAt} = json;
    return new Journal({
      id,
      account: Account.createByJSON(account),
      category: Category.createByJSON(category),
      money,
      income,
      comments,
      costAt
    });
  }

  constructor(attr: IJournalInterface = {}) {
    super(attr);
    this.account = attr.account;
    this.category = attr.category;
    this.money = attr.money;
    this.income = attr.income || false;
    this.comments = attr.comments;
    this.costAt = attr.costAt || new Date();
  }
}
