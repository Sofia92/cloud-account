/**
 * User: sofia
 * Date: 2018/1/19
 * Version: 1.0.0
 * Description:
 */
export interface IBaseInterface {
  id?: number | string;
  pid?: number | string;
  name?: string;
  parent?: Base;
  children?: Base[];
}
export class Base implements IBaseInterface {
  id?: number | string;
  pid?: number | string;
  name?: string;
  parent?: Base;
  children?: Base[];

  constructor(attr: IBaseInterface = {}) {
    this.id = attr.id;
    this.pid = attr.pid;
    this.name = attr.name;
    this.children = attr.children || [];
  }

  appendChild(base: Base) {
    base.pid = this.id;
    base.parent = this;
    this.children.push(base);
  }
}
