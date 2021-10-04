import { action, observable } from 'mobx';

export class JsonStore {
  /** Observalbe prop to hold count */
  @observable count = 0;
  @observable JSONList: Array<any> = [];

  /** Action which will update count in store */
  @action setJSON(JSON: Array<any>): void {
    const createArray: Array<any> = JSON && Array.isArray(JSON) && JSON.length && JSON.map((arrayItem: any) => {
      if (typeof arrayItem === 'object' &&
      !Array.isArray(arrayItem) &&
      arrayItem !== null) {
        const keysOfObject: Array<string> = Object.keys(arrayItem);
        return {
          ...arrayItem,
          keysOfObject
        }
      }
    }).filter((mappedItem: any) => mappedItem) || [];
    this.JSONList = new Array(...createArray);
  }

  @action updateJSON(changedObjs: Object, index: number): void {
    const newArray = [
      ...this.JSONList.slice(0, index),
      changedObjs,
      ...this.JSONList.slice(index + 1),
    ]
    this.JSONList = newArray;
  }

}

export const jsonStore = new JsonStore();
