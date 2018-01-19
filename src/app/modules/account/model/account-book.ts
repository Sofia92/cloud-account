/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {IJournalInterface, Journal} from './journal';
import {Base} from './base';

export interface IAccountBookInterface {
  id?: number | string;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;
  icon?: string;
  parent?: any;
  children?: Journal[];
}

export class AccountBook extends Base implements IAccountBookInterface {
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;
  icon?: string;
  parent?: any;
  children?: Journal[];

  static createByJSON(json: IAccountBookInterface = {}): AccountBook {
    const {id, name, createdAt, updatedAt, description, children = [], icon, parent} = json;
    const accountBook = new AccountBook({
      id, name,
      createdAt,
      updatedAt,
      description,
      children,
      icon,
      parent,
    });
    accountBook.loadChildren(children);
    return accountBook;
  }

  constructor(attr: IAccountBookInterface) {
    super(attr);
    this.createdAt = attr.createdAt;
    this.updatedAt = attr.updatedAt;
    this.description = attr.description;
    this.icon = attr.icon;
    this.parent = attr.parent;
  }

  createJournal(journal: Journal) {
    const newJournal = Journal.createByJSON(journal);
    this.appendChild(newJournal);
    return newJournal;
  }

  loadChildren(children = []) {
    children.map(journal => this.createJournal(journal));
  }


}
