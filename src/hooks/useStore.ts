import { inject, provide } from 'vue';

const StoreSymbol = Symbol();

export const provideStore = (store: any): void => {
  provide(StoreSymbol, store);
};

export const useStore = (): any => {
  const store = inject(StoreSymbol);
  if (!store) {
    throw Error;
  }
  return store;
};
