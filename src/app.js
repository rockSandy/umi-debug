import { settingStore } from "@/stores";

async function beforeRender() {
  await settingStore.getSetting();
}

export async function render(oldRender) {
  await beforeRender();
  oldRender();
}
