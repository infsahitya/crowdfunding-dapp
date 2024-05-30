import { ethers } from "ethers";
import { create } from "zustand";

interface AppStoreStates {
  app: ethers.Contract;
  provider: ethers.BrowserProvider;
}

interface AppStoreSetterProps {
  setApp: (contract: ethers.Contract) => void;
  setProvider: (provider: ethers.BrowserProvider) => void;
}

interface AppStoreGetterProps {
  getApp: () => ethers.Contract;
  getProvider: () => ethers.BrowserProvider;
}

interface AppStoreProps
  extends AppStoreStates,
    AppStoreGetterProps,
    AppStoreSetterProps {}

const initState: AppStoreStates = {
  app: null!,
  provider: null!,
} as const;

const useAppStore = create<AppStoreProps>((set, get) => ({
  ...initState,
  getApp: () => get().app,
  getProvider: () => get().provider,
  setApp: (contract) => set((state) => ({ ...state, app: contract })),
  setProvider: (provider) => set((state) => ({ ...state, provider: provider })),
}));

export default useAppStore;
