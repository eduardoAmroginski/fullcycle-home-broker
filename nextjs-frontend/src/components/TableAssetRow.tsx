"use client";
import { Button, TableCell, TableRow } from "flowbite-react";
import AssetShow from "./AssetShow";
import Link from "next/link";
import { Asset } from "@/models";
import { useAssetStore } from "@/store";
import { useShallow } from "zustand/react/shallow";

export default function TableAssetRow(props: {
  asset: Asset;
  walletId: string;
}) {
  const { asset, walletId } = props;

  const assetFound = useAssetStore(
    useShallow((state) => state.assets.find((a) => a.symbol === asset.symbol))
  );

  const asset_ = assetFound || asset;

  return (
    <TableRow>
      <TableCell>
        <AssetShow asset={asset_} />
      </TableCell>
      <TableCell>R$ {asset_.price}</TableCell>
      <TableCell>
        <Button
          className="w-fit"
          color="light"
          as={Link}
          href={`/assets/${asset_.symbol}?wallet_id=${walletId}`}
        >
          Comprar/vender
        </Button>
      </TableCell>
    </TableRow>
  );
}
