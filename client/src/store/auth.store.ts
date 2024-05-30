import { create } from "zustand";

interface AuthStoreStates {
  account: string;
}

interface AuthStoreGetterProps {
  getAccount: () => string;
}

interface AuthStoreSetterProps {
  setAccount: (account: string) => void;
}

interface AuthStoreActions {
  reset: () => void;
}

interface AuthStoreProps
  extends AuthStoreGetterProps,
    AuthStoreStates,
    AuthStoreSetterProps,
    AuthStoreActions {}

const initState: AuthStoreStates = {
  account: null!,
} as const;

const useAuthStore = create<AuthStoreProps>((set, get) => ({
  ...initState,
  getAccount: () => get().account,
  setAccount: (account) => set(() => ({ account })),
  reset: () => set((state) => ({ ...state, ...initState })),
}));

export default useAuthStore;
