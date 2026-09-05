import { api } from "@/lib/axios";

interface ApproveOrderParams {
  orderId: string;
}

async function approveOrder({ orderId }: ApproveOrderParams) {
  await api.patch(`/orders/${orderId}/approve`);
}

export { approveOrder }