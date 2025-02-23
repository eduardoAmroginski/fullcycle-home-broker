import { OrderType } from './orders/entities/order.entity';

export type orderPayload = {
  assetId: string;
  walletId: string;
  type: OrderType;
  shares: number;
  price: number;
};
