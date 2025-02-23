import { orderPayload } from 'src/models';
import { OrdersService } from './orders.service';
import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({ cors: true })
export class OrdersGateway {
  // serviço de websocket

  constructor(private OrdersService: OrdersService) {}

  @SubscribeMessage('orders/create')
  async handleMessage(client: any, payload: orderPayload) {
    const order = await this.OrdersService.create({
      assetId: payload.assetId,
      walletId: payload.walletId,
      type: payload.type,
      shares: payload.shares,
      price: payload.price,
    });

    return order;
  }
}
