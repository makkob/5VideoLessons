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


import { useCounterStore } from './store'

const counter = useCounterStore()

counter.count++
// with autocompletion ✨
counter.$patch({ count: counter.count + 1 })
// or using an action instead
counter.increment()