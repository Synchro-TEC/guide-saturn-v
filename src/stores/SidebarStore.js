import { extendObservable, observable } from 'mobx';

class SidebarStore {
  constructor() {
    extendObservable(this, {
      sanfonas: {
        formOpened: false,
      },
      toggle: key => {
        this.sanfonas[key] = !this.sanfonas[key];
      },
    });
  }
}

export default new SidebarStore();
