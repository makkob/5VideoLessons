import { createPinia } from 'pinia';
import { App } from 'vue';

let pinia: ReturnType<typeof createPinia>;

export function usePinia(app: App) {
  if (!pinia) {
    pinia = createPinia();
    app.use(pinia);
  }
  return pinia;
}
