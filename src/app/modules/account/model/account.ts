/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
enum AccountType {
  Cash = 1,
  Aliba = 2,
}
export interface IAccountInterface {
  id?: number;
  name?: string;
  description?: string;
  remainder?: number;
  type?: AccountType;
}

export class Account implements IAccountInterface {
  id?: number;
  name?: string;
  description?: string;
  remainder?: number;
  type?: AccountType;

  static createByJSON(json: IAccountInterface = {}): Account {
    const {id, name, description, remainder, type} = json;
    return new Account({id, name, description, remainder, type});
  }

  constructor(attr: IAccountInterface = {}) {
    this.id = attr.id;
    this.name = attr.name;
    this.description = attr.description;
    this.remainder = attr.remainder;
    this.type = attr.type;
  }
}
