/**
 * User: sofia
 * Date: 2018/1/18
 * Version: 1.0.0
 * Description:
 */
export interface ICategoryInterface {
  id?: number | string;
  name?: string;
  children?: Category[];
}

export class Category implements ICategoryInterface {
  id?: number | string;
  name?: string;
  children?: Category[];

  static createByJSON(json: ICategoryInterface = {}): Category {
    const {id, name, children} = json;
    return new Category({id, name, children: (children || []).map(category => Category.createByJSON(category))});
  }

  constructor(attr: ICategoryInterface) {
    this.id = attr.id;
    this.name = attr.name;
    this.children = attr.children;
  }
}
