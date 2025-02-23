import { AssetStore } from "./models";
import { create } from "zustand";

export const useAssetStore = create<AssetStore>((set) => ({
  assets: [],
  changeAsset: (asset) =>
    set((state) => {
      const assetIndex = state.assets.findIndex(
        (a) => (a.symbol = asset.symbol)
      );

      if (assetIndex === -1) {
        return {
          assets: [...state.assets, asset],
        };
      }

      const newAssets = [...state.assets];
      newAssets[assetIndex] = asset;
      return { assets: newAssets };
    }),
}));
