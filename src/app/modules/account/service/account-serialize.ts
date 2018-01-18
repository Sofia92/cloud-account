/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
import {IJournalInterface} from '../model/journal';
import {IAccountBookInterface} from '../model/account-book';

interface IServerAccountInterface {
  name?: string;
  description?: string;
  remainder?: number;
  type?: number;
  id?: number;
}
interface IServerAccountBookInterface {
  id?: number;
  name?: string;
  created_at?: Date;
  updated_at?: Date;
  description?: string;
  icon?: string;
}

interface IServerJournalInterface {
  id?: number;
  account_id?: number;
  category_id?: number;
  money?: number;
  state_type?: number;
  comments?: string;
  cost_at?: Date;
}
export class AccountSerialize {
  static normalizeAccountBook(json: IServerAccountBookInterface): IAccountBookInterface {
    const {id, name, created_at, updated_at, description, icon} = json;
    return {
      id, name, createdAt: created_at, updatedAt: updated_at, description, icon
    }
  }

  static normalizeJournal(json: IServerJournalInterface): IJournalInterface {
    const {id, account_id, category_id, money, state_type, comments, cost_at} = json;
    return {
      id,
      money,
      comments,
      state: state_type,
      costAt: cost_at,
      account: {id: account_id},
      category: {id: category_id}
    }
  }
}
