import { Injectable } from '@angular/core';
import * as _ from 'underscore';

@Injectable({
  providedIn: 'root'
})
export class GlobalStateService {
  private variables = [];
  public sideNav: any;

  constructor() {}

  get(k: string) {
    if (_.findWhere(this.variables, { key: k })) {
      return _.findWhere(this.variables, { key: k }).value;
    }
    return null;
  }

  set(key: string, value: any) {
    this.variables.push({ key: key, value: value });
  }

  delete(key: string) {
    this.variables = _.without(
      this.variables,
      _.findWhere(this.variables, { key: key })
    );
  }

  list() {
    return this.variables;
  }
}
