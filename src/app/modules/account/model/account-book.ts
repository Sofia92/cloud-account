/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {IJournalInterface, Journal} from './journal';

export interface IAccountBookInterface {
  id?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;
  journals?: IJournalInterface[];
  icon?: string;
}

export class AccountBook implements IAccountBookInterface {
  id?: number;
  name?: string;
  createdAt?: Date;
  updatedAt?: Date;
  description?: string;
  journals?: Journal[];
  icon?: string;

  static createByJSON(json: IAccountBookInterface = {}): AccountBook {
    const {id, name, createdAt, updatedAt, description, journals, icon} = json;
    return new AccountBook({
      id,
      name,
      createdAt,
      updatedAt,
      description,
      journals: (journals || []).map(journal => Journal.createByJSON(journal)),
      icon
    });
  }

  constructor(attr: IAccountBookInterface) {
    this.id = attr.id;
    this.name = attr.name;
    this.createdAt = attr.createdAt;
    this.updatedAt = attr.updatedAt;
    this.description = attr.description;
    this.journals = attr.journals;
    this.icon = attr.icon;
  }
}
