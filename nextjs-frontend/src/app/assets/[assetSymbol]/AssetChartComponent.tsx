"use client";

import AssetShow from "@/components/AssetShow";
import { ChartComponent, ChartComponentRef } from "@/components/ChartComponent";
import { Asset } from "@/models";
import React, { useRef } from "react";

export function AssetChartComponent(props: { asset: Asset }) {
  const chartRef = useRef<ChartComponentRef>(null);

  return (
    <ChartComponent ref={chartRef} header={<AssetShow asset={props.asset} />} />
  );
}
