import { observable, action, runInAction } from "mobx";

import { getSetting } from "@/service/setting";

export default class {
  @observable name = "";
  @observable loading = false;

  @action
  async getSetting() {
    this.loading = true;
    const result = await getSetting();
    this.loading = false;
    runInAction(() => {
      if (result.success) {
        this.name = result.resultObject.name;
      }
    });
  }
}
