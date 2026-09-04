import { api } from "@/lib/axios";

interface CancelOrderParams {
  orderId: string;
}

async function cancelOrder({ orderId }: CancelOrderParams) {
  await api.patch(`/orders/${orderId}/cancel`);
}

export { cancelOrder }