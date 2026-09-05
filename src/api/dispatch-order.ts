import { api } from "@/lib/axios";

interface DispatchOrderParams {
  orderId: string;
}

async function dispatchOrder({ orderId }: DispatchOrderParams) {
  await api.patch(`/orders/${orderId}/dispatch`);
}

export { dispatchOrder }